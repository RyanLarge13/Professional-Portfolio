import { motion } from "framer-motion";

const Notification = ({ message, show, setShow }) => {
  return (
    <motion.div
      initial={{ left: 0, opacity: 0 }}
      animate={
        show
          ? {
              left: "5%",
              opacity: 1,
            }
          : { left: 0, opacity: 0 }
      }
      onClick={() => setShow(false)}
      className="fixed top-[10%] z-[999] rounded-md shadow-md bg-gradient-to-tr from-violet-500 to-blue-500 p-2"
    >
      <div className="w-full h-full rounded-md shadow-sm bg-white p-3">
        <h2 className="font-bold text-lg text-black mb-1">Invalid Form</h2>
        <p className="text-black font-semi-bold">{message}</p>
      </div>
    </motion.div>
  );
};

export default Notification;
