import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import SceneCar from './SceneCar'
import Home from './Home'



export default function ProductDesign() {
  return (
    <Canvas>
    <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>
   <Home/>
   
   <OrbitControls enableZoom={true}/>
</Canvas>
  )
}
