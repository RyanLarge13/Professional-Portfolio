import { useRef } from "react";
import { motion } from "framer-motion";
import { elements } from "../styles/styles.js";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1et9c8o",
        "template_mccgq6m",
        form.current,
        "3V_K7oCl7I8I848fv"
      )
      .then(
        (res) => {
          form.current.reset();
          alert("Thank you! I will get in touch shortly");
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  return (
    <section id="contact" className="p-5">
      <p className="text-pink-500">Connect</p>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl"
      >
        <strong className={`${elements.strongGradient}`}>Let's Talk,</strong>{" "}
        Connect & Make Something{" "}
        <strong className={`${elements.strongGradient}`}>Great!!</strong>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
        className="text-sm my-5"
      >
        By filling out the form below, I will immediately receive your message
        and promptly reply weather we are starting a new service or you are
        casually exploring your options as to hire a new versatile Software
        Engineer for your next project
      </motion.p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-start justify-center p-3 my-10 rounded-md bg-gradient-to-tr from-violet-500 to-blue-500"
      >
        <label className="hidden">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className={`${elements.input}`}
        />
        <label className="hidden">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className={`${elements.input}`}
        />
        <label className="hidden">Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className={`${elements.input} text-black min-h-[200px] text-xs`}
        />
        <motion.input
          whileTap={{ scale: 0.4 }}
          type="submit"
          value="Send"
          className="px-4 py-2 rounded-md bg-gradient-to-tr from-red-500 to-red-400 my-3"
        />
      </form>
      <div onClick={() => window.scrollTo(0, 0)} className="mx-auto w-min my-5">
        <BsFillArrowUpSquareFill className="text-blue-500 text-4xl" />
      </div>
    </section>
  );
};

export default Contact;
