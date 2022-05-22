import React from 'react'
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
function AnimatedSphere() {
    return (
        <Sphere visible args={[1, 100, 100]} scale={2}>
            <MeshDistortMaterial color="#8352fd" attach="material" distort={0.5} speed={2} roughness={0} />
        </Sphere>
    )
}

export default AnimatedSphere