import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Helmet from './Helmet'



export default function SocialMedia() {
  return (
    <Canvas>
         <ambientLight intensity={1}/>
         <directionalLight position={[3,2,1]}/>
         <Helmet/>
        
        <OrbitControls enableZoom={true}/>
    </Canvas>
  )
}
