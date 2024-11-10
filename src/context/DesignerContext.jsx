import { createContext, useState } from "react";
import { onGetLocalStorage, onSetLocalStorage } from "../utils";

export const DesignerContext = createContext(null);

export default function DesignerContextProvider({ children }) {
  const [forms, setForms] = useState([]);
  const [selectForm, setSelForm] = useState({});
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState();

  // form functionality
  const onAddForm = (newForm) => {
    setForms((prev) => [...prev, newForm]);
  };

  const onSelectForm = (id) => {
    const form = forms?.find((form) => form?.id === id);
    if (form?.id) {
      onSetLocalStorage("form", form);
      setSelForm(form || {});
      setElements(form?.elements || []);
    } else {
      const form = onGetLocalStorage("form");
      setSelForm(form || {});
      setElements(form?.elements || []);
    }
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
        selectForm,
        onSelectForm,

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
