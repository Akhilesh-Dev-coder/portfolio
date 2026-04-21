import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Dog } from 'lucide-react';

const ShihTzuCompanion = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    // Generate a random walking pattern
    const walk = async () => {
      while (true) {
        // Pick a random destination across the viewport width
        const distance = Math.random() * (window.innerWidth - 100);
        const duration = distance / 50; // speed
        
        // Face the correct direction based on current and target position... wait,
        // it's easier to just pick a direction and walk!
        const nextDirection = Math.random() > 0.5 ? 1 : -1;
        setDirection(nextDirection);

        const targetX = nextDirection === 1 
          ? window.innerWidth - 60  // walk to right edge
          : 20;                     // walk to left edge

        const currentDuration = Math.abs(targetX) / 80;

        await controls.start({
          x: targetX,
          // Small bobbing animation while walking
          y: [0, -5, 0, -5, 0],
          transition: {
            x: { duration: currentDuration, ease: "linear" },
            y: { duration: currentDuration, repeat: Infinity, ease: "linear" }
          }
        });

        // Pause to "sniff" around
        await controls.start({
          y: 0,
          rotate: [0, 5, -5, 0],
          transition: { duration: 1.5 }
        });
        
        // Wait a bit before next walk
        await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 1000));
      }
    };

    walk();
  }, [controls]);

  return (
    <motion.div
      initial={{ x: -100, y: 0 }}
      animate={controls}
      className="fixed bottom-0 z-50 pointer-events-none drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
      style={{
        // Flip the dog depending on walking direction
        transform: `scaleX(${direction})`
      }}
    >
      <div className="relative">
        {/* We flip the individual container to counter the motion.div scaleX if needed, 
            but framer handles the motion.div. Let's ensure the icon flips correctly. */}
        <div style={{ transform: `scaleX(${direction === 1 ? -1 : 1})` }}>
           {/* Color it brown to resemble a Shih Tzu */}
          <Dog size={32} color="#8B4513" fill="#A0522D" strokeWidth={1.5} />
        </div>
        
        {/* Name tag */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-md text-[8px] font-bold text-white border border-white/20 whitespace-nowrap opacity-0 transition-opacity hover:opacity-100 pointer-events-auto">
          Shih Tzu
        </div>
      </div>
    </motion.div>
  );
};

export default ShihTzuCompanion;
