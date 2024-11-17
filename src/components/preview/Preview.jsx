import JSXParser from "react-jsx-parser";
import useBuilder from "../../hooks/useBuilder";
import PageLayout from "../../layout/PageLayout";
import { onFormCodeGenerator } from "../../utils";

const Preview = () => {
  const { selectForm } = useBuilder();

  const code = onFormCodeGenerator(selectForm);

  return (
    <PageLayout>
      <JSXParser components={{}} jsx={code?.previewCode} />
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
