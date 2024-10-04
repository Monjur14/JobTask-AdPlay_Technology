import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileNav, setMobileNav] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const clientWidthNow = window.innerWidth
    console.log(clientWidthNow);

    if(clientWidthNow < 500){
      setNavbarVisible(false)
      return
    }

    if (currentScrollY < 120) {
      setNavbarVisible(false);
      return;
    }

    if (currentScrollY > lastScrollY) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(lastScrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div className="">
        <div
          className={`w-full bg-white shadow-primary fixed top-0 z-50 ${
            navbarVisible ? "visible" : "hidden"
          } flex justify-center`}
        >
          <div className="contain ">
            <nav className="w-full flex justify-center items-center">
              <ul className="flex">
                <li className="flex items-center justify-center pr-4">
                  <img
                    src="/src/assets/Images/logo-green.png"
                    alt=""
                    className="w-24"
                  />
                </li>
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
                <li className="hidden lg:flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
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
                <li className="hidden lg:flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
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
        </div>
      </div>



      <div className="contain py-4 flex justify-between items-center md:hidden">
        <img src="/src/assets/Images/logo-green.png" alt="" className="w-28 py-4"/>
        <span className="text-2xl cursor-pointer z-40" onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <IoMdClose /> : <RxHamburgerMenu />}</span>
        <div className={`w-full h-screen absolute top-0 bg-white ${mobileNav ? "-right-0" : "right-full"} transition-all duration-300` }>
            <div className="flex justify-center items-center h-full">
              <ul className="text-center text-2xl font-bold space-y-4">
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Home</a>
              </li>
              <li className="f hover:text-green-500 duration-300">
                <a href="#">News</a>
                
              </li>
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Entertainment</a>
                
              </li>
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Business</a>
                
              </li>
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Travel</a>
                
              </li>
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Life Style</a>
                
              </li>
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Video</a>
                
              </li>
              <li className=" hover:text-green-500 duration-300">
                <a href="#">Features</a>
                
              </li>
              </ul>
            </div>
        </div>
      </div>



      <div className={`w-full bg-white z-50 transition-transform duration-300 hidden md:block`}>
        <div className="flex justify-center items-center pt-14 pb-8">
          <img
            src="/src/assets/Images/logo-green.png"
            alt=""
            className="w-32 cursor-pointer"
          />
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
            <li className="hidden lg:flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
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
            <li className="hidden lg:flex items-center gap-1 parent-list text-lg font-semibold px-4 py-4 hover:text-green-500 duration-300 relative">
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
    </div>
  );
};

export default Navbar;
