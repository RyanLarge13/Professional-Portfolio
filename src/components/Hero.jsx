import { motion } from "framer-motion";
import { animations } from "../styles/variants.js";
import { elements } from "../styles/styles.js";
import { BsFillArrowUpRightSquareFill, BsFillShareFill } from "react-icons/bs";
import Dev from "../assets/dev.jpg";
import socialLinks from "../constants/socialLinks.js";

const Hero = () => {
  const urlToShare = "https://www.ryanlarge.com";
  const encodedUrl = encodeURIComponent(urlToShare);
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <section className="px-5 pt-10 mt-20" id="home">
      <div className="w-full">
        <p className="text-pink-500 mb-2 text-sm">Hello, I'm Ryan</p>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          className="uppercase text-2xl mb-2 md:text-4xl md:w-[40%]"
        >
          Professional Fullstack Software{" "}
          <strong className={`${elements.strongGradient}`}>Developer</strong>
        </motion.h1>
        <div className="flex justify-start items-center p-5 pl-0">
          <a
            href="#contact"
            className="flex items-center justify-center hover:text-pink-500 duration-200"
          >
            <BsFillArrowUpRightSquareFill className="text-blue-500 text-3xl mr-3" />
            <p>Hire Me Now</p>
          </a>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <motion.div
            variants={animations.stagger}
            initial="hidden"
            animate="show"
            className="flex justify-start items-center text-xl text-blue-500 my-5"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  color: "#ec4899",
                }}
                variants={animations.socialIcons}
                className={`${elements.socialLink}`}
              >
                <a href={link.href} target="_blank" rel="noreferrer">
                  {<link.icon />}
                </a>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            variants={animations.socialIcons}
            className={`${elements.socialLink}`}
          >
            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillShareFill className="text-blue-500 hover:text-pink-500 duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.img
        loading="lazy"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src={Dev}
        alt="dev"
        className="rounded-md shadow-md my-20"
      />
    </section>
  );
};

export default Hero;
