import { useContext } from "react";
import { DesignerContext } from "../context/DesignerContext";

const useBuilder = () => {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("useBuilder must be withing a designer context!");
  }

  return context;
};

export default useBuilder;
