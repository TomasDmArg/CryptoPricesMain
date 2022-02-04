import React from "react";
import { navbarContext } from "../../context/index";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
const Hamburger = () => {
  const { responsive, setResponsive } = React.useContext(navbarContext);
  return responsive ? (
    <IoCloseOutline onClick={() => setResponsive(false)} />
  ) : (
    <IoMenuOutline onClick={() => setResponsive(true)} />
  );
};
export default Hamburger;
