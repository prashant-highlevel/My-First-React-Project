import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleReverseClick = () => {
    setText(text.split(" ").reverse().join(" "));
  };

  const handleOnChange = (Event) => {
    setText(Event.target.value);
  };

  const changeMode = () => {
    if (mode.backgroundColor === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode({
        backgroundColor: "darkgrey",
        color: "darkblue",
      });
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode({
        backgroundColor: "white",
        color: "black",
      });
    }
  };

  const [text, setText] = useState("");
  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter Your Text Here"
            value={text}
            onChange={handleOnChange}
            style={mode}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Reverse Sentence
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear All
        </button>
      </div>
      <div className="container my-3">
        <div className="form-check form-switch my-3 mx-1">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={changeMode}
          />
        </div>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
      </div>
    </>
  );
}
