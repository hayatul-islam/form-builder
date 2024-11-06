import AddElement from "../components/builder/AddElement";
import FormBuilder from "../components/builder/FormBuilder";
import MakeBuilder from "../components/home/MakeBuilder";
import { BuilderProvider } from "../context/BuilderContext";

const Builder = () => {
  return (
    <BuilderProvider>
      <div className="container py-12 flex gap-6">
        <AddElement />

        <FormBuilder />
      </div>
      <MakeBuilder />
    </BuilderProvider>
  );
};

export default Builder;
