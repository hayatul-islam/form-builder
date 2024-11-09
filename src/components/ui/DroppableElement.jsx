const DroppableElement = ({ className, children }) => {
  return (
    <div
      className={`${className} mb-2 h-[90px] w-full rounded-md border-2 border-dashed border-primary`}
    >
      {children}
    </div>
  );
};

export default DroppableElement;
