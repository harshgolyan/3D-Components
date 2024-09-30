import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Blob from "./components/Blob";



const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.9} />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        <Blob />
    </Canvas>
  )

}

export default App;