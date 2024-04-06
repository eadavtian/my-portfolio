// Используйте "use client" в начале файла, если вы работаете в Next.js 13 с server components
"use client";

import React, { useState, useEffect, FC } from "react";

interface ParallaxBackgroundProps {
  children: React.ReactNode; // Явно указываем, что children может быть любым React узлом
}

const ParallaxBackground: FC<ParallaxBackgroundProps> = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ minHeight: "30vh" }}>
      <img
        src="/assets/images/parallax-bg.jpg"
        alt="Parallax Background"
        className="fixed w-full h-full object-cover "
        style={{
          top: `${-offsetY}px`, // Применяем смещение для создания эффекта параллакса
          left: "0",
          zIndex: "-1",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxBackground;
