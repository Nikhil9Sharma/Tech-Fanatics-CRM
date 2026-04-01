import React from "react";
import "./App.css";
import SideBar from "./componets/SideBar";
import SidebarContent from "./componets/SidebarContent";

export default function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="content">
        <SidebarContent />
      </main>
    </div>
  );
}