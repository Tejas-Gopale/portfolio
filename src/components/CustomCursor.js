// src/components/CustomCursor.js
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      rafId.current = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(191, 90, 242, 0.6)';
      dot.style.transform = 'translate(-50%, -50%) scale(0)';
    };

    const onMouseLeaveLink = () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0, 229, 255, 0.5)';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId.current);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

export default CustomCursor;
