import { useState } from "react";
import FilterBar from "./FilterBar.jsx";
import RouteGrid from "../components/RouteGrid";
import AddRouteForm from "./AddRouteForm";
import "../styles/TrackerPage.css";

// ─── TRACKER PAGE ─────────────────────────────────────────────────────────────

export default function TrackerPage({ routeState }) {
  const { filtered, filter, setFilter, counts, updateStatus, addRoute } = routeState;
  const [showForm, setShowForm] = useState(false);

  const handleAddRoute = (newRoute) => {
    addRoute(newRoute);
    setShowForm(false);
  };

  return (
    <div className="tracker-page">

      {/* ── Page Header ── */}
      <div className="tracker-header">
        <div className="tracker-header-left">
          <h1 className="tracker-title">My Routes</h1>
          <p className="tracker-subtitle">
            {counts.all === 0
              ? "No routes yet. Add your first climb to get started."
              : `${counts.all} route${counts.all !== 1 ? "s" : ""} logged`}
          </p>
        </div>
        <div className="tracker-header-right">
          <button 
            className="add-route-btn" 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Add Route"}
          </button>
          <div className="tracker-stats">
            <div className="stat">
              <div className="stat-num">{counts.completed}</div>
              <div className="stat-label">Sent</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">{counts.project}</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">{counts.unclimbed}</div>
              <div className="stat-label">Unclimbed</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Add Route Form ── */}
      {showForm && (
        <AddRouteForm 
          onAdd={handleAddRoute}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* ── Filter Bar ── */}
      <FilterBar
        filter={filter}
        counts={counts}
        onFilterChange={setFilter}
      />

      {/* ── Route Grid ── */}
      <RouteGrid
        routes={filtered}
        filter={filter}
        onStatusChange={updateStatus}
      />

    </div>
  );
}