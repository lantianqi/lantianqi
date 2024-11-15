import { useState, useTransition, useMemo } from 'react'

import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls } from '@react-three/drei'

import GlassText from './components/GlassText';
import { OutlinedInput, Input, Select, MenuItem, Slider } from '@mui/material';


// function Env() {
//   // You can use the "inTransition" boolean to react to the loading in-between state,
//   // For instance by showing a message
//   const [inTransition, startTransition] = useTransition()

//   return <Environment preset={envPreset} background backgroundBlurriness={0} />
// }

function TextScene({ ...props }) {
  const [envPreset, setEnvPreset] = useState('sunset');
  const [boxColor, setBoxColor] = useState('#227142');
  const [envBlur, setEnvBlur] = useState(0);

  const handleColorChange = (event) => {
    setBoxColor(event.target.value);
  };

  const handlePresetChange = (event) => {
    setEnvPreset(event.target.value);
  };

  const handleBlurChange = (event) => {
    setEnvBlur(event.target.value);
  }

  const optionsList = [
    { id: 0, value: 'sunset' },
    { id: 1, value: 'dawn' },
    { id: 2, value: 'night' },
    { id: 3, value: 'warehouse' },
    { id: 4, value: 'forest' },
    { id: 5, value: 'apartment' },
    { id: 6, value: 'studio' },
    { id: 7, value: 'city' },
    { id: 8, value: 'park' },
    { id: 9, value: 'lobby' }
  ];

  return (
    <div className='BoxScene'>
      <div className='ColorInputContainer'>
        {/* <MuiColorInput
          value={boxColor}
          format={'hex'}
          onChange={handleColorChange}
          adornmentPosition='start'
          disablePopover={false}
          isAlphaHidden={true}
          disableGutters
        /> */}
        <Input id='ColorInput'
          type='color'
          value={boxColor}
          format={'hex'}
          onChange={handleColorChange}

        />
      </div>
      <div className='BlurInput'>
        <Slider
          value={envBlur}
          onChange={handleBlurChange}
          min={0}
          max={1}
          step={0.001}
        />
      </div>
      <div className='PresetInput'>
        <Select
          type='select'
          labelId="demo-simple-select-standard-label"
          id="demo-select"
          value={envPreset}
          onChange={handlePresetChange}
          label="Select an Option"
          input={<OutlinedInput label="Select an Option" />}
        >
          {optionsList.length > 0 ? (
            optionsList.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No options available</MenuItem>
          )}
        </Select>
      </div>

      <div className='SceneCanvas'>
        <Canvas camera={{ position: [0, 0, -10], fov: 60 }}>
          {/* <OrbitControls autoRotate autoRotateSpeed={0.45} enablePan={true} enableZoom={true} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} /> */}
          <OrbitControls
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={-0.1}
            enablePan={true}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            zoomSpeed={0.15}
            dampingFactor={0.05}
          />
          <GlassText color={boxColor} children={"Tianqi Lan"} />
          <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
            <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
          </AccumulativeShadows>
          <Environment preset={envPreset} background backgroundBlurriness={envBlur} />
        </Canvas>
      </div>
    </div>
  )
}

export default TextScene;