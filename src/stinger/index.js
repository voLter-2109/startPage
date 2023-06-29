import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import git from "./assets/git.png";
import telegram from "./assets/tel.png";

const StingerModalWindow = () => {
  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef();

  const handleMouseMove = useCallback((e) => {
    Object.assign(
      document.documentElement,
      setCoord({
        x: (e.clientX - window.innerWidth / 2) * -0.005,
        y: (e.clientY - window.innerHeight / 2) * -0.01,
      })
    );
  });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <section className={style.wrapper} ref={ref}>
      <div
        className={style.container}
        style={{
          transform: `translateZ(50px) rotateX(${coord.y}deg) rotateY(${coord.x}deg)`,
        }}
      >
        <div className={style.container__title}>
          <h1>Rock & Web</h1>
          <span>Works? Do not touch.</span>
        </div>

        <div className={`${style.container__item_one} ${style.gate}`}></div>
        {Array(7)
          .fill()
          .map((e, i) => i + 1)
          .map((e, i) => {
            const item = i + 1;
            const width = 20;
            return (
              <div
                key={i}
                className={style.container__shadowGate}
                style={{ width: `${width + item * 10}vw` }}
              ></div>
            );
          })}

        <div className={`${style.container__item_two} ${style.gate}`}></div>
        <div className={style.container__item_three}></div>
        <div className={`${style.container__item_three} ${style.shadow}`}></div>

        <div className={`${style.contact} ${style.contacts_tel}`}>
          <Link to="https://github.com/voLter-2109">
            <img src={git} alt="github" />
          </Link>
        </div>
        <div className={`${style.contact} ${style.contacts_git}`}>
          <Link to="https://t.me/volter_2109">
            <img src={telegram} alt="telegram" />
          </Link>
        </div>
        <Link to="/" className={style.back}>
          Come back
        </Link>
      </div>
    </section>
  );
};

export default StingerModalWindow;
