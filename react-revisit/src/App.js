import logo from "./logo.svg";
import "./App.css";
import { Play } from "./Play";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
        <Play
          data="first-data"
          arr={[1, 2, 3, 4]}
          handleChange={handleChange}
        />
      </header>
    </div>
  );
}

export default App;
