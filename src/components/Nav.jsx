import { motion } from "framer-motion";
import { components } from "../styles/styles.js";
import { AiOutlineCloudDownload } from "react-icons/ai";
import navLinks from "../constants/navLinks";

const Nav = ({ open, setOpen }) => {
  return (
    <motion.nav
      initial={{ y: 1000 }}
      animate={
        open
          ? {
              y: 0,
            }
          : { y: 1000 }
      }
      className={`${components.nav}`}
    >
      <ul onClick={() => setOpen(false)} className="text-center">
        {navLinks.map((link, index) => (
          <li key={index} className="my-10">
            <a href={link.href} className="text-xl bold">{link.title}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
