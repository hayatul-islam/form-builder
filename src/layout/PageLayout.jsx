import Header from "../components/common/Header";
import PreviewHeader from "../components/preview/PreviewHeader";

const PageLayout = ({ children, type }) => {
  let header = <Header />;
  if (type === "preview") {
    header = <PreviewHeader />;
  } else {
    header = <Header />;
  }

  return (
    <>
      {header}
      {children}
    </>
  );
};

export default PageLayout;
