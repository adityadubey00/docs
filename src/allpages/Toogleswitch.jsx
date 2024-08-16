import React from "react";
import '../allpages/css/switch.css'
import m from'../assets/man .png';
import f from'../assets/woman.png';  

const ToggleSwitch = () => {
  return (
    <>
    <input type="checkbox" name="check-toggle" id="checkbox" hidden />
    <label htmlFor="checkbox" className="toggle">
      <img  src={m} height={35} alt="" />
      <div className="toggle__switch">
        <div className="toggle__circle"></div>
      </div>
      <img src={f} height={35} alt="" />
    </label>
  </>
  );
};

export default ToggleSwitch;
