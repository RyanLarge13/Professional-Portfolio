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
  buttons,
} from "../constants/techStack.js";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  const [stack, setStack] = useState(coreLanguages);

  return (
    <section id="tech" className="p-5">
      <p className="text-pink-500">Tech Stack</p>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl"
      >
        What Do I{" "}
        <strong className={`${elements.strongGradient}`}>
          Know?
        </strong>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
        className="text-sm my-5"
      >
        From the world of Mobile Application to the world of Website Development
        & back again to the world of Desktop Applications you will find here the
        veriety and diversity in programming languages I understand
      </motion.p>
      <div className="mt-5 grid grid-cols-2 justify-center items-center gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => {
              setStack(null);
              setTimeout(() => {
                setStack(btn.stack);
              }, 10);
            }}
            className={`px-5 py-2 m-2 rounded-md shadow-md bg-gradient-to-r h-full ${
              btn.stack === stack
                ? "from-red-400 to-pink-500"
                : "from-indigo-400 to-blue-500"
            }`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-start my-5 min-h-[300px] bg-gray-700 rounded-md">
        {stack &&
          stack.map((tech, index) => (
            <Tilt>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                key={index}
                className="m-5 flex flex-col justify-center items-center  rounded-full bg-white text-black p-2 shadow-md"
              >
                <img
                  src={tech?.icon}
                  alt={tech?.name}
                  className="w-10 h-10 rounded-full"
                />
              </motion.div>
            </Tilt>
          ))}
      </div>
    </section>
  );
};

export default Tech;
