import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";

function Box(props) {
  const ref = useRef();

  const [clicked, setClicked] = useState(false);
  const [hoverd, setHoverd] = useState(false);

  useFrame(() => (ref.current.rotation.x += 0.01));

  const { scale } = useSpring({
    scale: clicked ? 2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      {...props}
      ref={ref}
      // scale={clicked ? 2 : 1}
      scale={scale}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHoverd(true)}
      onPointerOut={() => setHoverd(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hoverd ? "hotpink" : "orange"} />
    </animated.mesh>
  );
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          {/* <mesh position={[-10, -2, 1]}> */}
          {/* <boxGeometry args={[2, 2, 2]} /> */}
          <Box position={[-1.6, 0, 0]} />
          <Box position={[1.6, 0, 0]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* </mesh> */}
        </Canvas>
      </div>
      <h1>Theejs Fiber</h1>
      <a>もっと見る</a>
    </>
  );
}

export default App;
