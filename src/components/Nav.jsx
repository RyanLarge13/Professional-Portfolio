import { useEffect } from "react";
import { motion } from "framer-motion";
import { components } from "../styles/styles.js";
import { AiOutlineCloudDownload } from "react-icons/ai";
import navLinks from "../constants/navLinks";

const Nav = ({ open, setOpen }) => {
  const scrollPadding = 100;
  const handleScroll = () => {
    const scrollPosition = window.scrollY - scrollPadding;
    let activeLink = null;
    navLinks.forEach((link, index) => {
      const section = document.querySelector(link.href);
      if (section) {
        const sectionTop = section.offsetTop - scrollPadding;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (
          scrollPosition >= sectionTop - 150 &&
          scrollPosition <= sectionBottom
        ) {
          activeLink = link.href;
        }
      }
    });
    navLinks.forEach((link) => {
      const linkElement = document.querySelector(`a[href="${link.href}"]`);
      if (link.href === activeLink) {
        linkElement.classList.add("active");
      } else {
        linkElement.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
