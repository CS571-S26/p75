import { getGradeColor } from "../data/routes";
import "../styles/GradeTag.css";

// ─── GRADE TAG ────────────────────────────────────────────────────────────────

export default function GradeTag({ grade }) {
  return (
    <span 
      className="grade-tag" 
      style={{ background: getGradeColor(grade) }}
    >
      {grade}
    </span>
  );
}