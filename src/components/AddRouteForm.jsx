import { useState } from "react";
import { STYLES, STATUSES } from "../data/routes";
import "../styles/AddRouteForm.css";

// ─── ADD ROUTE FORM ───────────────────────────────────────────────────────────

export default function AddRouteForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    style: "Face",
    color: "#4a90f0",
    status: "unclimbed",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.grade.trim()) {
      alert("Please fill in route name and grade");
      return;
    }

    // Submit the new route
    onAdd({
      ...formData,
      notes: formData.notes.trim() || null,
    });

    // Reset form
    setFormData({
      name: "",
      grade: "",
      style: "Face",
      color: "#4a90f0",
      status: "unclimbed",
      notes: "",
    });
  };

  return (
    <div className="add-route-form-container">
      <form className="add-route-form" onSubmit={handleSubmit}>
        
        {/* ── Header ── */}
        <div className="form-header">
          <h2 className="form-title">Add New Route</h2>
          <button
            type="button"
            className="form-close-btn"
            onClick={onCancel}
            aria-label="Close form"
          >
            ×
          </button>
        </div>

        {/* ── Form Fields ── */}
        <div className="form-body">
          
          {/* Route Name */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Route Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Midnight Lightning"
              required
            />
          </div>

          {/* Grade */}
          <div className="form-group">
            <label htmlFor="grade" className="form-label">
              Grade <span className="required">*</span>
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              className="form-input"
              value={formData.grade}
              onChange={handleChange}
              placeholder="e.g., V8 or 5.11c"
              required
            />
          </div>

          {/* Style */}
          <div className="form-group">
            <label htmlFor="style" className="form-label">
              Style
            </label>
            <select
              id="style"
              name="style"
              className="form-select"
              value={formData.style}
              onChange={handleChange}
            >
              {STYLES.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div className="form-group">
            <label htmlFor="color" className="form-label">
              Color Tag
            </label>
            <div className="color-input-wrapper">
              <input
                type="color"
                id="color"
                name="color"
                className="form-color-input"
                value={formData.color}
                onChange={handleChange}
              />
              <span className="color-value">{formData.color}</span>
            </div>
          </div>

          {/* Status */}
          <div className="form-group">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div className="form-group">
            <label htmlFor="notes" className="form-label">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              className="form-textarea"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add beta, conditions, or other notes..."
              rows={4}
            />
          </div>

        </div>

        {/* ── Actions ── */}
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Route
          </button>
        </div>

      </form>
    </div>
  );
}