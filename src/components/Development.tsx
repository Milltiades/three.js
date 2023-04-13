import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import SceneCar from './SceneCar'



export default function Development() {
  return (
    <Canvas>
    <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>
   <SceneCar/>
   
   <OrbitControls enableZoom={true}/>
</Canvas>
  )
}
