'use client';

import { useRef, useEffect } from "react";

export default function useFlashlight() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener('mousemove', (e) => {
      const x = e.offsetX
      const y = e.offsetY
      ref.current.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, #0000004f 150px)`
    })
  }, []);

  return { ref };
}
