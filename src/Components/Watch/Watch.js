import React from "react";
import PropTypes from "prop-types";
import style from "./Watch.module.css";

const Watch = ({ time }) => {
  return (
    <div className={style.container}>
      <span className={style.text}>
        {("0" + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}
      </span>
      <span className={style.dots}>:</span>

      <span className={style.text}>
        {("0" + Math.floor(time / 6000)).slice(-2)}
      </span>
      <span className={style.dots}>:</span>
      <span className={style.text}>
        {("0" + Math.floor((time / 100) % 60)).slice(-2)}
      </span>
    </div>
  );
};

Watch.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Watch;
