import { useContext } from "react";
import { ResponsiveContext } from "../context/ResponsiveContext";

const useResponsive = () => useContext(ResponsiveContext);

export default useResponsive;
