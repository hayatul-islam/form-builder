// import JSXParser from "react-jsx-parser";
import useBuilder from "../../hooks/useBuilder";
import PageLayout from "../../layout/PageLayout";
import { onFormStyle, onPageStyle } from "../../utils";
import SingleElement from "../form-builder/SingleElement";

const Preview = () => {
  const { previewMode, elements, settings } = useBuilder();

  const getPreviewStyles = () => {
    switch (previewMode) {
      case "mobile":
        return "w-[375px] h-[500px] overflow-y-scroll";
      case "tablet":
        return "w-[768px] h-[500px] overflow-y-scroll";
      case "desktop":
        return "w-full h-auto mx-auto";
      default:
        return "w-full h-auto";
    }
  };

  const pageStyle = onPageStyle(settings?.layout);
  const formStyle = onFormStyle(settings?.layout);

  return (
    <PageLayout type="preview">
      <PreviewLayout previewMode={previewMode}>
        <div
          style={pageStyle?.style}
          className={`${getPreviewStyles()} ${pageStyle?.className}`}
        >
          <form style={formStyle?.style} className={formStyle?.className}>
            {elements?.map((element) => (
              <SingleElement key={element?.id} element={element} />
            ))}
          </form>
        </div>
      </PreviewLayout>
    </PageLayout>
  );
};

export default Preview;

const PreviewLayout = ({ children, previewMode }) => {
  return (
    <>
      {previewMode === "desktop" ? (
        children
      ) : (
        <div className=" flex justify-center">
          <div className={`inline-block shadow-lg p-5 bg-black rounded-[24px]`}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

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
