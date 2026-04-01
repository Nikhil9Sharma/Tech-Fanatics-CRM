import React, { useState } from "react";
import "./StyleFile/Schemes.css";

const Schemes = () => {
  const [schemes, setSchemes] = useState([
    {
      name: "Q1 Volume Bonus",
      type: "Volume",
      target: "50 Units",
      reward: "₹25,000",
      status: "Active",
    },
    {
      name: "Festive Offer",
      type: "Seasonal",
      target: "30 Units",
      reward: "₹15,000",
      status: "Upcoming",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    type: "",
    target: "",
    reward: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addScheme = () => {
    if (!form.name) return;
    setSchemes([...schemes, { ...form, status: "Active" }]);
    setForm({ name: "", type: "", target: "", reward: "" });
  };

  return (
    <div className="scheme-container">
      <h1>Schemes & Incentives</h1>

      {/* CREATE SCHEME */}
      <div className="card form-card">
        <h2>Create New Scheme</h2>

        <div className="form-grid">
          <input
            name="name"
            placeholder="Scheme Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="type"
            placeholder="Type (Volume / Seasonal)"
            value={form.type}
            onChange={handleChange}
          />

          <input
            name="target"
            placeholder="Target (e.g. 50 Units)"
            value={form.target}
            onChange={handleChange}
          />

          <input
            name="reward"
            placeholder="Reward (₹)"
            value={form.reward}
            onChange={handleChange}
          />
        </div>

        <button onClick={addScheme} className="btn-primary">
          + Add Scheme
        </button>
      </div>

      {/* SCHEME TABLE */}
      <div className="card">
        <h2>Active Schemes</h2>

        <table>
          <thead>
            <tr>
              <th>Scheme</th>
              <th>Type</th>
              <th>Target</th>
              <th>Reward</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {schemes.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.type}</td>
                <td>{s.target}</td>
                <td>{s.reward}</td>
                <td>
                  <span className={`badge ${s.status.toLowerCase()}`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DEALER ELIGIBILITY */}
      <div className="card">
        <h2>Dealer Eligibility</h2>

        <table>
          <thead>
            <tr>
              <th>Dealer</th>
              <th>Sales</th>
              <th>Target</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Gupta Traders</td>
              <td>45 Units</td>
              <td>50 Units</td>
              <td className="badge amber">In Progress</td>
            </tr>
            <tr>
              <td>Singh Equipment</td>
              <td>55 Units</td>
              <td>50 Units</td>
              <td className="badge green">Eligible</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PAYOUT TABLE */}
      <div className="card">
        <h2>Incentive Payouts</h2>

        <table>
          <thead>
            <tr>
              <th>Dealer</th>
              <th>Scheme</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Singh Equipment</td>
              <td>Q1 Volume Bonus</td>
              <td>₹25,000</td>
              <td className="badge green">Paid</td>
            </tr>
            <tr>
              <td>Gupta Traders</td>
              <td>Q1 Volume Bonus</td>
              <td>₹25,000</td>
              <td className="badge red">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schemes;