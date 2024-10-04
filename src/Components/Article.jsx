import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import Comment from "./Comment";
import Ads from "./Ads";

const Article = () => {
  return (
    <div>
      <article>
        <h1 className=" text-[1.7rem] md:text-[2.2rem] leading-[2rem] mt-3 md:mt-0 md:leading-[2.9rem] font-semibold md:pr-10">
          Transform Your Space: Elevate Your Home Decor with the Perfect Paint
          Choices
        </h1>
        <img
          src="/article-hero.jpg"
          alt=""
          className="my-5 rounded-md"
        />
        <div className="text-gray-600">
          <p className="mt-8">
            Painting is not just about applying color to walls; it is a form of
            expression that transforms spaces and emotions. A well-chosen
            palette can create an inviting atmosphere, while careful layering
            techniques can enhance depth and texture. Whether you prefer bold
            hues that energize a room or soft tones that promote tranquility,
            understanding color theory is essential. Each brushstroke adds
            character, and each choice impacts the overall aesthetic. By
            mastering the art of painting, you can elevate your home decor and
            create a harmonious environment that reflects your personality.
          </p>

          <p className="mt-5">
            Painting is an art form that transcends mere decoration; it brings
            life and character to any space. Whether you’re opting for a bold
            accent wall or a subtle pastel palette, the right colors can set the
            mood and enhance your surroundings. Understanding how to balance
            colors and textures is crucial in achieving a harmonious look. As
            you embark on your painting journey, remember that each brushstroke
            contributes to the overall masterpiece. From selecting high-quality
            materials to mastering techniques, every detail matters. Embrace the
            process, and let your creativity flow as you transform your
            environment into a reflection of your unique style.
          </p>

          <p className="mt-5">
            Every painting project presents its own challenges. From preparing
            the surfaces to mastering the application of paint, the process
            requires patience and skill. However, the reward of stepping back to
            admire your work is unmatched. You’ll see how the colors breathe
            life into the space, inviting warmth and personality.
          </p>

          <p className="mt-5">
            Moreover, painting is an opportunity to personalize your
            environment. It reflects your taste and creativity, turning a simple
            room into a vibrant expression of who you are. With the right
            approach and mindset, the act of painting can be a fulfilling
            journey that not only enhances your living space but also enriches
            your soul.
          </p>

          <p className="mt-5">
            As you prepare your canvas, consider the environment and mood you
            wish to create. Vestibulum ornare gravida semper—the right color
            palette can establish an inviting atmosphere or convey a sense of
            tranquility. Experimenting with various techniques, such as blending
            and layering, can enhance the depth and richness of your work.
          </p>

          <Ads/>

          <p className="mt-5">
            Painting is one of the oldest and most profound forms of human
            expression, allowing us to communicate emotions, stories, and ideas
            without words. From ancient cave murals to contemporary digital art,
            painting has evolved across time and cultures, continuously shaping
            the world of art. Whether you’re a novice or a seasoned artist,
            painting offers an opportunity to explore creativity and bring your
            imagination to life on canvas. Let’s dive into the world of painting
            and explore its many facets, techniques, and the joy it brings.
          </p>

          <p className="mt-5">
            As a medium, painting offers endless possibilities—from watercolors
            that flow and blend into delicate washes to the bold textures of oil
            paints, each technique opens up a new avenue of exploration. Whether
            you're a beginner experimenting with your first canvas or a
            professional seeking to challenge your skill, painting is a
            universal language of creativity that invites anyone to discover
            their own artistic voice.
          </p>
        </div>
      </article>
      <div className="mt-10 flex items-center gap-2">
        <h3 className="text-lg font-semibold">Tags:</h3>
        <div className="flex gap-3">
          <p className="text-gray-500 font-semibold hover:text-green-500 hover:underline cursor-pointer">
            Streetstyle
          </p>
          <p className="text-gray-500 font-semibold hover:text-green-500 hover:underline cursor-pointer">
            Crafts
          </p>
        </div>
      </div>
      <div className="mt-2 pb-5 flex items-center gap-2">
        <h3 className="text-lg font-semibold">Share:</h3>
        <div className="flex gap-1 flex-wrap">
          <a
            href="#"
            className="bg-blue-900 text-white py-1 px-5 rounded flex items-center gap-2 hover:bg-green-500 duration-200 cursor-pointer"
          >
            <span>
              <FaFacebookF />
            </span>
            <p>Facebook</p>
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white py-1 px-5 rounded flex items-center gap-2 hover:bg-green-500 duration-200 cursor-pointer"
          >
            <span>
              <FaTwitter />
            </span>
            <p>Twitter</p>
          </a>
          <a
            href="#"
            className="bg-orange-700 text-white py-1 px-5 rounded flex items-center gap-2 hover:bg-green-500 duration-200 cursor-pointer"
          >
            <span>
              <GrGooglePlus />
            </span>
            <p>Google+</p>
          </a>
          <a
            href="#"
            className="bg-red-700 text-white py-1 px-5 rounded flex items-center gap-2 hover:bg-green-500 duration-200 cursor-pointer"
          >
            <span>
              <FaPinterestP />
            </span>
            <p>Pinterest</p>
          </a>
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default Article;
