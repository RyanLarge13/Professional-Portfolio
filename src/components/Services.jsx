import services from "../constants/services";
import { motion } from "framer-motion";
import { AiTwotoneMail } from "react-icons/ai";
import { elements } from "../styles/styles.js";

const Services = () => {
  return (
    <section id="services" className="p-5">
      <p className="text-pink-500">Services</p>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl"
      >
        Be Sure To{" "}
        <strong className={`${elements.strongGradient}`}>Explore</strong> More
        Options With Me By{" "}
        <strong className={`${elements.strongGradient}`}>Connecting</strong>
        <a href="#contact">
          <AiTwotoneMail className="inline text-blue-500 ml-3" />
        </a>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
        className="text-sm my-5 md:text-xl md:w-[50%]"
      >
        Are you looking for a professional designer & software programmer with
        the capabilities of creating full fledged, full stack, fully responsive
        cross platform applications?? Here are the services I provide
      </motion.p>
      <div className="md:grid md:grid-cols-2 md:gap-x-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-5 bg-gray-700 rounded-md shadow-md my-3"
          >
            <img
              src={service.icon}
              alt="service"
              className="w-10 h-10
            10 mx-auto mb-2"
            />
            <p className="text-center">{service.title}</p>
          </motion.div>
        ))}
      </div>
      <a href="https://devcommerce.app/">
        <button className="p-3 mt-5 rounded-md bg-gradient-to-r from-blue-500 to-violet-500 text-center md:w-[50%] md:mx-auto hover:to-blue-500 from-violet-500">
          Build Your Tech Dream
        </button>
      </a>
    </section>
  );
};

export default Services;
