// ColorPickerComponent.jsx
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { MuiColorInput } from "mui-color-input";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography
} from "@mui/material";
import { Box, Button } from '@mui/material';

const ColorPicker = () => {

  const [color, setColor] = useState("#000000");

  const handleChange = (color) => {
    setColor(color);
  };

  return (
    <MuiColorInput value={color} onChange={handleChange} />
  );
};

export default ColorPicker;