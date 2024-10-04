const AsideHeading = ({name}) => {
  return (
    <div className="w-full py-3 border border-gray-300 text-xl font-semibold pl-5 relative">
      <h1>{name}</h1>
      <div className="absolute left-0 top-0 h-full w-1.5 bg-black"></div>
    </div>
  );
};

export default AsideHeading;
