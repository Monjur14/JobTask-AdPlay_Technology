const PopularPost = ({imageSrc, heading, category, date}) => {
  return (
    <div className="w-full h-20 flex gap-5">
      <img
        src={imageSrc}
        className="h-full"
        alt="Post-Header-Image"
      />
      <div className="flex flex-col justify-between py-1">
        <h1 className="leading-tight font-semibold hover:text-green-500 cursor-pointer duration-300">
          {heading}
        </h1>
        <div className="flex text-sm gap-2 text-gray-500">
          <p className="font-semibold hover:text-green-500 cursor-pointer duration-300">
            {category}
          </p>
          <p>-</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
