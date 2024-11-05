import AddElement from "../components/builder/AddElement";
import FormBuilder from "../components/builder/FormBuilder";
import { BuilderProvider } from "../context/BuilderContext";

const Builder = () => {
  return (
    <BuilderProvider>
      <div className="container py-12 flex gap-6">
        <AddElement />

        <FormBuilder />
      </div>
    </BuilderProvider>
  );
};

export default Builder;
