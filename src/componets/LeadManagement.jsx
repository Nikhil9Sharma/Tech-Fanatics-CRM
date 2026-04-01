import React, { useState } from "react";
import "./StyleFile/LeadManagment.css";

const LeadManagement = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "Ramesh Yadav", product: "Excavator", dealer: "Gupta Traders", status: "Contacted" },
    { id: 2, name: "Sita Devi", product: "JCB", dealer: "Singh Equipment", status: "Converted" },
    { id: 3, name: "Ajay Infra", product: "Compactor", dealer: "Unassigned", status: "New" },
  ]);

  const [form, setForm] = useState({
    name: "",
    product: "",
    dealer: "",
  });

  const [search, setSearch] = useState("");

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Lead
  const addLead = () => {
    if (!form.name || !form.product) return;

    const newLead = {
      id: Date.now(),
      ...form,
      status: "New",
    };

    setLeads([newLead, ...leads]);
    setForm({ name: "", product: "", dealer: "" });
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="lead-container">

      {/* HEADER */}
      <div className="lead-header">
        <h2>Lead Management</h2>
        <input
          type="text"
          placeholder="Search leads..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ADD FORM */}
      <div className="lead-form">
        <input
          name="name"
          placeholder="Customer Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="product"
          placeholder="Product"
          value={form.product}
          onChange={handleChange}
        />
        <input
          name="dealer"
          placeholder="Dealer"
          value={form.dealer}
          onChange={handleChange}
        />
        <button onClick={addLead}>Add Lead</button>
      </div>

      {/* TABLE */}
      <div className="lead-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Dealer</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.product}</td>
                <td>{lead.dealer}</td>
                <td>
                  <span className={`badge ${lead.status.toLowerCase()}`}>
                    {lead.status}
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

export default LeadManagement;