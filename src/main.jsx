import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ── Fonts ──────────────────────────────────────────────────────────────────
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow-condensed/800.css';

// ── Bootstrap ──────────────────────────────────────────────────────────────
import 'bootstrap/dist/css/bootstrap.min.css';

// ── Global styles ──────────────────────────────────────────────────────────
import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);