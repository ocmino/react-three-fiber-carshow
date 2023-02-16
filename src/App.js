import './App.css';

import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Ground } from './Components/Ground';
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import HTML from './Components/HTML';

import { Porsche } from './Components/Porsche';
import { Porsche356 } from './Components/Porsche356';
import { Rings } from './Components/Rings';

import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";



function CarShow() {
  return (
   <>
      <color args={[0, 0, 0]} attach="background" />


      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

<color args={[0, 0, 0]} attach="background" />

<CubeCamera resolution={1024} frames={Infinity}>
  {(texture) => (
    <>
      <Environment map={texture} />
      <Porsche />
      <Porsche356 />
    </>
  )}
</CubeCamera>

    <spotLight
        color={0xffffff}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[10, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
       <spotLight
        c color={0xffffff}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[-10, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={0xffffff}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 10]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={0xffffff}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, -10]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
      <OrbitControls 
        maxPolarAngle={Math.PI / 2.4}
        minDistance={5}
        maxDistance={9}
        autoRotate={true}
      />
      <HTML />
      <Porsche/>
      <Porsche356/>
      <Rings/>

    


      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.2} // The bloom intensity.
          width={350} // render width
          height={350} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
        
      </EffectComposer>


    




      
      

      </>

  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;


