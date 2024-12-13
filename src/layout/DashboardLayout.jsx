import React from "react";
import BuilderHeader from "../components/form-builder/BuilderHeader";
import SidebarMenu from "../components/form-builder/SidebarMenu";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <BuilderHeader />
      <div className="grid grid-cols-[60px_auto]">
        <SidebarMenu />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
