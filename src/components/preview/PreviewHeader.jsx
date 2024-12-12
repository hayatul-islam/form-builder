import { AiOutlineDesktop } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdTabletMac } from "react-icons/md";
import useBuilder from "../../hooks/useBuilder";
import { HeaderBrand } from "../common/Header";

const PreviewHeader = () => {
  const { previewMode, onPreviewMode } = useBuilder();

  return (
    <div className="container flex justify-between items-center py-[0.5px]">
      <HeaderBrand />
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
