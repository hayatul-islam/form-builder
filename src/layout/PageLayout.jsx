import Header from "../components/common/Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
