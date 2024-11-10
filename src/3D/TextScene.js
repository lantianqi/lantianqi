import { useState, useTransition, useMemo } from 'react'

import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls } from '@react-three/drei'

// import { SketchPicker } from 'react-color';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


import GlassBox from "./components/GlassBox";
import ColorPicker from '../ui-components/ColorPicker';
import GlassText from './components/GlassText';
import { MuiColorInput } from 'mui-color-input';
import { Pages } from '@mui/icons-material';
import { Paper } from '@mui/material';

// function Env() {
//   // You can use the "inTransition" boolean to react to the loading in-between state,
//   // For instance by showing a message
//   const [inTransition, startTransition] = useTransition()

//   return <Environment preset={envPreset} background backgroundBlurriness={0} />
// }

function TextScene({ ...props }) {
  const [envPreset, setEnvPreset] = useState('sunset');
  const [boxColor, setBoxColor] = useState('#227142');

  const handleChange = (color) => {
    setBoxColor(color);
  };

  const bgList = ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'];

  return (
    <div className='BoxScene'>
      <div className='ColorInput'>
        <MuiColorInput
          value={boxColor}
          format={'hex'}
          onChange={handleChange}
          adornmentPosition='start'
          disablePopover={false}
          isAlphaHidden={true}
        />
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
          <Environment preset={envPreset} background backgroundBlurriness={0} />
        </Canvas>
      </div>
    </div>
  )
}

export default TextScene;