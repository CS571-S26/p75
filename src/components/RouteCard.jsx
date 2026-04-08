import { getGradeColor } from "../data/routes";
import "../styles/RouteCard.css";

// ─── STATUS CONFIG ────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  unclimbed: { label: "—",       activeClass: "active-unclimbed" },
  project:   { label: "⟳ Proj",  activeClass: "active-project"   },
  completed: { label: "✓ Sent",  activeClass: "active-completed"  },
};

// ─── ROUTE CARD ───────────────────────────────────────────────────────────────

export default function RouteCard({ route, onStatusChange }) {
  const gradeColor = getGradeColor(route.grade);

  return (
    <article className={`route-card status-${route.status}`}>

      {/* Top: name + grade badge */}
      <div className="card-top">
        <h2 className="card-name">{route.name}</h2>
        <span className="grade-badge" style={{ background: gradeColor }}>
          {route.grade}
        </span>
      </div>

      {/* Meta: style tag + color swatch */}
      <div className="card-meta">
        <span className="tag">{route.style}</span>
        <span className="tag color-tag">
          <span className="color-dot" style={{ background: route.color }} />
          {route.color}
        </span>
      </div>

      {/* Notes (optional) */}
      {route.notes && (
        <p className="card-notes">{route.notes}</p>
      )}

      {/* Status toggle buttons */}
      <div className="status-row">
        {Object.entries(STATUS_CONFIG).map(([status, { label, activeClass }]) => (
          <button
            key={status}
            className={`status-btn ${route.status === status ? activeClass : ""}`}
            onClick={() => onStatusChange(route.id, status)}
            aria-pressed={route.status === status}
            aria-label={`Mark as ${status}`}
          >
            {label}
          </button>
        ))}
      </div>

    </article>
  );
}