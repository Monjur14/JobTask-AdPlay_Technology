import { useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5";

const Ads = () => {
  const [isOpen, setIsopen] = useState(false)
  return (
    <div className="w-full my-10 relative pb-4 overflow-hidden" onClick={() => setIsopen(!isOpen)}>
      <img src="/ap-logo.png" alt="" className="w-16 mx-auto"/>
      <div className="w-full h-56 rounded overflow-hidden bg-red-500 bg-[url('/ap-banner.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center text-white leading-tight relative">
          <h3 className="text-sm md:text-base z-10">LAMINATION WALA EXTERIOR PAINT</h3>
          <h1 className="text-[2.3rem] md:text-[3.5rem] z-10">Apex Ultima Protek</h1>
          <div className="w-full h-full absolute  bg-black/30 top-0 left-0">

          </div>
      </div>
      <div className="flex">
        <div className="basis-1/3">
          <h1 className="text-[#675C30] text-sm md:text-lg pl-4 pt-4 leading-tight">Equipped with <span className="font-bold">Lamination</span> <span className="font-bold">Guard</span> and <span className="font-bold">Fibre</span> technology</h1>
        </div>
        <div className="basis-1/3 relative flex justify-center">
          <img src="/ap-product.png" alt="" className="w-28 mx-auto absolute -top-10 productAnimate"/>
        </div>
        <div className="basis-1/3">
          <h1 className=" text-sm md:text-[1.9rem] text-right leading-[1.5rem] md:leading-[2.4rem] text-[#675C30]  pt-3 font-semibold uppercase">Tap to protect your house</h1>
        </div>
      </div>

      
      <div className={`w-full h-full bg-red-500 absolute ${isOpen ? "top-[0%]" : "top-[105%]"} transition-all duration-500 z-20`}>
        <div className="flex justify-end absolute right-2 top-2 z-50">
          <span className="text-[2rem] rounded-full inline-block text-white cursor-pointer"><IoCloseCircleOutline /></span>
        </div>
        <div className="w-[50%] h-full bg-yellow-500 absolute left-0 top-0 bg-[url('/rainyday.jpg')] bg-no-repeat bg-cover flex flex-col justify-center items-end p-2">
          <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold text-white">HOW'S THE</h1>
          <span className="inline-block px-6 py-2 text-lg md:text-2xl bg-transparent text-white backdrop-blur-md rounded-md overflow-hidden">RAINY</span>
        </div>
        <div className="w-[50%] h-full bg-orange-500 absolute right-0 top-0 bg-[url('/sunnyday.jpg')] bg-no-repeat bg-cover flex flex-col justify-center items-start p-2">
          <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold text-white">WEATHER</h1>
          <span className="inline-block px-6 py-2 text-lg md:text-2xl bg-transparent text-white backdrop-blur-md rounded-md overflow-hidden">SUNNY</span>
        </div>
        <img src="/ap-full-logo.png" alt="" className="absolute w-44 h-10 top-3 left-3"/>
      </div>
    </div>
  )
}

export default Ads
