import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log('Upeer case was clicked');
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to UpperCase" , "success")
  };
  const handleLoClick = () => {
    //console.log('Upeer case was clicked');
    let newText = text.toLowerCase();
    settext(newText);
  };
  const handleclearClick = () => {
    //console.log('Clear Text');
    let newText = "";
    settext(newText);
  };
  const handlecopyClick = async () => {
    //console.log('Copied to Clipboard');
    await navigator.clipboard.writeText(text);
  };
  const handleOnchange = (event) => {
    //console.log('Upeer case was changed');
    settext(event.target.value);
  };
  const [text, settext] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className=" btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopyClick}>
          Copy to Clipboard
        </button>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your Text Summary</h2>
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} Characters
          </p>
          <p> {0.08 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p> {text.length > 0 ? text : "Enter something to Preview here"}</p>
        </div>
      </div>
    </>
  );
}
