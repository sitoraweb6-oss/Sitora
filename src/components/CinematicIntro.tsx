import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

// Particle field with layered organic wave drifting movement
const ParticleField: React.FC<{
  count: number;
  speed: number;
  noiseScale: number;
  size: number;
  depthOffset: number;
  colorType: 'cool' | 'platinum' | 'warm';
}> = ({ count, speed, noiseScale, size, depthOffset, colorType }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate distinct particle properties
  const [positions, rando, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Create a 3D bounding volume with varying depth
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50 - depthOffset;

      // Noise coordinates for pseudo-random organic waveforms
      rnd[i * 3] = Math.random() * 100;
      rnd[i * 3 + 1] = Math.random() * 100;
      rnd[i * 3 + 2] = Math.random() * 100;

      // Palette pairing according to colorType
      let c = new THREE.Color('#ffffff');
      const rng = Math.random();

      if (colorType === 'platinum') {
        if (rng < 0.75) {
          c = new THREE.Color('#ffffff'); // High white
        } else if (rng < 0.96) {
          c = new THREE.Color('#e2e8f0'); // Muted slate silver
        } else {
          c = new THREE.Color('#D6B16B'); // Rare premium gold / bronze highlight
        }
      } else if (colorType === 'cool') {
        if (rng < 0.8) {
          c = new THREE.Color('#e2e8f0');
        } else if (rng < 0.95) {
          c = new THREE.Color('#94a3b8'); // Soft cooler metallic titanium
        } else {
          c = new THREE.Color('#ffffff');
        }
      } else {
        // Soft warm tones
        if (rng < 0.7) {
          c = new THREE.Color('#fcf8f2'); // Silk off-white
        } else if (rng < 0.93) {
          c = new THREE.Color('#e8dfd1'); // Cashmere warm silver
        } else {
          c = new THREE.Color('#D6B16B'); // Golden glow
        }
      }

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, rnd, col];
  }, [count, depthOffset, colorType]);

  // Procedural canvas particle texture generation to avoid asset loading overhead
  const pTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.15, 'rgba(245, 245, 250, 0.9)');
      gradient.addColorStop(0.4, 'rgba(200, 200, 215, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];

      const rx = rando[i * 3];
      const ry = rando[i * 3 + 1];
      const rz = rando[i * 3 + 2];

      // Highly customized, non-linear slow drift trajectories so particles act organic
      const dx = Math.sin(time * speed * 0.4 + rx) * 0.08 * noiseScale;
      const dy = Math.cos(time * speed * 0.35 + ry) * 0.06 * noiseScale;
      const dz = Math.sin(time * speed * 0.2 + rz) * 0.05 * noiseScale;

      posAttr.setXYZ(i, x + dx, y + dy, z + dz);
    }

    posAttr.needsUpdate = true;

    // Elegant and incredibly slow rotation overall
    pointsRef.current.rotation.y = time * 0.006;
    pointsRef.current.rotation.x = time * 0.003;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        map={pTexture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </points>
  );
};

// Breathing camera rig that smooths perspective updates and micro-parallax
const CameraRig: React.FC = () => {
  useFrame((state) => {
    const { pointer, clock } = state;
    const time = clock.getElapsedTime();

    // Constant breathing motion curves matching calm physical cycles
    const breathingX = Math.sin(time * 0.15) * 0.12;
    const breathingY = Math.cos(time * 0.18) * 0.08;
    const breathingZ = Math.sin(time * 0.08) * 0.15;

    // Subtle pointer parallax tracking
    const targetX = pointer.x * 0.25 + breathingX;
    const targetY = pointer.y * 0.2 + breathingY;
    const targetZ = 6.5 + breathingZ;

    // Interpolate camera to target coordinates smoothly
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.035);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.035);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.035);

    // Subtle target look-at shifts
    state.camera.lookAt(targetX * 0.12, targetY * 0.12, 0);
  });

  return null;
};

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Elegant timing variables
    // No-UI atmosphere for the first 1.2s to establish complete mystery
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 1200);

    // Auto完成 cinematic sequence at 3.5s which transitions to the homepage
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: 'blur(35px)',
        scale: 1.05,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 bg-[#020202] overflow-hidden flex flex-col items-center justify-center select-none"
      id="cinematic-universe-fullscreen"
    >
      {/* 3D WebGL Canvas containing starry particle fields */}
      <div className="absolute inset-0 w-full h-full z-10" id="webgl-canvas-container">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 75, near: 0.1, far: 100 }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          id="universe-canvas"
        >
          {/* Pitch-black background with delicate premium dust glow */}
          <color attach="background" args={['#020202']} />
          <ambientLight intensity={0.05} />
          
          {/* Volumetric Fog simulating physical depths and infinite expansion */}
          <fog attach="fog" args={['#020202', 4, 25]} />

          {/* Layer 1: Dense, tiny, infinite space dust in deep background */}
          <ParticleField
            count={2800}
            speed={0.15}
            noiseScale={1.2}
            size={0.06}
            depthOffset={10}
            colorType="cool"
          />

          {/* Layer 2: Main crisp medium particles with silver/platinum elements */}
          <ParticleField
            count={1400}
            speed={0.25}
            noiseScale={1.5}
            size={0.12}
            depthOffset={4}
            colorType="platinum"
          />

          {/* Layer 3: Closer luxury drifting elements with glowing gold hues */}
          <ParticleField
            count={300}
            speed={0.35}
            noiseScale={2.0}
            size={0.24}
            depthOffset={-2}
            colorType="warm"
          />

          {/* Controlled camera perspective stabilizer */}
          <CameraRig />
        </Canvas>
      </div>

      {/* Cinematic Ambient Golden Bloom Radial Reflection in DOM overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,177,107,0.03)_0%,rgba(0,0,0,0)_80%)] mix-blend-screen pointer-events-none z-20"
        id="cinema-radial-overlay"
      />

      {/* Floating Skip Trigger (Understated minimalist design, fades in after initial silence) */}
      <AnimatePresence>
        {showSkip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-8 right-8 z-30"
            id="intro-skip-button-anchor"
          >
            <button
              onClick={onComplete}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 text-[10px] tracking-[0.25em] uppercase text-neutral-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md cursor-pointer outline-none"
              id="intro-minimal-skip-btn"
            >
              <span>SKIP EXPERIENCE</span>
              <span className="text-[#D6B16B] font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
