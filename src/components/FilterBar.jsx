import "../styles/FilterBar.css";

// ─── FILTER CONFIG ────────────────────────────────────────────────────────────

const FILTERS = ["all", "unclimbed", "project", "completed"];

const FILTER_LABELS = {
  all:       "All",
  unclimbed: "Unclimbed",
  project:   "Project",
  completed: "Sent",
};

// ─── FILTER BAR ───────────────────────────────────────────────────────────────

export default function FilterBar({ filter, counts, onFilterChange }) {
  return (
    <nav className="filter-bar" aria-label="Filter routes">
      <span className="filter-label">Filter</span>
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? "active" : ""}`}
          onClick={() => onFilterChange(f)}
          aria-pressed={filter === f}
        >
          {FILTER_LABELS[f]}
          <span className="filter-count">{counts[f]}</span>
        </button>
      ))}
    </nav>
  );
}