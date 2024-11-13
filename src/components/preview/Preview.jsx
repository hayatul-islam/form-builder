import useBuilder from "../../hooks/useBuilder";

const Preview = () => {
  const { elements, settings } = useBuilder();

  const generateCode = () => {
    return `import React from "react";

  const FormComponent = () => {
    return (
      <form className="space-y-4 p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
  ${elements
    .map(
      (field) => `<div key="${field.id}" className="flex flex-col">
          <label className="mb-1 font-semibold text-[${
            settings?.textColor?.light
          }]">
            ${field.label}${
        field.isRequired ? '<span className="text-red-500"> *</span>' : ""
      }
          </label>
          <input
            type="${field.type}"
            name="${field.name}"
            placeholder="${field.placeholder}"
            ${field.isRequired ? "required" : ""}
            ${field.isReadOnly ? "readOnly" : ""}
            className="border rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>`
    )
    .join("\n")}
      </form>
    );
  };
  
  export default FormComponent;`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    alert("Code copied to clipboard!");
  };

  console.log(elements);

  return (
    <>
      <div className="bg-black max-w-[900px] mx-auto p-4 rounded">
        <button
          onClick={handleCopy}
          className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Copy Code
        </button>
        <pre className="bg-gray-900 text-green-200 p-4 mt-2 rounded whitespace-pre-wrap">
          {generateCode()}
        </pre>
      </div>
    </>
  );
};

export default Preview;
