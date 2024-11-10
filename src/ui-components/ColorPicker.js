// ColorPickerComponent.jsx
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Box, Button } from '@mui/material';

const ColorPicker = ({ color, onColorChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <Box height={200}>
      <Button variant="contained" onClick={() => setDisplayColorPicker(!displayColorPicker)}>
        Pick Color
      </Button>
      {displayColorPicker && (
        <Box mt={2}>
          <SketchPicker color={color} onChangeComplete={onColorChange} />
        </Box>
      )}
    </Box>
  );
};

export default ColorPicker;