import Properties from "./Properties";

const RightSidebar = () => {
  return (
    <div className="bg-gray max-w-[300px] w-full rounded-lg space-y-4 p-4">
      <div className="flex justify-center">
        <h2 className="font-bold text-[18px]">Settings</h2>
      </div>
      <Properties />
    </div>
  );
};

export default RightSidebar;
