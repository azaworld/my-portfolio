"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const scroll = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    const timer = setTimeout(scroll, 3500);
    return () => clearTimeout(timer);
  }, []);
  return null;
}
