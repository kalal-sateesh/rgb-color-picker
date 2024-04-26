import { useState } from "react";
import "./App.css";
function App() {
  const [red, setRed] = useState(50);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(15);
  const [opacity, setOpacity] = useState(0.5);

  const handleInputR = (e) => {
    setRed(e.target.value);
  };

  const handleInputG = (e) => {
    setGreen(e.target.value);
  };

  const handleInputB = (e) => {
    setBlue(e.target.value);
  };

  const handleInputOpacity = (e) => {
    const opc = e.target.value / 100;
    setOpacity(opc);
  };

  return (
    <div className="container">
      <h1 style={{ marginTop: "20px" }}>rgb_colors</h1>
      <div
        style={{
          backgroundColor: `rgba(${red},${green},${blue},${opacity})`,
          width: "200px",
          height: "200px",
          borderRadius: "100px",
          marginTop: "20px",
        }}
      ></div>
      <br></br>
      <br></br>
      <input
        type="range"
        className="input"
        min="0"
        max="255"
        value={red}
        onChange={(e) => handleInputR(e)}
      />
      <br></br>
      <br></br>
      <input
        type="range"
        className="input"
        min="0"
        max="255"
        value={green}
        onChange={(e) => handleInputG(e)}
      />
      <br></br>
      <br></br>
      <input
        type="range"
        className="input"
        min="0"
        max="255"
        value={blue}
        onChange={(e) => handleInputB(e)}
      />
      <br></br>
      <br></br>
      <input
        type="range"
        className="input"
        min="0"
        max="100"
        onChange={(e) => handleInputOpacity(e)}
      />
      <br></br>
      <br></br>

      <h1>rgba - {`(${red},${green},${blue},${opacity})`}</h1>
    </div>
  );
}

export default App;
