import { createContext, useEffect, useState } from "react";
import { onGetLocalStorage, onSetLocalStorage } from "../utils";

export const DesignerContext = createContext(null);

export default function DesignerContextProvider({ children }) {
  const initialForms = onGetLocalStorage("forms") || [];
  const initialForm = onGetLocalStorage("form") || {
    elements: [],
    settings: {},
  };
  const [forms, setForms] = useState(initialForms);
  const [selectForm, setSelectForm] = useState(initialForm);
  const [selectedElement, setSelectedElement] = useState();
  const [previewMode, setPreviewMode] = useState("desktop");
  const elements = selectForm?.elements || [];
  const settings = selectForm?.settings || {};

  // form functionality
  const onAddForm = (newForm) => {
    const newForms = [...forms, newForm];
    setForms(newForms);
    setSelectForm(newForm);
    onSetLocalStorage("forms", newForms);
    onSetLocalStorage("form", newForm);
  };

  // settings functionality
  const onUpdateSettings = (settings) => {
    setSelectForm((prev) => ({
      ...prev,
      settings,
    }));
  };

  // element functionality
  const onAddElement = (index, element) => {
    // setElements((prev) => {
    //   const newElements = [...prev];
    //   newElements.splice(index, 0, element);
    //   return newElements;
    // });

    setSelectForm((prev) => ({
      ...prev,
      elements: [
        ...prev.elements.slice(0, index),
        element,
        ...prev.elements.slice(index),
      ],
    }));
  };

  const onUpdateElement = (id, element) => {
    // setElements((prev) => {
    //   const newElements = [...prev];
    //   const index = newElements.findIndex((el) => el.id === id);
    //   newElements[index] = element;
    //   return newElements;
    // });

    setSelectForm((prev) => {
      const newElements = [...prev.elements];
      const index = newElements.findIndex((el) => el.id === id);
      if (index !== -1) {
        newElements[index] = element;
      }
      return {
        ...prev,
        elements: newElements,
      };
    });
  };

  const onRenderElement = (elements) => {
    // setElements(elements);

    setSelectForm((prev) => ({
      ...prev,
      elements,
    }));
  };

  const onRemoveElement = (id) => {
    // setElements((prev) => prev.filter((element) => element.id !== id));
    setSelectForm((prev) => ({
      ...prev,
      elements: prev.elements.filter((element) => element.id !== id),
    }));
  };

  // preview mode (desktop, tablet, mobile) functionality
  const onPreviewMode = (mode) => {
    setPreviewMode(mode);
  };

  // When the selected form data changes, store the updated form data in localStorage
  useEffect(() => {
    selectForm?.id && onSetLocalStorage("form", selectForm);
    // onSetLocalStorage("form", selectForm);
  }, [selectForm]);

  return (
    <DesignerContext.Provider
      value={{
        forms,
        onAddForm,
        selectForm,

        settings,
        onUpdateSettings,

        elements,
        onAddElement,
        onUpdateElement,
        onRemoveElement,
        onRenderElement,

        selectedElement,
        setSelectedElement,

        previewMode,
        onPreviewMode,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
