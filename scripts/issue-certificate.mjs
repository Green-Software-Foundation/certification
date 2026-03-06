#!/usr/bin/env node

/**
 * issue-certificate.mjs — Parse a disclosure.md and call the credentials API.
 *
 * Usage:
 *   node scripts/issue-certificate.mjs <submission-dir> \
 *     --email <contact-email> \
 *     --disclosure-url <published-github-url> \
 *     [--api-url <url>] \
 *     [--api-secret <secret>] \
 *     [--dry-run]
 */

import { readFileSync } from "node:fs";
import { resolve, join } from "node:path";

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function camelCase(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const result = { positional: [], flags: {} };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--dry-run") {
      result.flags.dryRun = true;
    } else if (args[i].startsWith("--") && i + 1 < args.length) {
      const key = camelCase(args[i].slice(2));
      result.flags[key] = args[++i];
    } else if (!args[i].startsWith("--")) {
      result.positional.push(args[i]);
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Markdown parsing helpers
// ---------------------------------------------------------------------------

/** Split the disclosure file into numbered PART sections. */
function splitSections(text) {
  const sections = {};
  const re = /^## PART (\d+) —/gm;
  const starts = [];
  let match;

  while ((match = re.exec(text)) !== null) {
    starts.push({ part: parseInt(match[1], 10), index: match.index });
  }

  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].index : text.length;
    sections[starts[i].part] = text.slice(starts[i].index, end);
  }

  return sections;
}

/**
 * Extract a **Label:** Value field from a section.
 *
 * Handles three patterns:
 *   1. **Label:** Value        (same line)
 *   2. **Label:**\nValue…      (multiline after colon)
 *   3. **Label?**\nValue…      (question form, multiline)
 */
function extractField(section, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Same-line: **Label:** Value
  const sameLineRe = new RegExp(
    `\\*\\*${escaped}:\\*\\*\\s*(.+)`,
    "i",
  );
  const sameLineMatch = section.match(sameLineRe);
  if (sameLineMatch) {
    return sameLineMatch[1].trim();
  }

  // Multiline: **Label:**\n or **Label?**\n followed by value text
  const multiLineRe = new RegExp(
    `\\*\\*${escaped}[?:]\\*\\*\\s*\\n([\\s\\S]*?)(?=\\n\\*\\*|\\n###|\\n---|\\n\\|)`,
    "i",
  );
  const multiLineMatch = section.match(multiLineRe);
  if (multiLineMatch) {
    return multiLineMatch[1].trim();
  }

  return undefined;
}

/**
 * Parse the first markdown pipe-table found after `afterHeader` in `section`.
 * Returns an array of objects keyed by the header row column names.
 * Rows whose first cell starts with ** (e.g. **Total**) are filtered out.
 */
function parseTable(section, afterHeader) {
  let text = section;
  if (afterHeader) {
    const idx = text.indexOf(afterHeader);
    if (idx < 0) return [];
    text = text.slice(idx);
  }

  const lines = text.split("\n");
  const tableLines = [];
  let inTable = false;

  for (const line of lines) {
    if (line.trim().startsWith("|")) {
      inTable = true;
      tableLines.push(line);
    } else if (inTable) {
      break; // first non-table line after table started → done
    }
  }

  if (tableLines.length < 3) return []; // header + separator + ≥1 data row

  const parseRow = (line) =>
    line.split("|").slice(1, -1).map((cell) => cell.trim());

  const headers = parseRow(tableLines[0]);
  const rows = [];

  for (let i = 2; i < tableLines.length; i++) {
    const cells = parseRow(tableLines[i]);
    // Skip aggregate / total rows
    if (cells[0] && cells[0].startsWith("**")) continue;

    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = cells[j] || "";
    }
    rows.push(obj);
  }

  return rows;
}

/** Extract the first fenced code block from a section. */
function extractCodeBlock(section) {
  const match = section.match(/```\n?([\s\S]*?)```/);
  return match ? match[1].trim() : undefined;
}

// ---------------------------------------------------------------------------
// Disclosure parsing
// ---------------------------------------------------------------------------

