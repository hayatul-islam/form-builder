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
      <div className="bg-[#D0E9EE] dark:bg-black px-[0px] py-[55px] min-h-screen">
        <form
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
          className="max-w-[756px] mx-auto bg-white dark:bg-black px-[48px] py-[40px] border-none 8px space-y-3 gap-4"
        >
          <div className="col-span-1">
            <h2 className="bg-transparent text-[28px] rounded-[6px] text-[center] px-[16px] py-[10px]">
              Booking Form
            </h2>
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <label className="font-medium text-black pb-1.5 block">
              Name<span className="text-[red]"> *</span>
            </label>
            <input
              type="text"
              name="text"
              placeholder="Name"
              className="bg-[#f5fdff] px-[10px] py-[12px] border-[1px] border-[#f5fdff] rounded w-full p-2 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="font-medium text-black pb-1.5 block">
              Email<span className="text-[red]"> *</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-[#f5fdff] px-[10px] py-[12px] border-[1px] border-[#f5fdff] rounded w-full p-2 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="font-medium text-black pb-1.5 block">
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              placeholder="Phone number"
              className="bg-[#f5fdff] px-[10px] py-[12px] border-[1px] border-[#f5fdff] rounded w-full p-2 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label className="font-medium text-black pb-1.5 block">
              Arrival Date<span className="text-[red]"> *</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Select a date"
              className="bg-[#f5fdff] px-[10px] py-[12px] border-[1px] border-[#f5fdff] rounded w-full p-2 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="font-medium text-black pb-1.5 block">
              Number of Nights<span className="text-[red]"> *</span>
            </label>
            <select
              name="select"
              className="bg-[#f5fdff] px-[10px] py-[12px] border-[1px] border-[#f5fdff] rounded w-full p-2 focus:outline-none focus:border-blue-400 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="3">3</option>
              <option value="c8486a39-522f-43dd-9808-c0aa0a869c9c">4</option>
              <option value="6ac266fd-9f8b-4c58-b97a-c623cf86b166">5</option>
              <option value="7fccbbc2-bf80-4c5b-b531-242480763b45">6</option>
              <option value="1257b02e-64e7-41f1-ac9e-edf8fcf03695">7</option>
              <option value="60959a0d-c400-4f1f-827d-2c55e0898577">8</option>
              <option value="9ffea33f-a83e-45d2-8ddd-b812c3183975">9</option>
              <option value="35e1e440-fda3-44d1-b5ce-83dc9131269e">10+</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-black pb-1.5 block">
              Number of Guests<span className="text-[red]"> *</span>
            </label>
            <select
              name="select"
              className="bg-[#f5fdff] px-[10px] py-[12px] border-[1px] border-[#f5fdff] rounded w-full p-2 focus:outline-none focus:border-blue-400 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="929fa952-5bd0-42e9-b966-8e6fed6cc8d5">4</option>
              <option value="e13f63dc-af0f-40ff-8b21-3ffd6e991a15">5+</option>
            </select>
          </div>
          <div className="col-span-full">
            <div className="justify-center">
              <button
                type="submit"
                className="bg-[#00ADB5] text-[#ffffff] text-[16px] rounded-[6px] px-[16px] py-[12px] w-[150px] text-center"
              >
                Book
              </button>
            </div>
          </div>
        </form>
      </div>

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
