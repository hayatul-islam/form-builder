import JSXParser from "react-jsx-parser";
import useBuilder from "../../hooks/useBuilder";
import PageLayout from "../../layout/PageLayout";
import { onFormCodeGenerator } from "../../utils";

const Preview = () => {
  const { selectForm, previewMode } = useBuilder();

  const code = onFormCodeGenerator(selectForm);

  // Set container styles dynamically based on the selected preview mode
  const getPreviewStyles = () => {
    switch (previewMode) {
      case "mobile":
        return "w-[375px] h-[667px]";
      case "tablet":
        return "w-[768px] h-[1024px]";
      case "desktop":
        return "w-full h-auto";
      default:
        return "w-full h-auto";
    }
  };

  return (
    <PageLayout type="preview">
      <div
        className={`container mx-auto bg-white overflow-hidden ${getPreviewStyles()}`}
      >
        {/* Render the generated form */}
        <JSXParser components={{}} jsx={code?.previewCode || ""} />
      </div>
    </PageLayout>
  );
};

export default Preview;

// import { useEffect, useState } from "react";
// import JSXParser from "react-jsx-parser";
// import useBuilder from "../../hooks/useBuilder";
// import PageLayout from "../../layout/PageLayout";
// import {
//   onFormCodeGenerator,
//   onFormStyle,
//   onInputStyle,
//   onLabelStyle,
//   onPageStyle,
// } from "../../utils";

// const Preview = () => {
//   const { selectForm } = useBuilder();
//   const [formCode, setFormCode] = useState("");

//   // Generate styles dynamically based on settings
//   const pageStyle = onPageStyle(selectForm?.settings?.layout);
//   const formStyle = onFormStyle(selectForm?.settings?.layout);
//   const labelStyle = onLabelStyle(selectForm?.settings?.label);
//   const inputStyle = onInputStyle(selectForm?.settings?.inputField);

//   useEffect(() => {
//     // Generate form code when selectForm changes
//     setFormCode(onFormCodeGenerator(selectForm));
//   }, [selectForm]);

//   return (
//     <PageLayout>
//       <div style={pageStyle?.style} className={pageStyle?.className}>
//         <form style={formStyle?.style} className={formStyle?.className}>
//           {selectForm?.elements?.map((field) => (
//             <div key={field.id} className="flex flex-col">
//               <label className={labelStyle?.className}>
//                 {field.label}
//                 {field.isRequired && (
//                   <span
//                     className={`text-[${
//                       selectForm?.settings?.label?.requiredColor?.light || "red"
//                     }]`}
//                   >
//                     {" "}
//                     *
//                   </span>
//                 )}
//               </label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 required={field.isRequired}
//                 readOnly={field.isReadOnly}
//                 className={`${inputStyle?.className} rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
//               />
//             </div>
//           ))}
//         </form>
//       </div>
//       {/* Render the form dynamically using JSXParser */}
//       <JSXParser components={{}} jsx={formCode} />
//       <pre>{formCode}</pre>
//     </PageLayout>
//   );
// };

// export default Preview;
