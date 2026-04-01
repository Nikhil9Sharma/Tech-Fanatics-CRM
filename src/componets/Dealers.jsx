import React, { useState } from "react";
import "./StyleFile/Dealers.css";

const DealerManagement = () => {
  const [dealers, setDealers] = useState([
    { id: 1, name: "Gupta Traders", city: "Faridabad", status: "Active" },
    { id: 2, name: "Singh Equipment", city: "Gurugram", status: "Inactive" },
  ]);

  const [form, setForm] = useState({
    name: "",
    city: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addDealer = (e) => {
    e.preventDefault();

    const newDealer = {
      id: Date.now(),
      ...form,
    };

    setDealers([...dealers, newDealer]);

    setForm({ name: "", city: "", status: "Active" });
  };

  return (
    <div className="dealer-container">
      <h2>Dealer Management</h2>

      {/* ADD DEALER FORM */}
      <form className="dealer-form" onSubmit={addDealer}>
        <input
          type="text"
          name="name"
          placeholder="Dealer Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit">Add Dealer</button>
      </form>

      {/* DEALER TABLE */}
      <div className="dealer-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {dealers.map((dealer) => (
              <tr key={dealer.id}>
                <td>{dealer.name}</td>
                <td>{dealer.city}</td>
                <td>
                  <span
                    className={
                      dealer.status === "Active"
                        ? "badge active"
                        : "badge inactive"
                    }
                  >
                    {dealer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealerManagement;