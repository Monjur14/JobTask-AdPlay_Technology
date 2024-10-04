const FooterPopularPost = ({imageSrc, heading, date}) => {
  return (
    <div className="w-full h-16 flex gap-4 max-w-80">
      <img
        src={imageSrc}
        className="h-full rounded"
        alt="Post-Header-Image"
      />
      <div className="flex flex-col justify-between">
        <h1 className="leading-tight text-white/70 font-semibold hover:text-green-500 cursor-pointer duration-300">
          {heading}
        </h1>
        <div className="flex text-sm gap-2 text-gray-500">
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default FooterPopularPost
