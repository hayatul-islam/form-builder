import React from "react";
import InputField from "../common/InputField";
import InputFile from "../common/InputFile";

const SingleElement = ({ element }) => {
  let filed;

  switch (element?.type) {
    case "file":
      filed = <InputFile label={element.label} type="file" value="" />;
      break;

    default:
      filed = <InputField label={element.label} type={element.type} value="" />;
      break;
  }

  return <div>{filed}</div>;
};

export default SingleElement;
