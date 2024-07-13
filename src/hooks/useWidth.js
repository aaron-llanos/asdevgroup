'use client';

import { useState, useEffect, useCallback } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(null);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  // const [width, setWidth] = useState(10);

  useEffect(() => {
    // if (typeof window !== "undefined") {
      // Client-side-only code
    // dommm = window.innerWidth
    // }
    setWidth(window.innerWidth);
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return { isMobile: width < 900 };
  // const [width, setDimensions] = useState(null)

  // const ref = useCallback((node) => {
  //   if (!!node) {
  //     const domRect = node.getBoundingClientRect()
  //     setDimensions(domRectToDimensions(domRect))
  //   }
  // }, [])

  // return { isMobile: width < 900 }
}
