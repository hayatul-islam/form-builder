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
import { FaHeading } from "react-icons/fa6";
import { IoText } from "react-icons/io5";
import { RxButton } from "react-icons/rx";
import loginImg from "../assets/demos/login-page.png";

export const features = [
  {
    title: "Drag-and-Drop",
    // description:
    //   "Effortlessly create forms by simply dragging and dropping fields. No technical skills required.",
    description:
      "Create custom forms without writing code. Simply drag and drop fields.",
    // description:
    //   "Easily build forms by dragging and dropping fields like text, dropdowns, and checkboxes into place. No coding required.",
    image: "https://cdn-icons-png.flaticon.com/128/6591/6591195.png",
  },

  {
    title: "Your forms, your way",
    description:
      "Customize the colors, layout, and fields to match your unique style.",
    image: "https://cdn-icons-png.flaticon.com/128/17561/17561097.png",
  },
  {
    title: "Code Generation",
    description:
      "Save development time by automatically generating the code for your forms.",
    // description:
    //   "Automatically generate code for your forms, saving development time.",
    image: "https://cdn-icons-png.flaticon.com/128/9476/9476927.png",
  },
  {
    title: "Real-Time Preview",
    description:
      "Instantly see how your form will look and function while building it, ensuring a seamless design process.",
    image: "https://cdn-icons-png.flaticon.com/128/1185/1185279.png",
  },
  {
    title: "Beautiful Visual Layouts",
    description:
      "Design visually stunning forms with pre-built templates and customizable themes to match your branding.",
    image: "https://cdn-icons-png.flaticon.com/128/648/648392.png",
  },
];

export const btnElements = [
  {
    name: "headline",
    label: "Headline",
    icon: <FaHeading />,
    type: "title",
    settings: {
      color: "",
      background: "",
      padding: {
        horizontal: 10,
        vertical: 16,
      },
      alignment: "center",
      fontSize: 24,
      radius: "",
    },
  },
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
    settings: {
      background: "#00ADB5",
      color: "#ffffff",
      width: 150,
      padding: {
        horizontal: 12,
        vertical: 16,
      },
      radius: 6,
      alignment: "center",
      fontSize: 16,
    },
  },
];

export const demo = [
  {
    id: 2,
    name: "Demo 1",
    image:
      "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/bakery-order-form-carousel.webp",
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
          light: "#f3f3fe",
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
    id: 3,
    name: "Demo 2",
    image:
      "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/online-business-conference-carousel.webp",
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
          light: "#f3f3fe",
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
    id: 4,
    name: "Demo 3",
    image:
      "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/medical-prescription-form-carousel.webp",
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
          light: "#f3f3fe",
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
    id: 5,
    name: "Demo 4",
    image:
      "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/event-rsvp-form.webp",
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
          light: "#f3f3fe",
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
    id: 6,
    name: "Demo 5",
    image:
      "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/booking-form-carousel.webp",
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
          light: "#f3f3fe",
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
    id: "7b7af1cb-600a-41f4-8ca7-55df83d199d7",
    name: "Login Form",
    image: loginImg,
    elements: [
      {
        id: "18a2b82f-fb93-4b7c-947b-4ceec2c6438b",
        name: "headline",
        label: "Login",

        type: "title",
        settings: {
          0: "d",
          color: "#37b8a3",
          fontSize: "24",
        },
      },
      {
        id: "9ec0e87f-aafb-4300-9797-ffffe9dd9c36",
        name: "email",
        label: "Email",

        type: "email",
        placeholder: "Email",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "47625468-37cf-48f1-9f54-5b54ad318a69",
        name: "password",
        label: "Password",

        type: "password",
        placeholder: "********",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "4dee839a-3d38-449a-82c6-064e7580ccec",
        name: "button",
        label: "SIGN IN",

        type: "submit",
        placeholder: "",
        settings: {
          background: "#37b8a3",
          color: "#ffffff",
          width: 150,
          padding: {
            horizontal: 12,
            vertical: 16,
          },
          radius: 6,
          alignment: "center",
          fontSize: "18",
        },
      },
    ],
    createdAt: "2024-12-04T05:49:56.017Z",
    settings: {
      layout: {
        background: {
          light: "#FFFFFF",
        },
        padding: {
          horizontal: "32",
          vertical: "28",
        },
        pagePadding: {
          horizontal: "50",
          vertical: "49",
        },
        pageBackground: {
          light: "#dddeee",
        },
        width: "500",
        border: {
          radius: "20",
        },
      },
    },
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

export const buttonStyle = [
  { background: "#28a745", color: "#ffffff" },
  { background: "#007bff", color: "#ffffff" },
  { background: "#ffc107", color: "#ffffff" },
  { background: "#fd7e14", color: "#ffffff" },
  { background: "#dc3545", color: "#ffffff" },
  { background: "#6f42c1", color: "#ffffff" },
  { background: "#20c997", color: "#ffffff" },
  { background: "#17a2b8", color: "#ffffff" },
  { background: "#28a745", color: "#ffffff" },
  { background: "#6610f2", color: "#ffffff" },
  { background: "#001f3f", color: "#ffffff" },
  { background: "#F3F3FE", color: "#000000" },
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
