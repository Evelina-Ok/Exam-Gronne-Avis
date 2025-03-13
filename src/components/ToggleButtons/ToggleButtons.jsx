import { useState } from "react";
import style from "./ToggleButtons.module.scss"

export function ToggleButtons({ state, stateSetter }) {
  function toggleProfileState() {
    stateSetter((prevState) => !prevState);
  }
  return (
    <div className={style.togglebuttons}>
        <button
        onClick={() => stateSetter(true)}
        style={{
          backgroundColor: state ? "green" : "white",
          color: state ? "white" : "green",
        }}
      >
        Min Profil
      </button>
      <button
        onClick={() => stateSetter(false)}
        style={{
          backgroundColor: !state ? "green" : "white",
          color: !state ? "white" : "green",
        }}
      >
        Mine Annoncer
      </button>
      {/* <button
        onClick={toggleProfileState}
        style={{
          backgroundColor: state ? "green" : "white",
          color: state ? "white" : "green",
        }}
      >
        Min Profil
      </button>
      <button
        onClick={toggleProfileState}
        style={{
          backgroundColor: state ? "green" : "white",
          color: state ? "white" : "green",
        }}
      >
        Mine Annoncer
      </button> */}
    </div>
  );
}
