import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { elements } from "../styles/styles.js";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Notification from "./Notification.jsx";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return stopMessage();
    }
    setShow(true);
    setAlertMessage("Sending. . .");
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
          setAlertMessage(
            `Thank you for gettting in touch ${name}! I will get back with you shortly.`
          );
          setTimeout(() => {
            setShow(false);
            setAlertMessage("");
          }, 3000);
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  const stopMessage = () => {
    setAlertMessage("Please fill out all form data");
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setAlertMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className="p-5 min-h-screen py-20">
      <Notification message={alertMessage} show={show} setShow={setShow} />
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
        className="text-sm my-5 md:text-xl md:w-[50%]"
      >
        By filling out the form below, I will immediately receive your message
        and promptly reply weather we are starting a new service or you are
        casually exploring your options as to hire a new versatile Software
        Engineer for your next project
      </motion.p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-start justify-center p-3 my-10 rounded-md bg-gradient-to-tr from-violet-500 to-blue-500 max-w-[800px]"
      >
        <label className="hidden">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="user_name"
          placeholder="Name"
          className={`${elements.input}`}
        />
        <label className="hidden">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="user_email"
          placeholder="Email"
          className={`${elements.input}`}
        />
        <label className="hidden">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          placeholder="Message"
          className={`${elements.input} text-black min-h-[200px] text-xs`}
        />
        <button
          type="submit"
          value="Send"
          className="px-4 py-2 rounded-md bg-slate-900 w-full mt-5 hover:text-pink-500 duration-200 hover:outline hover:outline-pink-500"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
