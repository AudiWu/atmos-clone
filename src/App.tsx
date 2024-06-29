import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }}>
        <Experience />
        <color attach="background" args={["#ececec"]} />
      </Canvas>
    </>
  );
}

export default App
