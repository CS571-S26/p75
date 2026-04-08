import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRoutes } from "./hooks/useRoutes";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TrackerPage from "./components/TrackerPage";
import "./styles/App.css";

export default function App() {
  // Lift route state here so both pages can access it if needed
  const routeState = useRoutes();

  return (
    <BrowserRouter>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker" element={<TrackerPage routeState={routeState} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}