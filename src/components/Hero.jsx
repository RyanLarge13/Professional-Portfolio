import { motion } from "framer-motion";
import { animations } from "../styles/variants.js";
import { elements } from "../styles/styles.js";
import { BsFillArrowUpRightSquareFill, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import Dev from "../assets/dev.jpg";

const Hero = () => {
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
          Professional Fullstack Website & Mobile Application{" "}
          <strong className={`${elements.strongGradient}`}>Developer</strong>
        </motion.h1>
        <div className="flex justify-start items-center p-5 pl-0">
          <a href="#contact" className="flex items-center justify-center">
            <BsFillArrowUpRightSquareFill className="text-blue-500 text-3xl mr-3" />
            <p>Hire Me Now</p>
          </a>
        </div>
        <hr />
        <motion.div
          variants={animations.stagger}
          initial="hidden"
          animate="show"
          className="flex justify-start items-center text-xl text-blue-500 my-5"
        >
          <motion.div
            variants={animations.socialIcons}
            className={`${elements.socialLink}`}
          >
            <a
              href="https://m.facebook.com/ryan.large.984?eav=AfZGHI_LbLygPGY_uKdIQsmUnKdo38V1UhHHCcvj1yA71B2ryRPAIX6E03_ikKG0lbU&paipv=0"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </motion.div>
          <motion.div
            variants={animations.socialIcons}
            className={`${elements.socialLink}`}
          >
            <a
              href="https://twitter.com/ryan_large13"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </motion.div>
          <motion.div
            variants={animations.socialIcons}
            className={`${elements.socialLink}`}
          >
            <a
              href="https://github.com/RyanLarge13/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        src={Dev}
        alt="dev"
        className="rounded-md shadow-md my-20"
      />
    </section>
  );
};

export default Hero;
