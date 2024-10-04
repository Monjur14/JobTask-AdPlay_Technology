import AsideHeading from "./AsideHeading"

const tags = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts", "Magazine", "News", "Blogs"]

const Tags = () => {
  return (
    <div className="mt-14">
      <AsideHeading name={"Tags"} />
      <div className="mt-6 flex flex-wrap gap-2">
        {
            tags.map((item) => (
                <span key={item.index} className="inline-block px-5 py-1.5 border border-gray-300 rounded-3xl text-gray-500 cursor-pointer hover:text-green-500 duration-200 hover:border-green-500">{item}</span>
            ))
        }
      </div>
    </div>
  )
}

export default Tags
