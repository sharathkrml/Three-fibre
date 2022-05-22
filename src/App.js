import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Components/Box";
import Iphone from './Components/Iphone'
import AnimatedSphere from "./Components/AnimatedSphere";
import React, { Suspense } from "react";
function App() {
  return (
    <div className="App">
      <Canvas className="Canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas className="Canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense> 
      </Canvas>
      <Canvas className="Canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
