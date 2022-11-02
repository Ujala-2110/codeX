import "./App.scss";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import Header from "./header/Header";
import Functions from "./functions/Functions";
import Options from "./options/Options";
import { useState } from "react";

function App() {

  const [code,setCode] = useState("int a = 0");

  const handleSubmit = () =>{
    console.log(code);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrap">
          <Functions />
          <textarea
            name="quest"
            cols="100"
            rows="10"
            className="left-half"
          ></textarea>
        </div>
        <div className="right-half">
          <Options />
          <CodeMirror
            className="ide"
            value={code}
            height="78vh"
            width="100%"
            theme={dracula}
            keymap = "sublime"
            mode="python"
            onChange={(value) => setCode(value)}
          />
          <div className="btn">
            <button id="item0">Custom Input</button>
            <button id="item1">Run Code</button>
            <button id="item2" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
