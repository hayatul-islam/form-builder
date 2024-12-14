import BuilderHeader from "../components/form-builder/BuilderHeader";
import SidebarMenu from "../components/form-builder/SidebarMenu";

const DashboardLayout = ({ children, className, bgColor }) => {
  return (
    <div
      style={{
        background: "" || "",
      }}
      className={className}
    >
      <BuilderHeader />
      <div className="grid grid-cols-[60px_auto]">
        <SidebarMenu />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
