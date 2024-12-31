import { AiOutlineDesktop } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdTabletMac } from "react-icons/md";
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";

const PreviewHeader = () => {
  const { previewMode, onPreviewMode } = useBuilder();
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => {
    id ? navigate(`/builder/${id}`) : navigate("/builder");
  };

  return (
    <div className="container flex justify-between items-center px-6 py-3">
      {/* <HeaderBrand /> */}
      <button
        onClick={goBack}
        className="flex items-center gap-1 text-[18px] font-medium text-primary"
      >
        <TiArrowBackOutline size={24} />
        <span>Back</span>
      </button>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onPreviewMode("desktop")}
          className={`flex items-center justify-center gap-2 py-2 font-medium text-black/60 px-2 text-[10px] rounded-lg w-[35px] h-[35px] ${
            previewMode === "desktop"
              ? "border border-primary text-primary"
              : "dark:text-gray-100"
          } `}
        >
          <AiOutlineDesktop size={20} />
        </button>
        <button
          onClick={() => onPreviewMode("tablet")}
          className={`flex items-center justify-center text-black/60 rounded-lg w-[35px] h-[35px] ${
            previewMode === "tablet"
              ? "border border-primary text-primary"
              : "dark:text-gray-100"
          } `}
        >
          <MdTabletMac size={20} />
        </button>

        <button
          onClick={() => onPreviewMode("mobile")}
          className={`flex items-center justify-center text-black/60 rounded-lg w-[35px] h-[35px] ${
            previewMode === "mobile"
              ? "border border-primary text-primary"
              : "dark:text-gray-100"
          } `}
        >
          <FaMobileAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default PreviewHeader;
