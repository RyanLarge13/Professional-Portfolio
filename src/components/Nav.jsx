import { motion } from "framer-motion";
import { components } from "../styles/styles.js";
import { AiOutlineCloudDownload } from "react-icons/ai";
import navLinks from "../constants/navLinks";

const Nav = ({ open, setOpen }) => {
  return (
    <motion.nav
      initial={{ y: "125%" }}
      animate={
        open
          ? {
              y: 0,
            }
          : { y: "125%" }
      }
      className={`${components.nav}`}
    >
      <ul onClick={() => setOpen(false)} className="text-center">
        {navLinks.map((link, index) => (
          <li key={index} className="my-10">
            <a
              href={link.href}
              className="text-xl bold hover:text-red-400 duration-200"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
