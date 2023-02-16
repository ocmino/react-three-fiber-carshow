import React, { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Tree(props) {
  const [model, setModel] = useState();
  const [scale, setScale] = useState(0);
  const [isGrowing, setIsGrowing] = useState(false);

  useEffect(() => {
    new GLTFLoader().load(
      process.env.PUBLIC_URL + "Models/tree/scene.gltf",
      setModel
    );
  }, []);

  const toggleScale = () => {
    setIsGrowing(!isGrowing);
  };

  useFrame(() => {
    if (isGrowing) {
      setScale((prevScale) => Math.min(prevScale + 0.1, 1));
    } else {
      setScale((prevScale) => Math.max(prevScale - 0.1, 0));
    }
  });

  return model ? (
    <group {...props} dispose={null} scale={[scale, scale, scale]}>
      <primitive object={model.scene} />
      <Html>
        <button
        style={{
            position: "absolute",
            bottom: -340,
            left: -700,
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
        onClick={toggleScale}>Toggle Tree</button>
      </Html>
    </group>
  ) : null;
}
