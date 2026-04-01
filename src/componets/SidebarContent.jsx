import React from 'react'
import "./StyleFile/SideBarContent.css"
import Dashboard from "./Dashboard";
import Dealers from "./Dealers";
import LeadManagement from "./LeadManagement";
import Orders from "./Orders";
import PaymentsAndLedger from "./PaymentsAndledger";
import SchemesAndIncentives from "./SchemesAndIncetives";
import Complaints from "./Complaints";

export default function SidebarContent() {
  return (
    <section className='Sidebar-content-files'>
      {/* <Dashboard /> */}
      {/* <Dealers /> */}
      {/* <LeadManagement /> */}
      {/* <Orders /> */}
      {/* <PaymentsAndLedger /> */}
      {/* <SchemesAndIncentives /> */}
      <Complaints />
    </section>
  )
}
