import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting AI/ML keywords, prompt snippets, and figures
const ORBITING_ITEMS = [
  {
    type: 'badge',
    label: '>_ prompt.py',
    tagline: 'Zero-shot / Chain-of-Thought',
    icon: '⚡',
    color: '#56D364',
    angle: 0,
    radius: 2.35,
    heightOffset: 0.42,
    speed: 0.22
  },
  {
    type: 'badge',
    label: 'AI Agents & RAG',
    tagline: 'Vector Knowledge Retrieval',
    icon: '🤖',
    color: '#388BFD',
    angle: (Math.PI * 2) / 7,
    radius: 2.5,
    heightOffset: -0.32,
    speed: 0.22
  },
  {
    type: 'badge',
    label: 'LLMs & Transformers',
    tagline: 'DeepSeek • Claude • GPT-4o',
    icon: '🧠',
    color: '#39C5CF',
    angle: (Math.PI * 4) / 7,
    radius: 2.25,
    heightOffset: 0.48,
    speed: 0.22
  },
  {
    type: 'badge',
    label: 'Code Copilots',
    tagline: 'Cursor • Copilot • Claude Code',
    icon: '💻',
    color: '#79C0FF',
    angle: (Math.PI * 6) / 7,
    radius: 2.45,
    heightOffset: -0.45,
    speed: 0.22
  },
  {
    type: 'badge',
    label: 'Workflow Automation',
    tagline: 'n8n • Zapier • Custom Pipelines',
    icon: '⚙️',
    color: '#D2A8FF',
    angle: (Math.PI * 8) / 7,
    radius: 2.3,
    heightOffset: 0.25,
    speed: 0.22
  },
  {
    type: 'badge',
    label: 'Fine-Tuning & LoRA',
    tagline: 'Custom Enterprise Adapters',
    icon: '🎛️',
    color: '#F0883E',
    angle: (Math.PI * 10) / 7,
    radius: 2.4,
    heightOffset: -0.22,
    speed: 0.22
  },
  {
    type: 'badge',
    label: 'Multimodal ML',
    tagline: 'Vision • Audio • Realtime',
    icon: '📊',
    color: '#E3B341',
    angle: (Math.PI * 12) / 7,
    radius: 2.35,
    heightOffset: 0.35,
    speed: 0.22
  }
];

// 3D Geometric Floating Figures (TPU Chips, Vector Crystals, Neural Pyramids)
const GEOMETRIC_FIGURES = [
  { type: 'cube', color: '#56D364', angle: 0.5, radius: 1.9, height: 0.6, size: 0.12 },
  { type: 'octahedron', color: '#388BFD', angle: 2.1, radius: 2.05, height: -0.55, size: 0.14 },
  { type: 'tetrahedron', color: '#D2A8FF', angle: 3.8, radius: 1.85, height: 0.5, size: 0.13 },
  { type: 'cube', color: '#39C5CF', angle: 5.2, radius: 2.1, height: -0.4, size: 0.11 }
];

function OrbitingGeometricFigure({ figure, index }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * 0.28 + figure.angle;
      const x = Math.cos(time) * figure.radius;
      const z = Math.sin(time) * figure.radius;
      const y = figure.height + Math.sin(state.clock.elapsedTime * 1.2 + index) * 0.08;

      meshRef.current.position.set(x, y, z);
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <group ref={meshRef}>
      {figure.type === 'cube' && (
        <mesh>
          <boxGeometry args={[figure.size, figure.size, figure.size]} />
          <meshStandardMaterial
            color={figure.color}
            wireframe
            emissive={figure.color}
            emissiveIntensity={1.2}
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
            emissiveIntensity={1.4}
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
            emissiveIntensity={1.2}
          />
        </mesh>
      )}
    </group>
  );
}

function OrbitingBadge({ data, index }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth orbital revolution around the central core
      const time = state.clock.elapsedTime * data.speed + data.angle;
      const x = Math.cos(time) * data.radius;
      const z = Math.sin(time) * data.radius;
      const y = data.heightOffset + Math.sin(state.clock.elapsedTime * 0.7 + index * 1.1) * 0.12;

      groupRef.current.position.set(x, y, z);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Anchor Light Point */}
      <mesh>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color={data.color} />
      </mesh>

      {/* Luminous HTML 3D Badge */}
      <Html
        center
        distanceFactor={6}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          transition: "opacity 0.2s ease"
        }}
      >
        <div style={{
          background: "rgba(8, 14, 26, 0.92)",
          border: `1px solid ${data.color}99`,
          borderRadius: 8,
          padding: "5px 11px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          boxShadow: `0 4px 18px rgba(0,0,0,0.7), 0 0 14px ${data.color}44`,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)"
        }}>
          {/* Glowing Icon Container */}
          <span style={{
            fontSize: 12,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 20,
            height: 20,
            borderRadius: 5,
            background: `${data.color}22`,
            border: `1px solid ${data.color}55`
          }}>
            {data.icon}
          </span>

          {/* Label and Subtext */}
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <span style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: "#F0F6FC",
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              letterSpacing: "-.01em",
              lineHeight: 1.2
            }}>
              {data.label}
            </span>
            <span style={{
              fontSize: 9.5,
              fontWeight: 500,
              color: "#8B949E",
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.1,
              marginTop: 1
            }}>
              {data.tagline}
            </span>
          </div>
        </div>
      </Html>
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
    const count = 180;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.6 + Math.random() * 1.2;
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

      {/* 3D Orbiting Geometric Figures (Cubes, Crystals, Pyramids) */}
      {GEOMETRIC_FIGURES.map((fig, idx) => (
        <OrbitingGeometricFigure key={`fig-${idx}`} figure={fig} index={idx} />
      ))}

      {/* 3D Orbiting AI / ML Prompt Keyword Badges with Icons */}
      {ORBITING_ITEMS.map((item, idx) => (
        <OrbitingBadge key={item.label} data={item} index={idx} />
      ))}
    </group>
  );
}

export default function NeuralGlobe3D() {
  return (
    <div style={{
      width: "100%",
      height: "320px",
      position: "relative",
      pointerEvents: "none",
      zIndex: 1,
      marginTop: "-25px",
      marginBottom: "6px"
    }}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
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

