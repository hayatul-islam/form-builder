import { AiOutlineDesktop } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdTabletMac } from "react-icons/md";
import useBuilder from "../../hooks/useBuilder";

const PreviewHeader = () => {
  const { previewMode, onPreviewMode } = useBuilder();

  return (
    <div className="container flex justify-between items-center py-[0.5px]">
      <div>
        <button>
          <IoArrowBackOutline />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onPreviewMode("desktop")}
          className={`flex items-center gap-2 py-2 font-medium text-black/60  px-2 text-[14px] border-b-2  ${
            previewMode === "desktop" ? " border-primary" : "border-white "
          } `}
        >
          <AiOutlineDesktop size={24} />
          <span>Desktop</span>
        </button>
        <button
          onClick={() => onPreviewMode("tablet")}
          className={`flex items-center gap-2 py-2 font-medium text-black/60  px-2 text-[14px] border-b-2  ${
            previewMode === "tablet" ? " border-primary" : "border-white "
          } `}
        >
          <MdTabletMac size={20} />
          <span>Tablet</span>
        </button>
        <button
          onClick={() => onPreviewMode("mobile")}
          className={`flex items-center gap-2 py-2 font-medium text-black/60  px-2 text-[14px] border-b-2 ${
            previewMode === "mobile" ? " border-primary" : "border-white "
          } `}
        >
          <FaMobileAlt size={20} />
          <span>Mobile</span>
        </button>
      </div>
      <div>d</div>
    </div>
  );
};

export default PreviewHeader;
