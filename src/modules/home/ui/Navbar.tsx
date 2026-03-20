"use client";

import React from "react";
import Image from "next/image";

export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-linear-to-br from-blue-900 via-slate-900/95 to-cyan-900 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="relative h-10 w-48">
          <Image
            src="/simplessolucao-logo.webp"
            alt="Simples Solução - Consultoria de TI Empresarial"
            fill
            priority
            sizes="(max-width: 768px) 150px, 200px"
            className="object-contain object-left"
          />
        </div>
      </div>
    </nav>
  );
};
