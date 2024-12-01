import { SiReacthookform } from "react-icons/si";

import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";

const MyForms = () => {
  const { forms } = useBuilder();

  return (
    <div className="container space-y-2">
      <h3>My Forms</h3>
      <div className="space-y-3">
        {forms?.map((form) => (
          <div
            key={form?.id}
            className="bg-white/50 shadow-sm border rounded border-gray px-4 py-2 flex justify-between items-center group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 border border-gray rounded ">
                <SiReacthookform className="text-primary font-black text-[18px]" />
              </div>
              <div>
                <h4 className="pt-1">{form?.name}</h4>
                <p className="text-[12px] text-black/40">
                  Create on: {form?.createdAt}{" "}
                </p>
              </div>
            </div>
            <div className="hidden group-hover:flex items-center gap-2">
              <Link
                to={`/builder/${form?.id}`}
                className="text-[20px] text-blue-500"
              >
                <BiSolidEdit />
              </Link>
              <button className="text-[20px] text-red-500">
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyForms;
