import BuilderHeader from "../components/form-builder/BuilderHeader";
import SidebarMenu from "../components/form-builder/SidebarMenu";

const DashboardLayout = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1800px] mx-auto`}>
      <BuilderHeader />
      <div className="grid grid-cols-[60px_auto]">
        <SidebarMenu />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
