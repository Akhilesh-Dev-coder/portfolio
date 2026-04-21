import React, { useEffect, useRef } from 'react';

const SEGMENTS_COUNT = 18;

const CustomCursor = () => {
  const segmentsRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const positions = useRef(Array.from({ length: SEGMENTS_COUNT }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    // Hidden standard cursor globally
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // The head of the centipede follows the mouse
      // We use lerp for smoothness
      positions.current[0].x += (mousePos.current.x - positions.current[0].x) * 0.25;
      positions.current[0].y += (mousePos.current.y - positions.current[0].y) * 0.25;

      // Each following segment follows the one before it
      for (let i = 1; i < SEGMENTS_COUNT; i++) {
        const targetX = positions.current[i - 1].x;
        const targetY = positions.current[i - 1].y;
        
        positions.current[i].x += (targetX - positions.current[i].x) * 0.2;
        positions.current[i].y += (targetY - positions.current[i].y) * 0.2;
      }

      // Update DOM elements via direct style manipulation for 60fps performance
      segmentsRef.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate3d(${positions.current[i].x}px, ${positions.current[i].y}px, 0)`;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      document.body.style.cursor = 'auto'; // Restore cursor on unmount
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {Array.from({ length: SEGMENTS_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (segmentsRef.current[i] = el)}
          className="absolute top-0 left-0 bg-white rounded-full mix-blend-difference"
          style={{
            // Tapered size: starts larger at the head, gets tiny at the tail
            width: `${Math.max(2, 12 - i * 0.6)}px`,
            height: `${Math.max(2, 12 - i * 0.6)}px`,
            opacity: 1 - i * 0.04,
            transition: 'none', // Critical for custom cursor performance
            filter: i === 0 ? 'blur(0px)' : `blur(${i * 0.2}px)`,
            // Offset to center the dot on the point
            marginLeft: `-${Math.max(1, 6 - i * 0.3)}px`,
            marginTop: `-${Math.max(1, 6 - i * 0.3)}px`,
            boxShadow: i === 0 ? '0 0 15px white' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
