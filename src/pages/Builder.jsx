import { BuilderProvider } from "../context/BuilderContext";

const Builder = () => {
  return (
    <BuilderProvider>
      <div className="container py-12 flex gap-6">Builder</div>
    </BuilderProvider>
  );
};

export default Builder;
