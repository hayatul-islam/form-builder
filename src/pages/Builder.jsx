import Forms from "../components/builder/Forms";
import { BuilderProvider } from "../context/BuilderContext";
import PageLayout from "../layout/PageLayout";

const Builder = () => {
  return (
    <BuilderProvider>
      <PageLayout>
        <Forms />
      </PageLayout>
    </BuilderProvider>
  );
};

export default Builder;
