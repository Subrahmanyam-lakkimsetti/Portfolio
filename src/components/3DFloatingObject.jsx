import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const FloatingCube = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    >
      {/* Ambient light for visibility */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* 3D Floating Cube */}
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial color="#8e44ad" />
      </Box>

      {/* Add camera controls (for interactive movement) */}
      <OrbitControls />
    </Canvas>
  );
};

export default FloatingCube;
