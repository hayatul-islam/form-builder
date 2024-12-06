import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import BuilderHeader from "../components/form-builder/BuilderHeader";
import PreviewHeader from "../components/preview/PreviewHeader";

const PageLayout = ({ children, type, className }) => {
  let header = <Header />;
  let isFooter = true;
  if (type === "builder") {
    header = <BuilderHeader />;
    isFooter = false;
  } else if (type === "preview") {
    header = <PreviewHeader />;
  } else if (type === "home") {
    header = <Header />;
  } else {
    header = <Header />;
  }

  return (
    <>
      {type === "home" ? (
        <div className="h-[70px] absolute top-0 w-full z-50">{header}</div>
      ) : type === "preview" ? (
        <div className="h-[50px] sticky top-0 z-50 bg-primary flex justify-center items-center">
          {header}
        </div>
      ) : type === "builder" ? (
        <div className="h-[70px] sticky top-0 z-50 bg-white">{header}</div>
      ) : (
        <div className="bg-white">{header}</div>
      )}
      <div className={className}>{children}</div>

      {isFooter && <Footer />}
    </>
  );
};

export default PageLayout;
