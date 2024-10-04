import AsideHeading from "./AsideHeading"
const Category = () => {
  return (
    <div>
        <AsideHeading name={"Category"} />
        <ul className="mt-6">
            <li className="font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-t border-gray-300 pl-2">Fashion</li>
            <li className="font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-gray-300 pl-2">Beauty</li>
            <li className="font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-gray-300 pl-2">Street Style</li>
            <li className="font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-gray-300 pl-2">Life Style</li>
            <li className="font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b border-gray-300 pl-2">DIY & Crafts</li>
        </ul>
    </div>
  )
}

export default Category