function parseDisclosure(filePath) {
  const text = readFileSync(filePath, "utf-8");
  const sections = splitSections(text);
  const errors = [];

  // PART 1 — About You and Your Software
  const p1 = sections[1] || "";
  const orgName = extractField(p1, "Organization name");
  const contactName = extractField(p1, "Contact name");
  const softwareName = extractField(p1, "Software name");
  const softwareVersion = extractField(p1, "Software version");
  const softwareDescription = extractField(p1, "Software description");

  // PART 2 — Measurement Period and Score
  const p2 = sections[2] || "";
  const measurementStart = extractField(p2, "Measurement start date");
  const measurementEnd = extractField(p2, "Measurement end date");
  const sciScoreRaw = extractField(p2, "Your SCI score");

  let sciScore, sciUnit;
  if (sciScoreRaw) {
    const scoreMatch = sciScoreRaw.match(/^([\d.]+)\s+(.+)$/);
    if (scoreMatch) {
      sciScore = parseFloat(scoreMatch[1]);
      sciUnit = scoreMatch[2];
    }
  }

  // PART 3 — Software Boundary
  const p3 = sections[3] || "";
  const boundaryIncluded = parseTable(p3, "### Included").map((r) => ({
    component: r["Component"] || "",
    description: r["Description"] || "",
    justification: r["Why included"] || "",
  }));
  const boundaryExcluded = parseTable(p3, "### Excluded").map((r) => ({
    component: r["Component"] || "",
    description: r["Description"] || "",
    rationale: r["Reason for exclusion"] || "",
  }));

  // PART 4 — Functional Unit (R)
  const p4 = sections[4] || "";
  const functionalUnit = extractField(p4, "What is your functional unit");
  const functionalUnitJustification = extractField(p4, "Why did you choose this unit");
  const functionalUnitCountingMethod = extractField(p4, "How did you count or measure the total units");
  const functionalUnitTotal = extractField(p4, "Total units in measurement period");

  // PART 5 — Energy (E)
  const p5 = sections[5] || "";
  const energyTotal = extractField(p5, "Total energy consumed");
  const pue = extractField(p5, "PUE applied");
  const energyBreakdown = parseTable(p5, "Energy breakdown").map((r) => ({
    component: r["Component"] || "",
    energy: r["Energy after PUE (kWh)"] || "",
    method: r["How calculated"] || "",
  }));

  // PART 6 — Carbon Intensity (I)
  const p6 = sections[6] || "";
  const carbonIntensityValue = extractField(p6, "Carbon intensity value");
  const carbonIntensityLocation = extractField(p6, "Location(s)");
  const carbonIntensityApproach = extractField(p6, "Approach");
  const carbonIntensitySource = extractField(p6, "Data source");

  // PART 7 — Embodied Emissions (M)
  const p7 = sections[7] || "";
  const embodiedTotal = extractField(p7, "Total embodied emissions allocated to this measurement");
  const embodiedMethodology = extractField(p7, "Allocation methodology");
  const embodiedBreakdown = parseTable(p7, "Hardware component breakdown").map((r) => ({
    component: r["Hardware component"] || "",
    allocated: r["Allocated M (gCO2eq)"] || "",
    source: r["Data source"] || "",
  }));

  // PART 8 — Methodology, Assumptions, and Limitations
  const p8 = sections[8] || "";
  const methodologyApproach = extractField(p8, "Overall approach");
  const methodologyDescription = extractField(p8, "Describe your methodology");
  const assumptions = parseTable(p8, "Key assumptions").map((r) => ({
    assumption: r["Assumption"] || "",
    justification: r["Justification"] || "",
  }));
  const limitations = parseTable(p8, "Known limitations").map((r) => ({
    limitation: r["Limitation"] || "",
    severity: r["Severity (Low / Medium / High)"] || "",
    mitigation: r["Mitigation"] || "",
  }));

  // PART 9 — Show Your Calculation
  const p9 = sections[9] || "";
  const calculationText = extractCodeBlock(p9);

  // Validate required fields
  const required = {
    orgName,
    contactName,
    softwareName,
    softwareVersion,
    measurementStart,
    measurementEnd,
    sciScore,
    sciUnit,
    functionalUnit,
    softwareDescription,
    calculationText,
  };

  for (const [key, val] of Object.entries(required)) {
    if (val === undefined || val === null || val === "") {
      errors.push(`Missing required field: ${key}`);
    }
  }

  return {
    errors,
    fields: {
      orgName,
      contactName,
      softwareName,
      softwareVersion,
      softwareDescription,
      measurementStart,
      measurementEnd,
      sciScore,
      sciUnit,
      functionalUnit,
      functionalUnitJustification,
      functionalUnitCountingMethod,
      functionalUnitTotal,
      energyTotal,
      pue,
      energyBreakdown,
      carbonIntensityValue,
      carbonIntensityLocation,
      carbonIntensityApproach,
      carbonIntensitySource,
      embodiedTotal,
      embodiedMethodology,
      embodiedBreakdown,
      methodologyApproach,
      methodologyDescription,
      assumptions,
      limitations,
      calculationText,
      boundaryIncluded,
      boundaryExcluded,
    },
  };
}

