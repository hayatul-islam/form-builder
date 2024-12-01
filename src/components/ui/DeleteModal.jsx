import deleteIcon from "../../assets/icons/delete-icon.png";

const DeleteModal = ({ onClose, onClick }) => {
  return (
    <div className="text-center space-y-6">
      <div>
        <img className="w-[45px] mx-auto pb-2" src={deleteIcon} alt="" />
        <h3 className="text-[22px]">Are you sure?</h3>
        <p className="text-black/50">Sure you want to delete.</p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={onClose}
          className="px-6 py-2 pt-2.5 border border-black/10 rounded-lg"
        >
          No, cancel
        </button>
        <button
          onClick={onClick}
          className="px-6 py-2 pt-2.5 bg-red-500 text-white rounded-lg"
        >
          Yes, I'm sure
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
