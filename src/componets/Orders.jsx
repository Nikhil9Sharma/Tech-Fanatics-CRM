import React, { useState } from "react";
import "./StyleFile/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Ramesh Yadav",
      product: "Excavator 20T",
      dealer: "Gupta Traders",
      amount: "₹12,00,000",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Sita Devi",
      product: "JCB 3DX",
      dealer: "Singh Equipment",
      amount: "₹8,50,000",
      status: "Completed",
    },
  ]);

  const [form, setForm] = useState({
    customer: "",
    product: "",
    dealer: "",
    amount: "",
    status: "Pending",
  });

  const [filter, setFilter] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: Date.now(),
      ...form,
    };

    setOrders([...orders, newOrder]);

    setForm({
      customer: "",
      product: "",
      dealer: "",
      amount: "",
      status: "Pending",
    });
  };

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((o) => o.status === filter);

  return (
    <div className="orders-container">
      
      {/* HEADER */}
      <div className="orders-header">
        <h2>Orders Management</h2>

        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      {/* FORM */}
      <div className="order-form">
        <h3>Add New Order</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Customer Name"
            value={form.customer}
            onChange={(e) =>
              setForm({ ...form, customer: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Product"
            value={form.product}
            onChange={(e) =>
              setForm({ ...form, product: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Dealer"
            value={form.dealer}
            onChange={(e) =>
              setForm({ ...form, dealer: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            required
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <button type="submit">Add Order</button>
        </form>
      </div>

      {/* TABLE */}
      <div className="orders-table">
        <h3>Orders List</h3>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Dealer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.dealer}</td>
                <td>{order.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Completed"
                        ? "green"
                        : "amber"
                    }`}
                  >
                    {order.status}
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

export default Orders;