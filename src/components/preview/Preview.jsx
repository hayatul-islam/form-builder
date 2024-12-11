// import JSXParser from "react-jsx-parser";
import { useEffect, useState } from "react";
import { CgBatteryFull } from "react-icons/cg";
import { PiCellSignalFullBold, PiDotFill } from "react-icons/pi";
import { TbWifi } from "react-icons/tb";
import useBuilder from "../../hooks/useBuilder";
import PageLayout from "../../layout/PageLayout";
import { onFormStyle, onPageStyle } from "../../utils";
import SingleElement from "../form-builder/SingleElement";

const Preview = () => {
  const { previewMode, elements, settings } = useBuilder();

  const getPreviewStyles = () => {
    switch (previewMode) {
      case "mobile":
        return "w-[360px] h-[600px] overflow-y-auto";
      case "tablet":
        return "w-[750px] h-[650px] overflow-y-auto";
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
          className={`${getPreviewStyles()} ${pageStyle?.className} `}
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
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  // Function to format the current time
  function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;

    hours = hours % 12 || 12;
    const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")} ${
      isPM ? "PM" : "AM"
    }`;
    return formattedTime;
  }

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {previewMode === "desktop" ? (
        children
      ) : (
        <div className="flex justify-center transform scale-[85%]">
          <div
            className={`${
              previewMode === "tablet" ? "border-[20px]" : "border-8"
            } inline-block  border-black rounded-[24px] `}
          >
            <div
              className={`flex justify-between border border-black bg-black text-white items-center gap-2
            px-2 ${previewMode === "tablet" ? "pb-2" : "pb-1"}`}
            >
              <span className="text-sm flex-1">{currentTime}</span>
              <PiDotFill className="flex-1 text-center" size={24} />
              <div className="flex flex-1 justify-end gap-1">
                <PiCellSignalFullBold />
                <TbWifi />
                <CgBatteryFull />
              </div>
            </div>
            {children}
            <div
              className={`flex justify-center border border-black bg-black ${
                previewMode === "tablet" ? "pt-4" : "pt-2"
              }`}
            >
              <div className="w-[60px] border-2 border-white" />
            </div>
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
