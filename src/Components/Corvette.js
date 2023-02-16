import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Corvette(props) {
  const [model, setModel] = useState();
  const [scale, setScale] = useState(0);
  const [isGrowing, setIsGrowing] = useState(false);

  useEffect(() => {
    new GLTFLoader().load(
      process.env.PUBLIC_URL + "Models/chevrolet_corvette_c7/scene.gltf",
      setModel
    );
  }, []);
  
  

  const toggleScale = () => {
    setIsGrowing(!isGrowing);
  };

  useFrame(() => {
    if (isGrowing) {
      setScale((prevScale) => Math.min(prevScale + 0.001, 0.008));
    } else {
      setScale((prevScale) => Math.max(prevScale - 0.001, 0));
    }
  });


  

  return model ? (
    <group {...props} scale={[scale, scale, scale]}>
      <primitive object={model.scene} />
      <Html>
        <button
        style={{
            position: "absolute",
            bottom: -340,
            left: -580,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 40,
            fontSize: 15,
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        onClick={toggleScale}>Toggle Corvette</button>
      </Html>
    </group>
  ) : null;
}
