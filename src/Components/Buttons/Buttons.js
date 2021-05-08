import React from "react";
import PropTypes from "prop-types";
import style from "./Buttons.module.css";

const Buttons = ({ isActive, handleStart, handleWait, handleReset }) => {
  return (
    <div className={style.container}>
      <button className={style.button} type="button" onClick={handleStart}>
        {isActive ? "Stop" : "Start"}
      </button>
      <button className={style.button} type="button" onClick={handleWait}>
        Wait
      </button>
      <button className={style.button} type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

Buttons.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleWait: PropTypes.func.isRequired,
};

export default Buttons;
