'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

function RobotHead({ position, rotation }) {
  const headRef = useRef();
  
  useFrame((state) => {
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={headRef} position={position} rotation={rotation}>
      {/* Main head */}
      <Box args={[1.2, 1.2, 1.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4a90e2" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Eyes */}
      <Sphere args={[0.15, 16, 16]} position={[-0.3, 0.1, 0.6]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.15, 16, 16]} position={[0.3, 0.1, 0.6]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Eye pupils */}
      <Sphere args={[0.05, 16, 16]} position={[-0.3, 0.1, 0.7]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.05, 16, 16]} position={[0.3, 0.1, 0.7]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Mouth */}
      <Box args={[0.4, 0.1, 0.1]} position={[0, -0.2, 0.6]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      
      {/* Antenna */}
      <Cylinder args={[0.02, 0.02, 0.8]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#666666" />
      </Cylinder>
      <Sphere args={[0.05, 16, 16]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
}

function RobotBody({ position, rotation }) {
  const bodyRef = useRef();
  
  useFrame((state) => {
    if (bodyRef.current) {
      bodyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={bodyRef} position={position} rotation={rotation}>
      {/* Main body */}
      <Box args={[1.5, 2, 1]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#2c3e50" metalness={0.6} roughness={0.3} />
      </Box>
      
      {/* Chest panel */}
      <Box args={[1.2, 0.8, 0.1]} position={[0, -1.2, 0.5]}>
        <meshStandardMaterial color="#34495e" />
      </Box>
      
      {/* Chest lights */}
      <Sphere args={[0.08, 16, 16]} position={[-0.3, -1.2, 0.6]}>
        <meshStandardMaterial color="#3498db" emissive="#3498db" emissiveIntensity={0.4} />
      </Sphere>
      <Sphere args={[0.08, 16, 16]} position={[0.3, -1.2, 0.6]}>
        <meshStandardMaterial color="#e74c3c" emissive="#e74c3c" emissiveIntensity={0.4} />
      </Sphere>
      <Sphere args={[0.08, 16, 16]} position={[0, -1.5, 0.6]}>
        <meshStandardMaterial color="#f39c12" emissive="#f39c12" emissiveIntensity={0.4} />
      </Sphere>
    </group>
  );
}

function RobotArms({ position, rotation }) {
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  
  useFrame((state) => {
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8 + Math.PI) * 0.2;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Left arm */}
      <group ref={leftArmRef} position={[-1.2, -1, 0]}>
        <Cylinder args={[0.15, 0.15, 1.5]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#34495e" />
        </Cylinder>
        {/* Left hand */}
        <Sphere args={[0.2, 16, 16]} position={[-0.75, 0, 0]}>
          <meshStandardMaterial color="#4a90e2" />
        </Sphere>
      </group>
      
      {/* Right arm */}
      <group ref={rightArmRef} position={[1.2, -1, 0]}>
        <Cylinder args={[0.15, 0.15, 1.5]} rotation={[0, 0, -Math.PI / 2]}>
          <meshStandardMaterial color="#34495e" />
        </Cylinder>
        {/* Right hand */}
        <Sphere args={[0.2, 16, 16]} position={[0.75, 0, 0]}>
          <meshStandardMaterial color="#4a90e2" />
        </Sphere>
      </group>
    </group>
  );
}

function RobotLegs({ position, rotation }) {
  const leftLegRef = useRef();
  const rightLegRef = useRef();
  
  useFrame((state) => {
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2 + Math.PI) * 0.1;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Left leg */}
      <group ref={leftLegRef} position={[-0.4, -3, 0]}>
        <Cylinder args={[0.2, 0.2, 1.5]}>
          <meshStandardMaterial color="#34495e" />
        </Cylinder>
        {/* Left foot */}
        <Box args={[0.4, 0.2, 0.8]} position={[0, -0.85, 0.2]}>
          <meshStandardMaterial color="#2c3e50" />
        </Box>
      </group>
      
      {/* Right leg */}
      <group ref={rightLegRef} position={[0.4, -3, 0]}>
        <Cylinder args={[0.2, 0.2, 1.5]}>
          <meshStandardMaterial color="#34495e" />
        </Cylinder>
        {/* Right foot */}
        <Box args={[0.4, 0.2, 0.8]} position={[0, -0.85, 0.2]}>
          <meshStandardMaterial color="#2c3e50" />
        </Box>
      </group>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={particlesRef}>
      {[...Array(20)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.02, 8, 8]}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <meshStandardMaterial 
            color="#d4af37" 
            emissive="#d4af37" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </group>
  );
}

// New component to hold the robot group and useFrame logic
function RobotGroup() {
  const robotRef = useRef();
  return (
    <group ref={robotRef}>
      <RobotHead position={[0, 0.5, 0]} />
      <RobotBody position={[0, 0, 0]} />
      <RobotArms position={[0, 0, 0]} />
      <RobotLegs position={[0, 0, 0]} />
    </group>
  );
}

function AIRobot() {
  return (
    <div style={{ width: '140px', height: '140px', margin: '0 auto' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent', width: '140px', height: '140px' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4af37" />
        <RobotGroup />
        <FloatingParticles />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default AIRobot; 