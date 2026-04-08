import RouteCard from "./RouteCard";
import "../styles/RouteGrid.css";

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────

function EmptyState({ filter }) {
  const message = filter === "all"
    ? "No routes logged yet. Add your first climb!"
    : `No ${filter} routes yet.`;

  return (
    <div className="empty-state">
      <span className="empty-icon">🪨</span>
      <p className="empty-text">{message}</p>
    </div>
  );
}

// ─── ROUTE GRID ───────────────────────────────────────────────────────────────

export default function RouteGrid({ routes, filter, onStatusChange }) {
  if (routes.length === 0) {
    return <EmptyState filter={filter} />;
  }

  return (
    <div className="route-grid">
      {routes.map((route, index) => (
        <RouteCard
          key={route.id}
          route={route}
          onStatusChange={onStatusChange}
          index={index}
        />
      ))}
    </div>
  );
}