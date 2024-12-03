import { motion } from "framer-motion";
import { elements } from "../styles/styles.js";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import testimonials from "../constants/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-5 min-h-screen py-20">
      <p className="text-pink-500">Testimonials</p>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl"
      >
        What Do <strong className={`${elements.strongGradient}`}>People</strong>{" "}
        Say About <strong className={`${elements.strongGradient}`}>Me?</strong>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
        className="text-sm my-5 md:text-xl md:w-[50%]"
      >
        From coworkers to friendly & professional acquaintances, here is a
        glimps into what it is like to work with me
      </motion.p>
      <div className="md:grid md:grid-cols-2 md: gap-10">
        {testimonials.map((item, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            key={index}
            className="rounded-md bg-gradient-to-tr from-violet-500 to-blue-500 p-4 my-5 md:my-0"
          >
            <p className="text-sm text-gray-200">{item.name}</p>
            <p className="text-lg mt-1 mb-5 mr-5">{item.occupation}</p>
            <p className="text-xs leading-8 md:text-lg">
              <RiDoubleQuotesL className="text-4xl inline mr-2 text-pink-500" />
              {item.quote}
              <RiDoubleQuotesR className="text-4xl inline ml-2 text-pink-500" />
            </p>
            <p className="text-xs">{item.assosiation}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
