import React, { useState } from "react";
import "./StyleFile/PaymentAndLedger.css";

const PaymentsAndLedger = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      dealer: "Gupta Traders",
      type: "Credit",
      amount: 340000,
      date: "2026-04-01",
      status: "Paid",
    },
    {
      id: 2,
      dealer: "Singh Equipment",
      type: "Debit",
      amount: 120000,
      date: "2026-03-30",
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    dealer: "",
    type: "Credit",
    amount: "",
  });

  const handleAdd = () => {
    if (!form.dealer || !form.amount) return;

    const newTxn = {
      id: transactions.length + 1,
      dealer: form.dealer,
      type: form.type,
      amount: Number(form.amount),
      date: new Date().toISOString().split("T")[0],
      status: "Paid",
    };

    setTransactions([newTxn, ...transactions]);
    setForm({ dealer: "", type: "Credit", amount: "" });
  };

  const totalCredit = transactions
    .filter(t => t.type === "Credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalDebit = transactions
    .filter(t => t.type === "Debit")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalCredit - totalDebit;

  return (
    <div className="ledger-container">

      {/* HEADER */}
      <div className="ledger-header">
        <h2>Payments & Ledger Management</h2>
      </div>

      {/* SUMMARY */}
      <div className="summary">
        <div className="card">
          <p>Total Credit</p>
          <h3>₹ {totalCredit}</h3>
        </div>

        <div className="card">
          <p>Total Debit</p>
          <h3>₹ {totalDebit}</h3>
        </div>

        <div className="card">
          <p>Balance</p>
          <h3>₹ {balance}</h3>
        </div>
      </div>

      {/* ADD TRANSACTION */}
      <div className="form-card">
        <h3>Add Transaction</h3>

        <div className="form">
          <input
            type="text"
            placeholder="Dealer Name"
            value={form.dealer}
            onChange={e => setForm({ ...form, dealer: e.target.value })}
          />

          <select
            value={form.type}
            onChange={e => setForm({ ...form, type: e.target.value })}
          >
            <option>Credit</option>
            <option>Debit</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
          />

          <button onClick={handleAdd}>Add</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-card">
        <h3>Transaction History</h3>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Dealer</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(txn => (
              <tr key={txn.id}>
                <td>{txn.date}</td>
                <td>{txn.dealer}</td>
                <td className={txn.type === "Credit" ? "credit" : "debit"}>
                  {txn.type}
                </td>
                <td>₹ {txn.amount}</td>
                <td className="status">{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PaymentsAndLedger;