import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// Initial state of the builder
const initialState = {
  elements: [],
};

const builderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      return {
        ...state,
        elements: [
          ...state.elements,
          {
            id: uuidv4(),
            ...action.payload,
          },
        ],
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
    case "REORDER_ELEMENTS":
      return {
        ...state,
        elements: action.payload,
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
