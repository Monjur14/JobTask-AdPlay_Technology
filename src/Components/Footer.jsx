import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterPopularPost from "./FooterPopularPost";

const Footer = () => {
  return (
    <div className="w-full bg-[#222222] mt-36">
      <div className="contain flex py-16">
        <div className="w-full h-72">
            <img src="/src/assets/Images/logo-white.png" alt="Logo" className="w-32"/>
            <p className="mt-7 text-white/70 leading-tight max-w-72">Explore the art of creativity. From brush techniques to color harmony, unlock your potential with every stroke. Stay inspired with tips, tutorials, and expert advice—craft your masterpiece with us.</p>
            <div className="flex text-xl gap-2.5 mt-7 text-white/60">
                <a href="#" className="hover:scale-95"><span className="hover:text-green-500 duration-200  cursor-pointer"><FaFacebookF /></span></a>
                <a href="#" className="hover:scale-95 duration-200"><span className="hover:text-green-500 duration-200 cursor-pointer"><FaTwitter /></span></a>
                <a href="#" className="hover:scale-95 duration-200"><span className="hover:text-green-500 duration-200 cursor-pointer"><FaPinterestP /></span></a>
                <a href="#" className="hover:scale-95 duration-200"><span className="hover:text-green-500 duration-200 cursor-pointer"><FaVimeoV /></span></a>
                <a href="#" className="hover:scale-95 duration-200"><span className="hover:text-green-500 duration-200 cursor-pointer"><FaYoutube /></span></a>
            </div>
        </div>
        <div className="w-full ">
            <h1 className="text-2xl font-semibold text-white">Popular Post</h1>
            <div className="mt-6 flex flex-col gap-5">
            <FooterPopularPost imageSrc={"/src/assets/Images/popular-post-04.jpg"} heading={"Portrait Perfection: Tips for Painting Lifelike Faces"} category={"Music"} date={"Feb 17"}/>
            <FooterPopularPost imageSrc={"/src/assets/Images/popular-post-05.jpg"} heading={"Mastering Oil Painting: Blending Like a Pro"} category={"Music"} date={"Feb 16"}/>
            <FooterPopularPost imageSrc={"/src/assets/Images/popular-post-06.jpg"} heading={"Color Theory 101: How to Choose the Perfect Palette"} category={"Music"} date={"Feb 15"}/>
            </div>
        </div>
        <div className="w-full">
            <h1 className="text-2xl font-semibold text-white">Category</h1>
            <ul className="mt-6">
                <li className="text-white/75 font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-[#3d3d3d] pl-2">Fashion (22)</li>
                <li className="text-white/75 font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-[#3d3d3d] pl-2">Technology (29)</li>
                <li className="text-white/75 font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-[#3d3d3d] pl-2">Street Style (15)</li>
                <li className="text-white/75 font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-[#3d3d3d] pl-2">Life Style (28)</li>
                <li className="text-white/75 font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-[#3d3d3d] pl-2">DIY & Crafts (16)</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
