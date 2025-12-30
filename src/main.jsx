import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SuperAdmin from "./pages/SuperAdmin";
import AdminAgents from "./pages/AdminAgents";
import AgentHistoryPage from "./pages/AgentHistoryPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperAdmin />} />

        {/* admin -> agents */}
        <Route path="/admin/:adminId/agents" element={<AdminAgents />} />

        {/* agent -> history */}
        <Route
          path="/admin/:adminId/agent/:agentId/history"
          element={<AgentHistoryPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
