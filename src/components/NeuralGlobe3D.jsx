import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingCore() {
  const outerMeshRef = useRef();
  const innerMeshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const particlesRef = useRef();

  useFrame((state, delta) => {
    // Smooth continuous rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y += delta * 0.18;
      outerMeshRef.current.rotation.x += delta * 0.05;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.35;
      innerMeshRef.current.rotation.z += delta * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
      ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.25 + 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.25;
      ring2Ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.4) * 0.25 - 0.35;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.06;
      particlesRef.current.rotation.x += delta * 0.03;
    }
  });

  // Calculate 3D particle positions around the neural core
  const [particlePositions] = useMemo(() => {
    const count = 140;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.9 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  return (
    <group position={[0, -0.2, 0]}>
      {/* Outer 3D Neural Wireframe Sphere */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#388BFD"
          wireframe
          emissive="#388BFD"
          emissiveIntensity={0.8}
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
          emissiveIntensity={1.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Primary Quantum Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[0.45, 0, 0]}>
        <torusGeometry args={[1.85, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#79C0FF"
          emissiveIntensity={1.2}
          roughness={0.1}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-0.45, 0.3, 0]}>
        <torusGeometry args={[1.7, 0.012, 16, 120]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={1.0}
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
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function NeuralGlobe3D() {
  return (
    <div style={{
      width: "100%",
      height: "260px",
      position: "relative",
      pointerEvents: "none",
      zIndex: 1,
      marginTop: "-24px",
      marginBottom: "4px"
    }}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[8, 8, 8]} color="#FFFFFF" intensity={2.5} />
        <pointLight position={[-8, -8, -8]} color="#388BFD" intensity={1.8} />
        <pointLight position={[0, 0, 2]} color="#56D364" intensity={1.2} />
        <RotatingCore />
      </Canvas>
    </div>
  );
}
