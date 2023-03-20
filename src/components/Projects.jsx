import projects from "../constants/caseStudies";
import { motion } from "framer-motion";
import { elements } from "../styles/styles.js";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { FaCodeBranch } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <section className="p-5 mt-10" id="projects">
      <div className="mb-5">
        <p className="text-sm mb-2 text-pink-500">Case Studies</p>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl"
        >
          Check Out These Amazing{" "}
          <strong className={`${elements.strongGradient}`}>Projects!</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
          className="text-sm mt-3 md:text-xl md:w-[50%]"
        >
          From mobile apps to websites & using technologies such as React,
          Sanity, MongoDB, React Native, Vanilla JS and more! I have built a
          variety of amazing content and useful apps to share with the world
          something new, fun & beneficial
        </motion.p>
      </div>
      <div className="overflow-hidden md:grid md:grid-cols-2 md:gap-20 md:p-10">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            className="w-full flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.75 }}
              whileInView={{
                scale: 1,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="p-5 my-5 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-md relative"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                <BsBoxArrowInUpRight className="absolute top-2 right-2 text-xl" />
              </motion.a>
              <p className="text-2xl my-3">{project.title}</p>
              <img
                src={project.img}
                alt="project"
                className="w-full rounded-md shadow-lg h-[200px] object-cover object-center"
              />
              <div className="flex justify-start items-center py-2 my-5 w-full text-2xl">
                <a href={project.code} className="mr-5">
                  <BiCodeAlt />
                </a>
                <a href={project.forkCode}>
                  <FaCodeBranch />
                </a>
              </div>
              <div>
                <p className="text-xs">{project.excerpt}</p>
              </div>
              <div className="flex flex-wrap p-2 my-3 bg-gray-700 rounded-md">
                {project.technologies.map((tech, index) => (
                  <p key={index} className={`${tech?.color} text-xs mx-2`}>
                    {tech?.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};
export default Projects;
