import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center pt-14 pb-8">
        <img src="/src/assets/Images/logo-green.png" alt="" className="w-32 cursor-pointer" />
      </div>
      <nav className="w-full flex justify-center shadow-primary">
        <ul className="flex">
          <li className="flex items-center gap-1 text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Home</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">News</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
          <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Entertainment</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Business</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Travel</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Life Style</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li> 
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Video</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
          <li className="flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
            <a href="#">Features</a>
            <span className="text-xs">
              <FaAngleDown />
            </span>
            <div className="absolute w-full duration-300 origin-center bottom-hover h-[5px] bg-[#E6E6E6] bottom-0 left-0"></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
