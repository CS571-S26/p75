// ─── GRADE COLOR MAP ──────────────────────────────────────────────────────────
// Maps each grade to a CSS variable name from variables.css

export const GRADE_COLOR_MAP = {
  // Bouldering (V-scale)
  "V0": "var(--grade-green)",
  "V1": "var(--grade-green)",
  "V2": "var(--grade-green)",
  "V3": "var(--grade-lime)",
  "V4": "var(--grade-yellow)",
  "V5": "var(--grade-orange)",
  "V6": "var(--grade-orange)",
  "V7": "var(--grade-red)",
  "V8": "var(--grade-red)",
  "V9": "var(--grade-red)",
  "V10": "var(--grade-purple)",
  "V11": "var(--grade-purple)",
  "V12": "var(--grade-purple)",
  "V13": "var(--grade-purple)",
  "V14": "var(--grade-purple)",
  "V15": "var(--grade-purple)",
  "V16": "var(--grade-purple)",
  "V17": "var(--grade-purple)",

  // Sport / Trad (YDS)
  "5.9":   "var(--grade-green)",
  "5.10a": "var(--grade-green)",
  "5.10b": "var(--grade-green)",
  "5.10c": "var(--grade-lime)",
  "5.10d": "var(--grade-yellow)",
  "5.11a": "var(--grade-orange)",
  "5.11b": "var(--grade-orange)",
  "5.11c": "var(--grade-red)",
  "5.11d": "var(--grade-red)",
  "5.12a": "var(--grade-red)",
  "5.12b": "var(--grade-purple)",
  "5.12c": "var(--grade-purple)",
  "5.12d": "var(--grade-purple)",
  "5.13a": "var(--grade-purple)",
  "5.13b": "var(--grade-purple)",
  "5.13c": "var(--grade-purple)",
  "5.13d": "var(--grade-purple)",
  "5.14a": "var(--grade-purple)",
  "5.14b": "var(--grade-purple)",
  "5.14c": "var(--grade-purple)",
  "5.14d": "var(--grade-purple)",
};

export function getGradeColor(grade) {
  return GRADE_COLOR_MAP[grade] ?? "var(--muted)";
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

export const STYLES = ["Overhang", "Face", "Arete", "Crimp", "Sloper", "Roof", "Highball", "Traverse", "Sport", "Trad"];
export const STATUSES = ["unclimbed", "project", "completed"];

// ─── SAMPLE DATA ──────────────────────────────────────────────────────────────

export const SAMPLE_ROUTES = [
  {
    id: 1,
    name: "Midnight Lightning",
    grade: "V8",
    style: "Highball",
    color: "#f04a4a",
    status: "project",
    notes: "The crux is a terrible sidepull into a sloper. Feet everything.",
    dateAdded: "2025-03-01",
  },
  {
    id: 2,
    name: "Gill's Cave Problem",
    grade: "V3",
    style: "Overhang",
    color: "#4af07a",
    status: "completed",
    notes: "Classic. Sent it clean on the third attempt.",
    dateAdded: "2025-02-20",
  },
  {
    id: 3,
    name: "Sharma Roof",
    grade: "V10",
    style: "Roof",
    color: "#c084fc",
    status: "unclimbed",
    notes: null,
    dateAdded: "2025-03-04",
  },
  {
    id: 4,
    name: "Green Wall Direct",
    grade: "5.11c",
    style: "Face",
    color: "#4af07a",
    status: "completed",
    notes: "Pumpy finish. Clip the bolt before the crux.",
    dateAdded: "2025-02-14",
  },
  {
    id: 5,
    name: "Yellow Traverse",
    grade: "V4",
    style: "Traverse",
    color: "#f0e84a",
    status: "project",
    notes: "Keep slipping off the third pinch. Need to work foot placement.",
    dateAdded: "2025-03-02",
  },
  {
    id: 6,
    name: "The Prow",
    grade: "V6",
    style: "Arete",
    color: "#4a90f0",
    status: "unclimbed",
    notes: null,
    dateAdded: "2025-03-05",
  },
  {
    id: 7,
    name: "Black Diamond",
    grade: "V9",
    style: "Crimp",
    color: "#888888",
    status: "unclimbed",
    notes: null,
    dateAdded: "2025-03-05",
  },
  {
    id: 8,
    name: "Blue Thunder",
    grade: "5.12a",
    style: "Sport",
    color: "#4a90f0",
    status: "project",
    notes: "Long moves off the roof. Beta still TBD.",
    dateAdded: "2025-03-03",
  },
];