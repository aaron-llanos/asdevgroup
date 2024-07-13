'use client';

import { useState, useEffect } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return { isMobile: width < 900 };
}
