import React from "react";
import "./StyleFile/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="shell">

      {/* MAIN */}
      <div className="main">
        <div className="topbar">
          <h2>Dashboard</h2>
          <button className="btn-primary">+ Add Lead</button>
        </div>

        <div className="content">

          {/* METRICS */}
          <div className="metrics">
            <div className="card">
              <h4>Total Dealers</h4>
              <p className="value">142</p>
            </div>

            <div className="card">
              <h4>Active Leads</h4>
              <p className="value">386</p>
            </div>

            <div className="card">
              <h4>Orders</h4>
              <p className="value">1204</p>
            </div>

            <div className="card">
              <h4>Revenue</h4>
              <p className="value">₹48.2L</p>
            </div>
          </div>

          {/* TABLE */}
          <div className="table-card">
            <h3>Recent Leads</h3>
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
                  <td className="badge amber">Contacted</td>
                </tr>
                <tr>
                  <td>Sita</td>
                  <td>JCB</td>
                  <td className="badge green">Converted</td>
                </tr>
                <tr>
                  <td>Ajay</td>
                  <td>Compactor</td>
                  <td className="badge blue">New</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;