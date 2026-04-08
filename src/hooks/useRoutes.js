import { useState, useMemo } from "react";
import { SAMPLE_ROUTES } from "../data/routes";

// ─── useRoutes ────────────────────────────────────────────────────────────────

export function useRoutes() {
  const [routes, setRoutes] = useState(SAMPLE_ROUTES);
  const [filter, setFilter] = useState("all");

  // ── Derived: filtered list ──────────────────────────────────────────────────
  const filtered = useMemo(() => {
    if (filter === "all") return routes;
    return routes.filter((r) => r.status === filter);
  }, [routes, filter]);

  // ── Derived: counts per status ──────────────────────────────────────────────
  const counts = useMemo(() => ({
    all:       routes.length,
    unclimbed: routes.filter((r) => r.status === "unclimbed").length,
    project:   routes.filter((r) => r.status === "project").length,
    completed: routes.filter((r) => r.status === "completed").length,
  }), [routes]);

  // ── Actions ─────────────────────────────────────────────────────────────────
  function updateStatus(id, newStatus) {
    setRoutes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  }

  // Phase 2 will add: addRoute, deleteRoute, editRoute here

  return {
    routes,
    filtered,
    filter,
    setFilter,
    counts,
    updateStatus,
  };
}