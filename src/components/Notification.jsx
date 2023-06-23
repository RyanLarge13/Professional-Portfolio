import { motion } from "framer-motion";

const Notification = ({ message, show, setShow }) => {
  return (
    <motion.div
    initial={{top: "-15%"}} 
      animate={
        show
          ? {
              top: "15%",
              transition: {
                duration: 1.5,
                type: "spring",
                stiffness: 200,
              },
            }
          : { top: "-15%" }
      }
      onClick={() => setShow(false)}
      className="fixed left-[50%] min-w-[50%] translate-x-[-50%] rounded-md shadow-md bg-gradient-to-tr from-violet-500 to-blue-500 p-2"
    >
      <div className="w-full h-full rounded-md shadow-sm bg-white p-3">
        <p className="text-center text-black font-semi-bold">{message}</p>
      </div>
    </motion.div>
  );
};

export default Notification;
