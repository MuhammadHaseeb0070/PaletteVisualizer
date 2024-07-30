import React, { useEffect, useState } from 'react';
import './garage.css';
import Design from '../Webdesign/Design1/Design';
import Form from '../Webdesign/Design2/Form';
import ColorPicker from '../ColorPicker/ColorPicker';
import { FiEdit } from "react-icons/fi";
import { GoCopy } from "react-icons/go";
import rgbHex from "rgb-hex";
import { FaPalette } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

function Garage() {
  const [closeColorPicker, setCloseColorPicker] = useState(false);
  const [toolBoxOpen, settoolBoxopen] = useState(false);
  const [colorPickers, setColorPickers] = useState([false, false, false, false, false, false]);
  const [colors, setColors] = useState(['#66fcf1', '#0b0c10', '#45a29e', '#1f2833de', '#000000', '#c5c6c7']);

  useEffect(() => {
    if (closeColorPicker == true) {
      setColorPickers([false, false, false, false, false, false]);
      setCloseColorPicker(false);
    }
  }, [closeColorPicker]);

  const handleColorChange = (color, index) => {
    const newColors = [...colors];
    newColors[index] = `#${rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)}`;
    setColors(newColors);
  };

  const toggleColorPicker = (index) => {
    setColorPickers(prevColorPickers => {
      const newColorPickers = prevColorPickers.map((picker, i) =>
        i === index ? !picker : false
      );
      return newColorPickers;
    });
  };

  return (
    <div className="garage">

      <button className={`toolBoxButton ${toolBoxOpen == false ? 'outsideButton' : 'insideButton'}`} onClick={() => { settoolBoxopen(!toolBoxOpen) }}><IoIosArrowBack className={`${toolBoxOpen === true ? 'closeArrow' : 'openArrow'}`} /><FaPalette /></button>
      <div className={`toolBox ${toolBoxOpen === true ? 'activeToolBox' : ''}`}>

        <h4>Tool Box</h4>
        <div className="palette">
          <p>Select Colors for Palette</p>
          {colors.map((color, index) => (
            <div key={index} className="color-input-wrapper">
              <div
                className="colorShow"
                style={{ backgroundColor: color }}
              ></div>
              <input
                type="text"
                className="hexInput"
                value={color}
                onChange={(e) => handleColorChange({ hex: e.target.value }, index)}
                placeholder={`Color ${index + 1} Hex`}
              />

              <GoCopy className='copyButton' onClick={() => { navigator.clipboard.writeText(colors[index]) }} />
              <button className="color-picker-icon" onClick={() => toggleColorPicker(index)}>
                <FiEdit className='buttonImageColorPicker' />
              </button>
              {colorPickers[index] && (
                <ColorPicker
                  closeColorPicker={closeColorPicker}
                  setcloseColorPicker={setCloseColorPicker}
                  color={color}
                  onChange={(color) => handleColorChange(color, index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="Visualizer">
        <div className="visualizeHeader">
          <h3>Visualizer</h3>
          <ul>
            <li><button className="selectedButton">Web Design</button></li>
            <li><button>Mobile App</button></li>
            <li><button>Dashboards</button></li>
          </ul>
        </div>
        <div className="showCase">
          <div className="designSection landingPageDesign">
            <Design colors={colors} />
          </div>
          <div className="designSection formDesign">
            <Form colors={colors}></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garage;

// Helper function to convert hex to rgb
const hexToRgb = (hex) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b, a: 1 };
};
