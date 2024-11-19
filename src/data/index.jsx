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
  FaTextWidth,
} from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { RxButton } from "react-icons/rx";

export const btnElements = [
  {
    name: "text",
    label: "Text Field",
    icon: <FaTextWidth />,
    type: "text",
    placeholder: "Enter text here",
    isRequired: false,
    isReadOnly: false,
  },
  {
    name: "textarea",
    label: "Textarea",
    icon: <IoText />,
    type: "textarea",
    placeholder: "Enter text here",
    isRequired: false,
    isReadOnly: false,
  },

  {
    name: "email",
    label: "Email",
    icon: <FaAt />,
    type: "email",
    placeholder: "Enter your email",
    isRequired: true,
    isReadOnly: false,
  },
  {
    name: "number",
    label: "Number",
    icon: <FaHashtag />,
    type: "number",
    placeholder: "Enter a number",
    isRequired: false,
    isReadOnly: false,
  },
  {
    name: "password",
    label: "Password",
    icon: <FaLock />,
    type: "password",
    placeholder: "Enter your password",
    isRequired: true,
    isReadOnly: false,
  },
  {
    name: "url",
    label: "URL",
    icon: <FaLink />,
    type: "url",
    placeholder: "Enter a URL",
    isRequired: false,
    isReadOnly: false,
  },
  {
    name: "select",
    label: "Select",
    icon: <FaCaretSquareDown />,
    type: "select",
    placeholder: "Select an option",
    isRequired: false,
    isReadOnly: false,
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
  },
  {
    name: "file",
    label: "File",
    icon: <FaFileUpload />,
    type: "file",
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
  },
  {
    name: "date",
    label: "Date",
    icon: <FaCalendarAlt />,
    type: "date",
    placeholder: "Select a date",
    isRequired: false,
    isReadOnly: false,
  },
  {
    name: "time",
    label: "Time",
    icon: <FaClock />,
    type: "time",
    placeholder: "Select a time",
    isRequired: false,
    isReadOnly: false,
  },
  {
    name: "checkbox",
    label: "Checkbox",
    icon: <FaCheckSquare />,
    type: "checkbox",
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
  },
  {
    name: "radio",
    label: "Radio",
    icon: <FaDotCircle />,
    type: "radio",
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
  },
  {
    name: "button",
    label: "Submit",
    icon: <RxButton />,
    type: "submit",
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
  },
];

export const demo = [
  {
    id: 1,
    name: "Login Form",
    image: "",
    elements: [
      {
        id: "5b5f372e-1a05-4890-8ca5-27b05d9d44b9",
        name: "emailField",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "9c57340e-f5a5-41b4-8bb7-f0c87636615f",
        name: "passwordField",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        isRequired: true,
        isReadOnly: false,
      },
    ],
    settings: {
      layout: {
        width: "768",
        background: {
          light: "",
          dark: "",
        },
        pageBackground: {
          light: "",
          dark: "",
        },
        margin: {
          top: "",
          bottom: "",
          left: "",
          right: "",
        },
        padding: {
          top: "",
          bottom: "",
          left: "",
          right: "",
        },
        border: {
          color: "",
          darkColor: "",
          style: "",
          thickness: "",
        },
      },
      label: {
        fontSize: "",
        fontWeight: "",
        color: {
          light: "",
          dark: "",
        },
        margin: {
          top: "",
          bottom: "",
          left: "",
          right: "",
        },
        padding: {
          top: "",
          bottom: "",
          left: "",
          right: "",
        },
      },
      inputField: {
        fontSize: "",
        fontWeight: "",
        color: {
          light: "",
          dark: "",
        },
        background: {
          light: "",
          dark: "",
        },
        margin: {
          top: "",
          bottom: "",
          left: "",
          right: "",
        },
        padding: {
          top: "",
          bottom: "",
          left: "",
          right: "",
        },
        border: {
          color: "",
          darkColor: "",
          style: "",
          thickness: "",
        },
      },
    },
  },
  {
    id: 2,
    name: "Register Form",
    image: "",
    elements: [],
    settings: {},
  },
];

export const borderStyle = [
  {
    label: "None",
    value: "none",
  },
  {
    label: "Solid",
    value: "solid",
  },
  {
    label: "Dotted",
    value: "dotted",
  },
  {
    label: "Dashed",
    value: "dashed",
  },
];

export const fontWeightStyle = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Bold",
    value: "bold",
  },
];

const settings = {
  layout: {
    width: "",
    background: {
      light: "",
      dark: "",
    },
    pageBackground: {
      light: "",
      dark: "",
    },
    margin: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
    padding: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
    border: {
      color: "",
      darkColor: "",
      style: "",
      thickness: "",
    },
  },
  label: {
    fontSize: "",
    fontWeight: "",
    color: {
      light: "",
      dark: "",
    },
    margin: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
    padding: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
  },
  inputField: {
    fontSize: "",
    fontWeight: "",
    color: {
      light: "",
      dark: "",
    },
    background: {
      light: "",
      dark: "",
    },
    margin: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
    padding: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
    border: {
      color: "",
      darkColor: "",
      style: "",
      thickness: "",
    },
  },
};
