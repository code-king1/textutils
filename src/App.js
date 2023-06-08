import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051332";
      document.title = "Textutils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");

      // setInterval(() => {
      //   document.title = "Textutils is awesome"
      // }, 997);

      // setInterval(() => {
      //   document.title = "Install textutils now!";
      // }, 1453);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };
  

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>  
      {/* </Router> */}
    </>
  );
}

export default App;
