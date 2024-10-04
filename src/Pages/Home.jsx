import Archive from "../Components/Archive";
import Article from "../Components/Article";
import Category from "../Components/Category";
import Footer from "../Components/Footer";
import FooterCredit from "../Components/FooterCredit";
import Navbar from "../Components/Navbar";
import PopoularPosts from "../Components/PopoularPosts";
import Tags from "../Components/Tags";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="contain flex pt-8 gap-7">
        <main className="w-full basis-12/12 lg:basis-8/12">
          <Article />
        </main>
        <aside className="w-full basis-4/12 px-5 hidden lg:block">
          <Category/>
          <Archive/>
          <PopoularPosts/>
          <Tags/>
        </aside>
      </div>
      <Footer/>
      <FooterCredit/>
    </div>
  );
};

export default Home;
