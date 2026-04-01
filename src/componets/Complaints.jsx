import React, { useState } from "react";
import "./StyleFile/Support.css";

const Support = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: "Ramesh Yadav",
      issue: "Machine breakdown",
      dealer: "Gupta Traders",
      priority: "High",
      status: "Open",
    },
    {
      id: 2,
      name: "Sita Devi",
      issue: "Late delivery",
      dealer: "Singh Equipment",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Ajay Infra",
      issue: "Payment mismatch",
      dealer: "Unassigned",
      priority: "Low",
      status: "Resolved",
    },
  ]);

  return (
    <div className="support-container">
      
      {/* HEADER */}
      <div className="support-header">
        <h2>Support & Complaints</h2>
        <button className="btn-primary">+ New Complaint</button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="support-metrics">
        <div className="card">
          <p>Total Complaints</p>
          <h3>{complaints.length}</h3>
        </div>

        <div className="card">
          <p>Open</p>
          <h3>{complaints.filter(c => c.status === "Open").length}</h3>
        </div>

        <div className="card">
          <p>In Progress</p>
          <h3>{complaints.filter(c => c.status === "In Progress").length}</h3>
        </div>

        <div className="card">
          <p>Resolved</p>
          <h3>{complaints.filter(c => c.status === "Resolved").length}</h3>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-card">
        <h3>All Complaints</h3>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Issue</th>
              <th>Dealer</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.issue}</td>
                <td>{c.dealer}</td>

                <td>
                  <span className={`badge ${c.priority.toLowerCase()}`}>
                    {c.priority}
                  </span>
                </td>

                <td>
                  <span className={`badge status-${c.status.replace(" ", "").toLowerCase()}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTIVITY LOG */}
      <div className="activity">
        <h3>Recent Activity</h3>

        <div className="activity-item">
          Complaint resolved for <b>Sita Devi</b>
          <span>2 hrs ago</span>
        </div>

        <div className="activity-item">
          New complaint added by <b>Ajay Infra</b>
          <span>5 hrs ago</span>
        </div>

        <div className="activity-item">
          Engineer assigned to <b>Ramesh Yadav</b>
          <span>1 day ago</span>
        </div>
      </div>
    </div>
  );
};

export default Support;