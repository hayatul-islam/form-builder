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
import bookingFormImg from "../assets/demos/booking-form.png";
import businessRegisterImg from "../assets/demos/business-register5.png";
import feedbackFormImg from "../assets/demos/feedback-form.png";
import informationRequestForm from "../assets/demos/information-request-form.png";
import loginImg from "../assets/demos/login-page.png";
import registerFormImg from "../assets/demos/register-form.png";

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
    name: "single check",
    label: "Single Choice",
    icon: <FaCheckSquare />,
    type: "single-check",
    placeholder: "",
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

export const initialTemplate = {
  name: "",
  image: "",
  elements: [],
  settings: {
    layout: {
      background: {
        light: "#FFFFFF",
      },
      pageBackground: {
        light: "#dddddd",
      },
      width: "700",
    },
  },
};

export const demo = [
  {
    id: "80097677-cc0c-49f4-83ed-cf12c2849dda",
    name: "Register Form",
    image: registerFormImg,
    elements: [
      {
        id: "18a2b82f-fb93-4b7c-947b-4ceec2c6438b",
        name: "headline",
        label: "Register Form",
        type: "title",
        settings: {
          0: "d",
          color: "#37b8a3",
          fontSize: "28",
        },
      },
      {
        id: "728a3000-14c2-4c62-97bb-114fdb826b39",
        name: "text",
        label: "Name",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "text",
        placeholder: "Name",
        isRequired: true,
        isReadOnly: false,
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
        id: "cf527164-2434-48b4-9f65-dc10087959d9",
        name: "number",
        label: "Phone",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "number",
        placeholder: "Phone",
        isRequired: false,
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
        id: "bbcc02ae-b917-468b-9ac7-505811766661",
        name: "password",
        label: "Confirm Password",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "password",
        placeholder: "********",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "7e44e9ea-ced5-4fff-8365-71e1f2bd04b4",
        name: "single check",
        label: "I accept terms & conditions",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "single-check",
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
      },
      {
        id: "4dee839a-3d38-449a-82c6-064e7580ccec",
        name: "button",
        label: "Create Account",
        type: "submit",
        placeholder: "",
        settings: {
          background: "#20c997",
          color: "#ffffff",
          width: "200",
          padding: {
            horizontal: 12,
            vertical: 16,
          },
          radius: "30",
          alignment: "center",
          fontSize: "18",
        },
      },
    ],
    createdAt: "2024-12-11T05:55:51.843Z",
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
          horizontal: "86",
          vertical: "49",
        },
        pageBackground: {
          light: "#A2ECDC",
        },
        width: "600",
        border: {
          radius: "20",
        },
        gap: "",
      },
      inputField: {
        border: {
          radius: "bottom",
          color: "#a2ecdc",
          thickness: "2",
        },
        padding: {
          vertical: "2",
        },
      },
    },
  },
  {
    id: "65ada6c2-6ec1-4942-ae8b-20aae4660624",
    name: "Booking Form",
    image: bookingFormImg,
    elements: [
      {
        id: "29ad86e1-bd80-4031-8d1a-63f0a54fc108",
        name: "headline",
        label: "Booking Form",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "title",
        settings: {
          color: "",
          background: "",
          padding: {
            horizontal: 10,
            vertical: 16,
          },
          alignment: "center",
          fontSize: "28",
          radius: "",
        },
      },
      {
        id: "74d27305-2d24-48ed-9c09-cbc0bc6deecf",
        name: "text",
        label: "Name",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "text",
        placeholder: "Name",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "4c1ba51b-e9a6-499e-b57d-2f5afe5d8b61",
        name: "email",
        label: "Email",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "email",
        placeholder: "Email",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "3a541a6a-ebaa-48b1-ba5f-dfec28189966",
        name: "number",
        label: "Phone Number",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "number",
        placeholder: "Phone number",
        isRequired: false,
        isReadOnly: false,
      },
      {
        id: "bac142cd-596f-48d1-b762-af94b291e19b",
        name: "date",
        label: "Arrival Date",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "date",
        placeholder: "Select a date",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "c93ad1d5-155e-4df7-adbe-35acf356ef3b",
        name: "select",
        label: "Number of Nights",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "select",
        placeholder: "Select an option",
        isRequired: true,
        isReadOnly: false,
        options: [
          {
            label: "3",
            value: "3",
          },
          {
            value: "c8486a39-522f-43dd-9808-c0aa0a869c9c",
            label: "4",
          },
          {
            value: "6ac266fd-9f8b-4c58-b97a-c623cf86b166",
            label: "5",
          },
          {
            value: "7fccbbc2-bf80-4c5b-b531-242480763b45",
            label: "6",
          },
          {
            value: "1257b02e-64e7-41f1-ac9e-edf8fcf03695",
            label: "7",
          },
          {
            value: "60959a0d-c400-4f1f-827d-2c55e0898577",
            label: "8",
          },
          {
            value: "9ffea33f-a83e-45d2-8ddd-b812c3183975",
            label: "9",
          },
          {
            value: "35e1e440-fda3-44d1-b5ce-83dc9131269e",
            label: "10+",
          },
        ],
      },
      {
        id: "ec4b6d01-7a71-4123-b9be-694a20e5a99e",
        name: "select",
        label: "Number of Guests",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "select",
        placeholder: "Select an option",
        isRequired: true,
        isReadOnly: false,
        options: [
          {
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            value: "929fa952-5bd0-42e9-b966-8e6fed6cc8d5",
            label: "4",
          },
          {
            value: "e13f63dc-af0f-40ff-8b21-3ffd6e991a15",
            label: "5+",
          },
        ],
      },
      {
        id: "7f9a191a-a88d-4715-a179-c9f73fbd1040",
        name: "button",
        label: "Book",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
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
          alignment: "full",
          fontSize: 16,
        },
      },
    ],
    createdAt: "2024-12-12T05:59:34.114Z",
    settings: {
      layout: {
        width: "756",
        pageBackground: {
          light: "#D0E9EE",
        },
        padding: {
          horizontal: "40",
          vertical: "48",
        },
        pagePadding: {
          horizontal: "55",
          vertical: "0",
        },
      },
      inputField: {
        background: {
          light: "#f5fdff",
        },
        border: {
          color: "#f5fdff",
        },
        padding: {
          horizontal: "12",
          vertical: "10",
        },
      },
    },
  },
  {
    id: "80f8851c-f5b1-404d-bef9-d7d07463988e",
    name: "Information Request Form",
    image: informationRequestForm,
    elements: [
      {
        id: "57d4849e-8181-4fdf-8a07-7b19e17528aa",
        name: "headline",
        label: "Information Request",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "title",
        settings: {
          color: "",
          background: "",
          padding: {
            horizontal: 10,
            vertical: 16,
          },
          alignment: "left",
          fontSize: 24,
          radius: "",
        },
      },
      {
        id: "df0178b4-dda3-4b2b-9002-106719982b7a",
        name: "text",
        label: "Name",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "text",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "0947a0b6-adcd-4135-a820-e892898e7f4c",
        name: "email",
        label: "Email",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "email",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "561250a6-70e0-4c24-8635-5d5f76746245",
        name: "number",
        label: "Phone Number",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "number",
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
      },
      {
        id: "6ab895fa-851a-4f45-9410-b8af6d907de9",
        name: "textarea",
        label: "Requesting Information Regarding",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "textarea",
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
      },
      {
        id: "90dd3632-404a-4baa-8b5f-b3cff5b5fd20",
        name: "textarea",
        label: "Additional Instructions",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "textarea",
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
      },
      {
        id: "cdab637c-1ea4-4f90-b78b-061df19d709c",
        name: "button",
        label: "Submit",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "submit",
        placeholder: "",
        settings: {
          background: "#28a745",
          color: "#ffffff",
          width: 150,
          padding: {
            horizontal: 12,
            vertical: 16,
          },
          radius: "0",
          alignment: "center",
          fontSize: 16,
        },
      },
    ],
    createdAt: "2024-12-11T06:43:37.199Z",
    settings: {
      layout: {
        width: "700",
        pageBackground: {
          light: "#F3F3FE",
        },
        padding: {
          horizontal: "20",
          vertical: "32",
        },
        pagePadding: {
          horizontal: "78",
        },
      },
      inputField: {
        border: {
          color: "#ddd",
          radius: "0",
        },
      },
    },
  },
  {
    id: "77cfdd8b-864e-46af-a547-5fd89ea9ccbb",
    name: "Feedback Form",
    image: feedbackFormImg,
    elements: [
      {
        id: "19175f4e-da27-4589-a408-6e9c153a46cc",
        name: "headline",
        label: "Feedback Form",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "title",
        settings: {
          color: "",
          background: "",
          padding: {
            horizontal: 10,
            vertical: 16,
          },
          alignment: "center",
          fontSize: "30",
          radius: "",
        },
      },
      {
        id: "bbf56d74-61bf-45f3-82e2-c76f3b24b7d3",
        name: "radio",
        label: "Feedback Type",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "radio",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
        options: [
          {
            label: "Comments",
            value: "1",
          },
          {
            label: "Suggestions",
            value: "2",
          },
          {
            label: "Questions",
            value: "3",
          },
        ],
        settings: {
          numberOfColumns: "3",
        },
      },
      {
        id: "538fbab7-36cd-476d-8306-eda601d2f9cb",
        name: "textarea",
        label: "Describe Your Feedback",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "textarea",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "d639f7b9-70e6-48b1-b7cc-51b9e74b4847",
        name: "text",
        label: "Name",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "text",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "1bc1ece7-e74d-4d7f-ba2a-6d6ae27b00df",
        name: "email",
        label: "Email",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "email",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "b3f69c6e-85f4-446c-bd60-ada2c15b30e6",
        name: "button",
        label: "Submit",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "submit",
        placeholder: "",
        settings: {
          background: "#007bff",
          color: "#ffffff",
          width: 150,
          padding: {
            horizontal: 12,
            vertical: 16,
          },
          radius: 6,
          alignment: "right",
          fontSize: 16,
        },
      },
    ],
    createdAt: "2024-12-11T07:56:16.053Z",
    settings: {
      layout: {
        width: "600",
        pageBackground: {
          light: "#303170",
        },
        pagePadding: {
          horizontal: "90",
        },
        border: {
          radius: "9",
        },
        padding: {
          vertical: "30",
        },
      },
      inputField: {
        border: {
          radius: "10",
        },
        padding: {
          horizontal: "16",
          vertical: "16",
        },
      },
    },
  },
  {
    id: "f2554aca-348b-4719-b1d2-8c1e2c4ae5c2",
    name: "Business Registration form",
    image: businessRegisterImg,
    elements: [
      {
        id: "eb7a5681-2d4a-496c-bbfc-d4c014f1fca2",
        name: "headline",
        label: "Business Register",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "title",
        settings: {
          0: "0",
          fontSize: "28",
        },
      },
      {
        id: "c454bc04-719f-49ae-a96d-11a5b80c7105",
        name: "text",
        label: "Business Owner",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "text",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "6ba62d07-219d-49b9-8256-9de7de0548e7",
        name: "text",
        label: "Businesss Name",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "text",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "55cbc68b-2296-4501-8e81-18bcb9818c3d",
        name: "select",
        label: "Type of Business",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "select",
        placeholder: "Select an option",
        isRequired: true,
        isReadOnly: false,
        options: [
          {
            label: "Shop/cafe",
            value: "1",
          },
          {
            label: "Store",
            value: "2",
          },
          {
            label: "Others",
            value: "3",
          },
        ],
      },
      {
        id: "6f4b2579-a86d-4938-a60f-ecbd83fdb8be",
        name: "number",
        label: "Contact Number",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "number",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "a0555eea-1da1-487f-8308-64ba22d57eb2",
        name: "email",
        label: "Email",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "email",
        placeholder: "",
        isRequired: true,
        isReadOnly: false,
      },
      {
        id: "a01ad370-69cb-4272-ac70-384fd066d7bf",
        name: "textarea",
        label: "Message",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "textarea",
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
      },
      {
        id: "11fd782e-2fb7-48ef-ab9e-afa939d755da",
        name: "button",
        label: "Submit",
        icon: {
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        type: "submit",
        placeholder: "",
        settings: {
          background: "#001f3f",
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
    ],
    createdAt: "2024-12-12T05:11:23.173Z",
    settings: {
      layout: {
        width: "750",
        background: {
          light: "#fff",
        },
        pagePadding: {
          horizontal: "70",
        },
        padding: {
          horizontal: "38",
          vertical: "48",
        },
        border: {
          radius: "13",
          thickness: "1",
          style: "none",
          color: "#404040",
        },
        pageBackground: {
          light: "#FEF7EC",
        },
      },
      inputField: {
        border: {
          color: "#d1d1d1",
          radius: "10",
        },
        padding: {
          vertical: "14",
          horizontal: "16",
        },
      },
      label: {
        color: {
          light: "#000000",
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
