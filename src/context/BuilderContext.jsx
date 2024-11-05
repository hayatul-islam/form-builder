import { createContext, useContext, useReducer } from "react";

// Initial state of the builder
const initialState = {
  elements: [],
};

const builderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case "REMOVE_ELEMENT":
      return {
        ...state,
        elements: state.elements.filter(
          (element) => element.id !== action.payload
        ),
      };
    case "UPDATE_ELEMENT":
      return {
        ...state,
        elements: state.elements.map((element) =>
          element.id === action.payload.id ? action.payload : element
        ),
      };
    default:
      return state;
  }
};

// Create the context
const BuilderContext = createContext();

// Context provider component
export const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(builderReducer, initialState);

  return (
    <BuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </BuilderContext.Provider>
  );
};

// Custom hook to use the BuilderContext
export const useBuilderContext = () => {
  return useContext(BuilderContext);
};
