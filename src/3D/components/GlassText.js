import { useRef, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";

import { Text3D, OrbitControls, useMatcapTexture, Float, Center } from "@react-three/drei";

function GlassText({ children, color, ...props }) {
  // const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const [matcapTexture] = useMatcapTexture(1);
  const ref = useRef();
  const { width: w, height: h } = useThree((state) => state.viewport);

  return <>
    <mesh>
      <Center scale={[0.9, 1, 1]}>
        <Float speed={1}>
          <Text3D
            position={[0, 0, -10]}
            scale={[-1, 1, 1]}
            ref={ref}
            size={w / 16}
            maxWidth={[-w / 5, -h * 2, 3]}
            font={"fonts/gt.json"}
            curveSegments={24}
            brevelSegments={1}
            bevelEnabled
            bevelSize={0.08}
            bevelThickness={0.03}
            height={1}
            lineHeight={0.9}
            letterSpacing={0.3}
          >
            {children}
            {/* <meshMatcapMaterial color={color} matcap={matcapTexture} /> */}
            <meshPhysicalMaterial
              color={color}
              roughness={0.1}
              metalness={0}
              transmission={0.99}
              thickness={0}
            />
          </Text3D>
        </Float>
      </Center>
    </mesh>
  </>
}

export default GlassText;