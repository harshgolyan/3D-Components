import { useSpring, animated } from "@react-spring/three"
import { MeshDistortMaterial } from "@react-three/drei"
import { useState } from "react"

const BlobFirst = animated(MeshDistortMaterial)

const Blob  = () => {
    const [clicked, setClicked] = useState(false)

  const springs = useSpring({
    color: clicked ? '#569AFF' : '#FF65F4',
  })

  const handleClick = () => setClicked(s => !s)

  return (
    <mesh onClick={handleClick}>
      <sphereGeometry args={[1.5, 64, 50]} />
      <BlobFirst
        speed={5}
        distort={0.8}
        color={springs.color}
      />
    </mesh>
  )
}

export default Blob