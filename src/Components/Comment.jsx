
const Comment = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mt-10">Leave a Comment</h1>
      <h3 className="text-gray-500 text-sm mt-2 mb-6">Your email address will not be published. Required fields are marked *</h3>
      <textarea name="" id="" className="h-36 w-full border border-gray-300 rounded resize-none p-4 outline-none" placeholder="Comment..."></textarea>
      <input type="text" className="border border-gray-300 p-3 w-72 rounded block  outline-none"  placeholder="Name*"/>
      <input type="email" className="border border-gray-300 p-3 w-72 rounded block mt-2 outline-none"  placeholder="Email*"/>
      <input type="text" className="border border-gray-300 p-3 w-72 rounded mt-2 block outline-none"  placeholder="Website"/>
      <button className="bg-black text-white px-10 py-2 rounded font-semibold mt-5">Post Comment</button>
    </div>
  )
}

export default Comment
