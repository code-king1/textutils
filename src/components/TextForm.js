import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleClickLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  }

  const handleClear = () => {
    setText("");
    props.showAlert("Input has been cleared", "success");
  };

  return (
    <>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control ${props.mode === 'dark' ? 'dark' : ''}`}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
            value={text}
            onChange={handleText}
            style={{backgroundColor : props.mode==='dark'?'#051332  ':'white', color : props.mode==='dark'?'white':'black', '::placeholder': {color: props.mode === 'dark' ?'white' : 'black' } }}
          ></textarea>
          <button className="btn btn-primary my-2 mx-1" onClick={handleClickUp}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleClickLo}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleSpace}>
            Remove Extra Spaces
          </button>

          <button className="btn btn-danger my-2 mx-1" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Analysis</h2>
        <div className="mb-3">
          <p>
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <p>
            {Math.round((text.split(" ").length - 1) * 0.4)} seconds to read.
          </p>
          <h1>Preview</h1>
          <p>{text.length>0?text:"Enter your text above to get the preview"}</p>
        </div>
      </div>
    </>
  );
}
