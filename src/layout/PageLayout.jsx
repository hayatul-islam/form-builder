import Header from "../components/common/Header";
import BuilderHeader from "../components/form-builder/BuilderHeader";
import PreviewHeader from "../components/preview/PreviewHeader";

const PageLayout = ({ children, type }) => {
  let header = <Header />;
  if (type === "builder") {
    header = <BuilderHeader />;
  } else if (type === "preview") {
    header = <PreviewHeader />;
  } else {
    header = <Header />;
  }

  return (
    <>
      <div className="h-[70px] sticky top-0 z-50 bg-white">{header}</div>
      {children}
    </>
  );
};

export default PageLayout;
