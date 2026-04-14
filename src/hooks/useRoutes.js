import { useState, useMemo, useEffect } from "react";
import { SAMPLE_ROUTES } from "../data/routes";

// ─── LOCALSTORAGE KEY ─────────────────────────────────────────────────────────
const STORAGE_KEY = "send-it-routes";

// ─── useRoutes ────────────────────────────────────────────────────────────────

export function useRoutes() {
  // Initialize from localStorage if available, otherwise use sample routes
  const [routes, setRoutes] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored routes:", e);
        return SAMPLE_ROUTES;
      }
    }
    return SAMPLE_ROUTES;
  });
  const [filter, setFilter] = useState("all");

  // ── Sync to localStorage whenever routes change ────────────────────────────
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(routes));
  }, [routes]);

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

  function addRoute(newRoute) {
    // Generate a unique ID (max existing ID + 1)
    const maxId = routes.reduce((max, r) => Math.max(max, r.id), 0);
    const routeWithId = {
      ...newRoute,
      id: maxId + 1,
      dateAdded: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    };
    setRoutes((prev) => [...prev, routeWithId]);
  }

  return {
    routes,
    filtered,
    filter,
    setFilter,
    counts,
    updateStatus,
    addRoute,
  };
}