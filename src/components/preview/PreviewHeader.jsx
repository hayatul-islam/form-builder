import { AiOutlineDesktop } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdTabletMac } from "react-icons/md";
import { Link } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";

const PreviewHeader = () => {
  const { previewMode, onPreviewMode } = useBuilder();

  return (
    <div className="container flex justify-between items-center py-[0.5px]">
      <div>
        <Link to="/builder" className="text-white">
          <IoArrowBackOutline size={24} />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onPreviewMode("desktop")}
          className={`flex items-center justify-center gap-2 py-2 font-medium text-black/60 px-2 text-[10px] rounded-lg w-[35px] h-[35px] ${
            previewMode === "desktop" ? " bg-white text-primary" : ""
          } `}
        >
          <AiOutlineDesktop size={20} />
        </button>
        <button
          onClick={() => onPreviewMode("tablet")}
          className={`flex items-center justify-center text-black/60 rounded-lg w-[35px] h-[35px] ${
            previewMode === "tablet" ? " bg-white text-primary" : ""
          } `}
        >
          <MdTabletMac size={20} />
        </button>

        <button
          onClick={() => onPreviewMode("mobile")}
          className={`flex items-center justify-center text-black/60 rounded-lg w-[35px] h-[35px] ${
            previewMode === "mobile" ? " bg-white text-primary" : ""
          } `}
        >
          <FaMobileAlt size={20} />
        </button>
      </div>
      <div>d</div>
    </div>
  );
};

export default PreviewHeader;
