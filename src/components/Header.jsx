import { useState } from "react";
import logo from "../assets/logoWhite.png";
import { CgMenuRight } from "react-icons/cg";
import { components } from "../styles/styles.js";
import Nav from "./Nav";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Nav open={nav} setOpen={setNav} />
      <header className={`${components.header}`}>
        <img
          onClick={() => {
            setNav(false);
            window.scrollTo(0, 0);
          }}
          src={logo}
          alt="logo"
          className="w-[25px] h-[25px]"
        />
        <CgMenuRight
          onClick={() => setNav((prev) => !prev)}
          className="text-2xl cursor-pointer"
        />
      </header>
    </>
  );
};

export default Header;
