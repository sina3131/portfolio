import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./space/scene.gltf");
  const groupRef = useRef();


  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <>
      <hemisphereLight intensity={0.6} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={10}
      />
      <pointLight intensity={1} />
      
      <group ref={groupRef} position={[0, -1.5, 0]}>
  <primitive
    object={computer.scene}
    scale={isMobile ? 1.4 : 1.5}  // Smaller scale to fit better
    position={[-3, -2, -1]}        // Center the model
    rotation={[-0, 5, 1]} // Initial rotation is fine
  />
</group>

    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  


  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      key={Date.now()}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
