import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from './components/About';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
  }, 1500);

  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
        
      </Routes>
      </div>
    </BrowserRouter>
    
      </>
  );
}

export default App;
