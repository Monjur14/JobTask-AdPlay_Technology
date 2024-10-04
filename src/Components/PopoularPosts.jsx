import AsideHeading from "./AsideHeading"
import PopularPost from "./PopularPost"

const PopoularPosts = () => {
  return (
    <div className="mt-14">
      <AsideHeading name={"Popular Post"} />
      <div className="mt-6 flex flex-col gap-5">
        <PopularPost imageSrc={"/src/assets/Images/popular-post-01.jpg"} heading={"Mastering Brushstrokes: Painting Techniques"} category={"Music"} date={"Feb 18"}/>
        <PopularPost imageSrc={"/src/assets/Images/popular-post-02.jpg"} heading={"Color Harmony: A Guide to Mastery"} category={"Game"} date={"Feb 16"}/>
        <PopularPost imageSrc={"/src/assets/Images/popular-post-03.jpg"} heading={"The Art of Texture: Depth with Brushwork"} category={"Celebrity "} date={"Feb 12"}/>
      </div>
    </div>
  )
}

export default PopoularPosts
