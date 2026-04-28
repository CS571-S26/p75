import "../styles/StatusBadge.css";

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────

export default function StatusBadge({ status }) {
  return (
    <span className={`status-badge status-${status}`}>
      {status}
    </span>
  );
}