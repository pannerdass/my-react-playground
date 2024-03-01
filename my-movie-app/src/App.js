import logo from "./logo.svg";
import "./App.css";
import { Movie } from "./Movie";
import { Test } from "./Test";
import Example from "./Example";
import { useState } from "react";
import "./css/tailwind.css";

function App() {
  const [image, setImage] = useState("");
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div
      style={style}
      className="w-full min-h-screen text-black bg-orange-500 flex justify-center bg-cover bg-no-repeat"
    >
      {/* <Example /> */}

      <Movie setParentBackGround={setImage} />
    </div>
  );
}

export default App;
