import { useState, useTransition, useMemo } from 'react'

import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls } from '@react-three/drei'

import { useControls } from 'leva';
// import { SketchPicker } from 'react-color';


import GlassBox from "./components/GlassBox";
import ColorPicker from '../ui-components/ColorPicker';

function Env() {
  const [preset, setPreset] = useState('sunset')
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition()
  // const { color, blur } = useControls({
  //   blur: { value: 0.65, min: 0, max: 1 },
  //   preset: {
  //     value: preset,
  //     options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
  //     // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
  //     // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
  //     // That way we can hang onto the current environment until the new one has finished loading ...
  //     onChange: (value) => startTransition(() => setPreset(value))
  //   }
  // })
  return <Environment preset={preset} background backgroundBlurriness={0} />
}

function BoxScene({ ...props }) {

  const [boxColor, setBoxColor] = useState('#ffffff');

  const handleColorChange = (newColor) => { setBoxColor(newColor.hex); };

  const bgList = ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'];

  return (
    <div className='BoxScene'>
      <ColorPicker color={boxColor} onColorChange={handleColorChange} />
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }} className='BoxSceneCanvas'>
        <GlassBox color={boxColor} />
        <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
          <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
        </AccumulativeShadows>
        <Env />
        <OrbitControls autoRotate autoRotateSpeed={0.45} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </div>
  )
}

export default BoxScene;