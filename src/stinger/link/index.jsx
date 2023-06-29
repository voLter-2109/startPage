import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import foto from "../assets/mask.png";

const CustomLink = () => {
  return (
    <Link to="/sicret" className={style.customLink}>
      <img src={foto} alt="foto"/>
    </Link>
  );
};

export default CustomLink;
