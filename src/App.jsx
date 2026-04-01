import React from "react";
import "./App.css";
import SideBar from "./componets/SideBar";
import SidebarContent from "./componets/SidebarContent";
export default function App() {
  return (
    <>
      <section className="Main-App-Container">
        <div>
          <SideBar />
        </div>
        <div>
          <SidebarContent />
        </div>
      </section>
    </>
  );
}
