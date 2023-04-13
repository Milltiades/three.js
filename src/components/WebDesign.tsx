import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Chair from './Chair'


export default function WebDesign() {
  return (
    <Canvas>
         <ambientLight intensity={1}/>
         <directionalLight position={[3,2,1]}/>
         <Chair/>
        
        <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}
