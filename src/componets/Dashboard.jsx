import React from "react";
import "./StyleFile/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="shell">
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
          <h2>Dashboard</h2>
          <button className="btn-primary">+ Add Lead</button>
        </div>

        <div className="content">

          {/* METRICS */}
          <div className="metrics">
            {[
              { title: "Total Dealers", value: "142" },
              { title: "Active Leads", value: "386" },
              { title: "Orders", value: "1204" },
              { title: "Revenue", value: "₹48.2L" },
            ].map((item, i) => (
              <div className="card" key={i}>
                <h4>{item.title}</h4>
                <p className="value">{item.value}</p>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="table-card">
            <h3>Recent Leads</h3>

            {/* SCROLL WRAPPER (important for mobile) */}
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Requirement</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ramesh</td>
                    <td>Excavator</td>
                    <td><span className="badge amber">Contacted</span></td>
                  </tr>
                  <tr>
                    <td>Sita</td>
                    <td>JCB</td>
                    <td><span className="badge green">Converted</span></td>
                  </tr>
                  <tr>
                    <td>Ajay</td>
                    <td>Compactor</td>
                    <td><span className="badge blue">New</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;