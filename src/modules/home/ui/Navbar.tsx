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
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative h-12 w-48">
          {/* Apontando para a sua logo azul.png */}
          <Image
            src="/azul.png"
            alt="Ajuda Ajato - Suporte Técnico Remoto"
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
