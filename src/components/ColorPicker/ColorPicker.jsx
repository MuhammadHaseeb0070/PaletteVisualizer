import React from 'react';
import { ChromePicker } from 'react-color';
import './colorpicker.css';
import { IoCloseOutline } from "react-icons/io5";

const ColorPicker = ({ color, onChange, closeColorPicker,setcloseColorPicker }) => {
  return (
    <div className="color-picker-popup">
      <IoCloseOutline onClick={()=>{setcloseColorPicker(!closeColorPicker)}} className='colorPickerCloseButton' />
      <ChromePicker color={color} onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
