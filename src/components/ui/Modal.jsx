import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({
  width = "800",
  title,
  children,
  onClose,
  isClose = true,
  className,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleClose = () => {
    setTimeout(onClose, 500);
  };

  const modalContent = (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "999",
      }}
    >
      <div
        style={{
          maxWidth: `${width}px`,
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className={`${className} z-10 w-full space-y-4 rounded-xl bg-white p-5 dark:bg-dark`}
      >
        <div className="flex items-center justify-between">
          {title && (
            <h3 className="text-[20px] font-bold text-black dark:text-white">
              {title}
            </h3>
          )}
          {isClose && (
            <button onClick={handleClose}>
              <MdOutlineClose size={24} />
            </button>
          )}
        </div>
        <div>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { onClose: handleClose })
              : child
          )}
        </div>
      </div>
    </div>
  );

  if (!isMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("portal-root")
  );
};

export default Modal;
