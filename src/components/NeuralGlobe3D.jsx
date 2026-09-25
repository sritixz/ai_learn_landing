import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Geometric AI Figures & Nodes orbiting around the neural sphere
const ORBITING_FIGURES = [
  // TPU Neural Compute Chips (Cubes)
  { type: 'cube', color: '#56D364', angle: 0, radius: 2.3, height: 0.45, size: 0.16, speed: 0.25, rotSpeed: 0.03 },
  { type: 'cube', color: '#388BFD', angle: (Math.PI * 2) / 6, radius: 2.5, height: -0.35, size: 0.15, speed: 0.22, rotSpeed: -0.025 },
  
  // Vector Embedding Data Crystals (Octahedrons)
  { type: 'octahedron', color: '#79C0FF', angle: (Math.PI * 4) / 6, radius: 2.2, height: 0.5, size: 0.18, speed: 0.28, rotSpeed: 0.035 },
  { type: 'octahedron', color: '#39C5CF', angle: (Math.PI * 6) / 6, radius: 2.4, height: -0.45, size: 0.17, speed: 0.24, rotSpeed: -0.03 },

  // Neural Synapse Pyramids (Tetrahedrons)
  { type: 'tetrahedron', color: '#D2A8FF', angle: (Math.PI * 8) / 6, radius: 2.15, height: 0.3, size: 0.18, speed: 0.26, rotSpeed: 0.04 },
  { type: 'tetrahedron', color: '#F0883E', angle: (Math.PI * 10) / 6, radius: 2.45, height: -0.2, size: 0.16, speed: 0.23, rotSpeed: -0.035 },

  // Mini Quantum Torus Rings
  { type: 'torus', color: '#56D364', angle: 1.1, radius: 2.05, height: -0.55, size: 0.12, speed: 0.3, rotSpeed: 0.05 },
  { type: 'torus', color: '#38BDF8', angle: 4.2, radius: 2.1, height: 0.55, size: 0.12, speed: 0.27, rotSpeed: -0.04 },

  // Luminous Neural Icosahedron Nodes
  { type: 'icosahedron', color: '#FFFFFF', angle: 2.7, radius: 2.6, height: 0.15, size: 0.14, speed: 0.2, rotSpeed: 0.03 },
  { type: 'icosahedron', color: '#E3B341', angle: 5.6, radius: 2.35, height: -0.15, size: 0.13, speed: 0.25, rotSpeed: -0.03 }
];

function Orbiting3DFigure({ figure, index }) {
  const meshGroupRef = useRef();
  const meshRef = useRef();

  useFrame((state) => {
    if (meshGroupRef.current) {
      // Smooth 3D revolution around sphere
      const time = state.clock.elapsedTime * figure.speed + figure.angle;
      const x = Math.cos(time) * figure.radius;
      const z = Math.sin(time) * figure.radius;
      const y = figure.height + Math.sin(state.clock.elapsedTime * 0.9 + index) * 0.12;

      meshGroupRef.current.position.set(x, y, z);
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += figure.rotSpeed;
      meshRef.current.rotation.y += figure.rotSpeed * 1.3;
      meshRef.current.rotation.z += figure.rotSpeed * 0.7;
    }
  });

  return (
    <group ref={meshGroupRef}>
      {/* Central Glowing Core Light Dot */}
      <mesh>
        <sphereGeometry args={[0.035, 10, 10]} />
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
              emissiveIntensity={1.3}
              roughness={0.1}
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
              emissiveIntensity={1.5}
              roughness={0.1}
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
              emissiveIntensity={1.4}
              roughness={0.1}
            />
          </mesh>
        )}

        {figure.type === 'torus' && (
          <mesh>
            <torusGeometry args={[figure.size, 0.025, 12, 32]} />
            <meshStandardMaterial
              color={figure.color}
              wireframe
              emissive={figure.color}
              emissiveIntensity={1.4}
              roughness={0.1}
            />
          </mesh>
        )}

        {figure.type === 'icosahedron' && (
          <mesh>
            <icosahedronGeometry args={[figure.size, 0]} />
            <meshStandardMaterial
              color={figure.color}
              wireframe
              emissive={figure.color}
              emissiveIntensity={1.4}
              roughness={0.1}
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
  const ring3Ref = useRef();
  const particlesRef = useRef();

  useFrame((state, delta) => {
    // Smooth continuous rotation of inner and outer meshes
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y += delta * 0.16;
      outerMeshRef.current.rotation.x += delta * 0.04;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.35;
      innerMeshRef.current.rotation.z += delta * 0.14;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.18;
      ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.22 + 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.22;
      ring2Ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.35) * 0.22 - 0.35;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.15;
      ring3Ref.current.rotation.y -= delta * 0.12;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
    }
  });

  // Calculate 3D particle positions around the neural core
  const [particlePositions] = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.6 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  return (
    <group position={[0, -0.1, 0]}>
      {/* Outer 3D Neural Wireframe Sphere */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#388BFD"
          wireframe
          emissive="#388BFD"
          emissiveIntensity={0.85}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Glowing White-Hot Core */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[0.65, 0]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Primary Quantum Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[0.45, 0, 0]}>
        <torusGeometry args={[1.9, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#79C0FF"
          emissiveIntensity={1.3}
          roughness={0.1}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-0.45, 0.3, 0]}>
        <torusGeometry args={[1.75, 0.012, 16, 120]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={1.1}
          roughness={0.1}
        />
      </mesh>

      {/* Third Equatorial Ring */}
      <mesh ref={ring3Ref} rotation={[0, 0.8, 0.2]}>
        <torusGeometry args={[1.6, 0.009, 16, 100]} />
        <meshStandardMaterial
          color="#56D364"
          emissive="#56D364"
          emissiveIntensity={0.9}
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
          color="#FFFFFF"
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 3D Orbiting Geometric Figures & AI Nodes (No Words) */}
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
      height: "360px",
      position: "relative",
      pointerEvents: "none",
      zIndex: 1,
      marginTop: "10px",
      marginBottom: "20px"
    }}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[8, 8, 8]} color="#FFFFFF" intensity={2.6} />
        <pointLight position={[-8, -8, -8]} color="#388BFD" intensity={1.9} />
        <pointLight position={[0, 0, 2]} color="#56D364" intensity={1.3} />
        <RotatingCore />
      </Canvas>
    </div>
  );
}



