import { AiOutlinePlus } from "react-icons/ai";

const Forms = () => {
  return (
    <div className="container grid grid-cols-4 gap-5 pt-6">
      <div className="space-y-2">
        <button className="h-[250px] w-full rounded-xl bg-gray flex justify-center items-center text-primary">
          <AiOutlinePlus className="text-[48px]" />
        </button>
        <h3 className="font-medium text-[18px] text-center">
          Start form scratch
        </h3>
      </div>
      {[
        "demo 1",
        "demo 2",
        "demo 3",
        "demo 4",
        "demo 5",
        "demo 6",
        "demo 7",
      ].map((item) => (
        <div key={item} className="space-y-2">
          <button className="h-[250px] w-full rounded bg-gray flex justify-center items-center text-primary"></button>
          <h3 className="font-medium text-[18px] text-center capitalize">
            {item}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Forms;
