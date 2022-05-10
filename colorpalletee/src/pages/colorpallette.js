import React, { useState } from "react";
import "./color.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import RenderColor from "./rendercolor";
function Color() {
  const color = [
    "#EEF3D2",
    "#EC994B",
    "#97C4B8",
    "#5F7161",
    "#006E7F",
    "#FFC4DD",
    "#251D3A",
    "#A0BCC2",
    "#A85CF9",
    "#125B50",
  ];
  const [background, setbackground] = useState("#125B50");

  return (
    <div className="app" style={{ background: background }}>
      <div className="container">
        {color.map((color, index) => (
          <div className="card" key={index}>
            <div
              style={{
                background: color,
              }}
              className="box"
              onClick={() => setbackground(color)}
            ></div>
            {/* {color} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Color;
