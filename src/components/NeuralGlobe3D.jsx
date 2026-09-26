import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Geometric Data Nodes orbiting around the neural sphere
const ORBITING_FIGURES = [
  { type: 'octahedron', color: '#2F81F7', angle: 0, radius: 2.3, height: 0.35, size: 0.14, speed: 0.22, rotSpeed: 0.02 },
  { type: 'cube', color: '#8B7CF6', angle: (Math.PI * 2) / 4, radius: 2.45, height: -0.3, size: 0.13, speed: 0.2, rotSpeed: -0.018 },
  { type: 'tetrahedron', color: '#2F81F7', angle: (Math.PI * 4) / 4, radius: 2.2, height: 0.4, size: 0.14, speed: 0.24, rotSpeed: 0.025 },
  { type: 'torus', color: '#2EA043', angle: (Math.PI * 6) / 4, radius: 2.35, height: -0.35, size: 0.11, speed: 0.21, rotSpeed: -0.02 }
];

function Orbiting3DFigure({ figure, index }) {
  const meshGroupRef = useRef();
  const meshRef = useRef();

  useFrame((state) => {
    if (meshGroupRef.current) {
      const time = state.clock.elapsedTime * figure.speed + figure.angle;
      const x = Math.cos(time) * figure.radius;
      const z = Math.sin(time) * figure.radius;
      const y = figure.height + Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.08;

      meshGroupRef.current.position.set(x, y, z);
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += figure.rotSpeed;
      meshRef.current.rotation.y += figure.rotSpeed * 1.2;
    }
  });

  return (
    <group ref={meshGroupRef}>
      <mesh>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color={figure.color} />
      </mesh>

      <group ref={meshRef}>
        {figure.type === 'cube' && (
          <mesh>
            <boxGeometry args={[figure.size, figure.size, figure.size]} />
            <meshStandardMaterial
              color={figure.color}
              wireframe
              emissive={figure.color}
              emissiveIntensity={0.8}
            />
          </mesh>
        )}

        {figure.type === 'octahedron' && (
          <mesh>
            <octahedronGeometry args={[figure.size, 0]} />
            <meshStandardMaterial
              color={figure.color}
              wireframe
              emissive={figure.color}
              emissiveIntensity={0.9}
            />
          </mesh>
        )}

        {figure.type === 'tetrahedron' && (
          <mesh>
            <tetrahedronGeometry args={[figure.size, 0]} />
            <meshStandardMaterial
              color={figure.color}
              wireframe
              emissive={figure.color}
              emissiveIntensity={0.8}
            />
          </mesh>
        )}

        {figure.type === 'torus' && (
          <mesh>
            <torusGeometry args={[figure.size, 0.02, 10, 24]} />
            <meshStandardMaterial
              color={figure.color}
              wireframe
              emissive={figure.color}
              emissiveIntensity={0.8}
            />
          </mesh>
        )}
      </group>
    </group>
  );
}

function RotatingCore() {
  const outerMeshRef = useRef();
  const innerMeshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y += delta * 0.12;
      outerMeshRef.current.rotation.x += delta * 0.03;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.25;
      innerMeshRef.current.rotation.z += delta * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.14;
      ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.18 + 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.18;
      ring2Ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.18 - 0.3;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.04;
    }
  });

  const [particlePositions] = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.6 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  return (
    <group position={[0, -0.05, 0]}>
      {/* Outer 3D Neural Wireframe Sphere */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.3, 2]} />
        <meshStandardMaterial
          color="#1D4ED8"
          wireframe
          emissive="#1D4ED8"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#FF8A00"
          emissive="#FF8A00"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Primary Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[0.4, 0, 0]}>
        <torusGeometry args={[1.85, 0.015, 16, 90]} />
        <meshStandardMaterial
          color="#1D4ED8"
          emissive="#1D4ED8"
          emissiveIntensity={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-0.4, 0.25, 0]}>
        <torusGeometry args={[1.7, 0.012, 16, 90]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Orbital 3D Data Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#3B82F6"
          transparent
          opacity={0.85}
          blending={THREE.NormalBlending}
        />
      </points>

      {/* Orbiting Figures */}
      {ORBITING_FIGURES.map((fig, idx) => (
        <Orbiting3DFigure key={`orbit-fig-${idx}`} figure={fig} index={idx} />
      ))}
    </group>
  );
}

export default function NeuralGlobe3D() {
  return (
    <div style={{
      width: "100%",
      height: "300px",
      position: "relative",
      pointerEvents: "none",
      zIndex: 1,
      marginTop: "0px",
      marginBottom: "16px"
    }}>
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.0} />
        <pointLight position={[6, 6, 6]} color="#FFFFFF" intensity={2.2} />
        <pointLight position={[-6, -6, -6]} color="#1D4ED8" intensity={1.8} />
        <RotatingCore />
      </Canvas>
    </div>
  );
}




