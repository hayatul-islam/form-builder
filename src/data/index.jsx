import {
  FaAlignJustify,
  FaAlignLeft,
  FaCalendar,
  FaCheckSquare,
  FaClock,
  FaDotCircle,
  FaEnvelope,
  FaHeading,
  FaList,
  FaLock,
  FaPhone,
  FaUpload,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

export const elementData = [
  {
    name: "firstName",
    label: "First Name",
    icon: <FaUser />,
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    icon: <FaUser />,
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    icon: <FaEnvelope />,
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    icon: <FaPhone />,
    type: "tel",
  },
  {
    name: "password",
    label: "Password",
    icon: <FaLock />,
    type: "password",
  },
  {
    name: "username",
    label: "Username",
    icon: <FaUserCircle />,
    type: "text",
  },
  {
    name: "file",
    label: "Upload File",
    icon: <FaUpload />,
    type: "file",
  },
  {
    name: "date",
    label: "Pick a Date",
    icon: <FaCalendar />,
    type: "date",
  },
  {
    name: "time",
    label: "Time",
    icon: <FaClock />,
    type: "time",
  },
  {
    name: "select",
    label: "Select",
    icon: <FaList />,
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    name: "title",
    label: "Title",
    icon: <FaHeading />,
    type: "text",
  },
  {
    name: "text",
    label: "Text Field",
    icon: <FaAlignLeft />,
    type: "text",
  },
  {
    name: "textarea",
    label: "Text Area",
    icon: <FaAlignJustify />,
    type: "textarea",
  },
  {
    name: "checkbox",
    label: "Checkbox",
    icon: <FaCheckSquare />,
    type: "checkbox",
    options: ["Option 1", "Option 2", "Option 3"], // Example options
  },
  {
    name: "radio",
    label: "Radio",
    icon: <FaDotCircle />,
    type: "radio",
    options: ["Option 1", "Option 2", "Option 3"], // Example options
  },
];
