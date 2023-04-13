import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Lada from './Lada'


export default function WebDesign() {
  return (
    <Canvas>
         <ambientLight intensity={1}/>
         <directionalLight position={[3,2,1]}/>
         <Lada/>
        
        <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}
