import { createContext, useState } from "react";

export const DesignerContext = createContext(null);

export default function DesignerContextProvider({ children }) {
  const [forms, setForms] = useState([]);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState();

  // form functionality
  const onAddForm = (newForm) => {
    setForms((prev) => [...prev, newForm]);
  };

  // element functionality
  const onAddElement = (index, element) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const onUpdateElement = (id, element) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  const onRenderElement = (elements) => {
    setElements(elements);
  };

  const onRemoveElement = (id) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <DesignerContext.Provider
      value={{
        forms,
        onAddForm,

        elements,
        setElements,
        onAddElement,
        onUpdateElement,
        onRemoveElement,

        selectedElement,
        setSelectedElement,
        onRenderElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
