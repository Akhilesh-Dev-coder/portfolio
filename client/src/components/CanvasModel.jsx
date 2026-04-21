import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

const InfinityVortex = () => {
  const count = 12000;
  const pointsRef = useRef();
  const streaksRef = useRef();
  
  // Track scroll globally in a ref to avoid re-renders
  const scrollRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = window.scrollY / maxScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [positions, colors, streakPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sPos = new Float32Array(1000 * 6); // 1000 streaks

    for (let i = 0; i < count; i++) {
      // Create a cylinder distribution (tunnel)
      const r = 8 + Math.random() * 15; // Tunnel radius
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 150; // Long tunnel

      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(theta);
      pos[i * 3 + 2] = z;

      // Color based on depth (Z)
      const color = new THREE.Color();
      const hue = 0.6 + (z / 150) * 0.2; // Range from Indigo to Cyan
      color.setHSL(hue, 0.8, 0.5);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      // Build streaks for every 12th particle
      if (i < 1000) {
        const sIdx = i * 6;
        sPos[sIdx] = pos[i * 3];
        sPos[sIdx + 1] = pos[i * 3 + 1];
        sPos[sIdx + 2] = pos[i * 3 + 2];
        sPos[sIdx + 3] = pos[i * 3] * 1.05; // Slightly outward
        sPos[sIdx + 4] = pos[i * 3 + 1] * 1.05;
        sPos[sIdx + 5] = pos[i * 3 + 2] - 5; // Long tail
      }
    }
    return [pos, col, sPos];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scrollProgress = scrollRef.current;

    if (pointsRef.current) {
      // 1. Spinning Motion (Speeds up on scroll)
      const spinSpeed = 0.05 + scrollProgress * 0.5;
      pointsRef.current.rotation.z = time * spinSpeed;
      
      // 2. Plunge Effect (Move camera/scene forward)
      // We actually move the points backward so it feels like the camera moves forward
      pointsRef.current.position.z = scrollProgress * 80;

      // 3. Mouse Interaction (Turbulence)
      const targetRotationX = window.mousePos.y * 0.1;
      const targetRotationY = window.mousePos.x * 0.1;
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;
      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.05;
    }

    if (streaksRef.current) {
      streaksRef.current.rotation.z = pointsRef.current.rotation.z;
      streaksRef.current.position.z = pointsRef.current.position.z;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} colors={colors}>
        <PointMaterial 
          transparent 
          vertexColors 
          size={0.16} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>

      <lineSegments ref={streaksRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={streakPositions.length / 3}
            array={streakPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending} 
        />
      </lineSegments>
    </group>
  );
};

// Global mouse tracker
window.mousePos = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    window.mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
    window.mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

export default function CanvasModel() {
  return (
    <div className="fixed inset-0 z-0 h-[100svh] w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }} dpr={[1, 2]}>
        <color attach="background" args={['#020408']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#6366f1" />
        
        <InfinityVortex />
        
        {/* Deep fog for that infinite tunnel feel */}
        <fog attach="fog" args={['#020408', 20, 65]} />
      </Canvas>
    </div>
  );
}
