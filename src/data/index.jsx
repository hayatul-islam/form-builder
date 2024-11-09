import {
  FaAt,
  FaCalendarAlt,
  FaCaretSquareDown,
  FaCheckSquare,
  FaClock,
  FaDotCircle,
  FaFileUpload,
  FaHashtag,
  FaLink,
  FaLock,
  FaPhone,
  FaTextWidth,
} from "react-icons/fa";

export const btnElements = [
  {
    name: "textField",
    label: "Text Field",
    icon: <FaTextWidth />,
    type: "text",
  },
  {
    name: "numberField",
    label: "Number",
    icon: <FaHashtag />,
    type: "number",
  },
  {
    name: "emailField",
    label: "Email",
    icon: <FaAt />,
    type: "email",
  },
  {
    name: "passwordField",
    label: "Password",
    icon: <FaLock />,
    type: "password",
  },
  {
    name: "dateField",
    label: "Date",
    icon: <FaCalendarAlt />,
    type: "date",
  },
  {
    name: "timeField",
    label: "Time",
    icon: <FaClock />,
    type: "time",
  },
  {
    name: "urlField",
    label: "URL",
    icon: <FaLink />,
    type: "url",
  },
  {
    name: "telField",
    label: "Phone",
    icon: <FaPhone />,
    type: "tel",
  },
  {
    name: "checkboxField",
    label: "Checkbox",
    icon: <FaCheckSquare />,
    type: "checkbox",
  },
  {
    name: "radioField",
    label: "Radio",
    icon: <FaDotCircle />,
    type: "radio",
  },
  {
    name: "selectField",
    label: "Select",
    icon: <FaCaretSquareDown />,
    type: "select",
  },
  {
    name: "fileField",
    label: "File",
    icon: <FaFileUpload />,
    type: "file",
  },
];
