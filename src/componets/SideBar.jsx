import React from "react";
import "./StyleFile/SideBar.css";
export default function SideBar() {
  return (
    <>
      <section>
        <div>
          <div className="Logo-Area">
            <div className="">
              <div className="Logo"></div>
              <div className="Logo-Text">
                <p className="Logo-Name">Tech Fanatics</p>
              </div>
            </div>
          </div>
          <div className="Content-Area">
            <div className="">
              <p className="Overview-Section-Area">OverView</p>
              <div className="Button-Container">
                <button className="Overview-Button" id="Dashboard-Button">DashBoard</button>
              </div>
            </div>
            <div className="">
              <p className="Operations-Section-Area">Operations</p>
              <div className="">
                <button className="Operations-Button" id="Dealers-Button">
                  Dealers
                </button>
                <button className="Operations-Button" id="Lead-Management-Button">
                  Lead Management
                </button>
                <button className="Operations-Button" id="Orders-Button">
                  Orders
                </button>
                <button className="Operations-Button" id="Payments-&-Ledger-Button">
                  Payments & Ledger
                </button>
              </div>
              <div className="">
                <p className="Programs-Section-Area">Programs</p>
                <div className="">
                  <button className="Programs-Button" id="Schemes-&-Incentives-Button">Schemes & Incentives</button>
                  <button className="Programs-Button" id="Complaints-Button">Complaints</button>
                  </div>
              </div>
              <div className="">
                <p className="Admin-Section-Area">Admin</p>
                <div className="">
                  <button className="Admin-Button" id="Sales-Team-Button">Sales Team</button>
                  <button className="Admin-Button" id="Roles-&-Access-Button">Roles & Access</button>
                </div>
              </div>
            </div>
            <div className="Footer-Area">
              <div className="">
                <div className=""><img src="" alt="" /></div>
                <div className=""><p className="User-Name">John Doe</p>
                <p className="User-Email">john.doe@example.com</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
