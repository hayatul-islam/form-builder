import React from "react";

const ToggleButton = ({ label, name, value, onChange }) => {
  const isChecked = value === true;

  return (
    <div className="space-y-1">
      <label className="block font-medium">{label}</label>
      <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={value}
          onChange={() => onChange(name, !value)}
          className="sr-only"
        />

        <div
          className={`shadow-card flex h-[40px] w-[76px] items-center justify-center rounded-md bg-white ${
            isChecked && "!bg-primary/10"
          }`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded font-medium text-[12px] ${
              !isChecked ? "bg-primary text-white" : "text-body-color"
            }`}
          >
            OFF
          </span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded text-[12px] font-medium ${
              isChecked ? "bg-primary text-white" : "text-body-color"
            }`}
          >
            ON
          </span>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;

// import { useState } from "react";

// const ToggleButton = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div className="space-y-">
//       <label className="block font-medium">Required</label>
//       <label className="inline-flex items-center mb-5 cursor-pointer">
//         <input
//           type="checkbox"
//           className="sr-only peer"
//           checked={isChecked}
//           onChange={handleChange}
//         />
//         <div
//           className={`relative w-11 h-6 bg-gray-200 bg-black/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
//         ${isChecked ? "peer-checked:bg-primary" : ""}
//       `}
//         >
//           <div
//             className={`after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
//           ${
//             isChecked
//               ? "after:translate-x-full rtl:after:-translate-x-full after:border-white"
//               : ""
//           }
//         `}
//           ></div>
//         </div>
//       </label>
//     </div>
//   );
// };

// export default ToggleButton;