// ---------------------------------------------------------------------------
// Payload builder
// ---------------------------------------------------------------------------

function buildPayload(fields, email, disclosureUrl) {
  return {
    name: fields.orgName,
    email,
    badgeSlug: "sci-certificate",
    sci: {
      contactName: fields.contactName,
      softwareName: fields.softwareName,
      softwareVersion: fields.softwareVersion,
      sciScore: fields.sciScore,
      sciUnit: fields.sciUnit,
      functionalUnit: fields.functionalUnit,
      measurementStart: fields.measurementStart,
      measurementEnd: fields.measurementEnd,
      disclosureUrl,
      disclosure: {
        softwareDescription: fields.softwareDescription,
        boundaryIncluded: fields.boundaryIncluded,
        boundaryExcluded: fields.boundaryExcluded,
        functionalUnitJustification: fields.functionalUnitJustification,
        functionalUnitCountingMethod: fields.functionalUnitCountingMethod,
        functionalUnitTotal: fields.functionalUnitTotal,
        energyTotal: fields.energyTotal,
        pue: fields.pue,
        energyBreakdown: fields.energyBreakdown,
        carbonIntensityValue: fields.carbonIntensityValue,
        carbonIntensityLocation: fields.carbonIntensityLocation,
        carbonIntensityApproach: fields.carbonIntensityApproach,
        carbonIntensitySource: fields.carbonIntensitySource,
        embodiedTotal: fields.embodiedTotal,
        embodiedMethodology: fields.embodiedMethodology,
        embodiedBreakdown: fields.embodiedBreakdown,
        methodologyApproach: fields.methodologyApproach,
        methodologyDescription: fields.methodologyDescription,
        assumptions: fields.assumptions,
        limitations: fields.limitations,
        calculationText: fields.calculationText,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const { positional, flags } = parseArgs(process.argv);

  const submissionDir = positional[0];
  if (!submissionDir) {
    console.error(
      "Usage: node scripts/issue-certificate.mjs <submission-dir> \\\n" +
      "  --email <contact-email> \\\n" +
      "  --disclosure-url <published-github-url> \\\n" +
      "  [--api-url <url>] [--api-secret <secret>] [--dry-run]",
    );
    process.exit(1);
  }

  const email = flags.email;
  if (!email) {
    console.error("Error: --email is required");
    process.exit(1);
  }

  const disclosureUrl = flags.disclosureUrl;
  if (!disclosureUrl) {
    console.error("Error: --disclosure-url is required");
    process.exit(1);
  }

  const apiUrl =
    flags.apiUrl ||
    process.env.CREDENTIALS_API_URL ||
    "https://badges.greensoftware.foundation/api/webhooks/course-completion";
  const apiSecret = flags.apiSecret || process.env.CREDENTIALS_API_SECRET;

  if (!flags.dryRun && !apiSecret) {
    console.error(
      "Error: --api-secret or CREDENTIALS_API_SECRET environment variable is required",
    );
    process.exit(1);
  }

  const disclosurePath = resolve(join(submissionDir, "disclosure.md"));

  let parsed;
  try {
    parsed = parseDisclosure(disclosurePath);
  } catch (err) {
    console.error(`Failed to read ${disclosurePath}: ${err.message}`);
    process.exit(1);
  }

  if (parsed.errors.length > 0) {
    console.error("Parsing errors:");
    for (const e of parsed.errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  const payload = buildPayload(parsed.fields, email, disclosureUrl);

  if (flags.dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    process.exit(0);
  }

  // Call the credentials API
  console.error(`Calling ${apiUrl} ...`);

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiSecret}`,
    },
    body: JSON.stringify(payload),
  });

  let body;
  try {
    body = await response.json();
  } catch {
    body = { raw: await response.text() };
  }

  if (!response.ok) {
    console.error(`API error (${response.status}):`, JSON.stringify(body, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify(body, null, 2));
}

main();
