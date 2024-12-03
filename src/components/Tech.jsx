import { useState } from "react";
import { motion } from "framer-motion";
import { elements } from "../styles/styles.js";
import { animations } from "../styles/variants.js";
import {
  coreLanguages,
  frameworks,
  librariesAndAuth,
  database,
  stylesAndMarkup,
  design,
  devTools,
  operatingSystems,
  hosting,
  buttons,
} from "../constants/techStack.js";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  const [stack, setStack] = useState(coreLanguages);

  return (
    <section id="tech" className="p-5 min-h-screen py-20 overflow-x-hidden">
      <p className="text-pink-500">Tech Stack</p>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl"
      >
        What Do I{" "}
        <strong className={`${elements.strongGradient}`}>Know?</strong>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
        className="text-sm my-5 md:text-xl md:w-[50%]"
      >
        From the world of Mobile Application to the world of Website Development
        & back again to the world of Desktop Applications you will find here the
        veriety and diversity in programming languages I understand
      </motion.p>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => {
              setStack(null);
              setTimeout(() => {
                setStack(btn.stack);
              }, 10);
            }}
            className={`py-3 rounded-md shadow-md bg-gradient-to-r ${
              btn.stack === stack
                ? "from-red-400 to-pink-500"
                : "from-indigo-400 to-blue-500 hover:from-blue-500 hover:to-indigo-400"
            }`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="p-5 flex flex-wrap justify-center items-center mt-20 min-h-[500px] rounded-md">
        {stack &&
          stack.map((tech, index) => (
            <Tilt key={index} className="text-center">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                className="m-5 mx-10 flex flex-col justify-center items-center rounded-full bg-white text-black p-2 shadow-md"
              >
                <img
                  src={tech?.icon}
                  alt={tech?.name}
                  className="w-10 h-10 rounded-full"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs"
              >
                {tech.name}
              </motion.p>
            </Tilt>
          ))}
      </div>
    </section>
  );
};

export default Tech;
