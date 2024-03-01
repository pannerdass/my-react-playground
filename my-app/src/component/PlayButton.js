import React from "react";
import memeData from "../utlis/memeData";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function PlayButton() {
  let url = "";
  function buttonClick(event) {
    //  console.log(event);
    console.log("hey event fired 🔥");

    // console.log(memeData.data.memes);
    const memes = memeData.data.memes;
    let number = randomNumber(0, memes.length);
    url = memes[number].url;
    console.log(`hoorey 🙌  ${memes[number].url}`);
  }

  return (
    <div>
      <p>{url}</p>
      <input type="button" value="click me" onClick={buttonClick} />
    </div>
  );
}

export default PlayButton;
