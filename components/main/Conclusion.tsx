"use client"

import React, { useEffect, useRef, useState } from "react";

interface ConslusionProps {
  className?: string;
}

const Conclusion: React.FC<ConslusionProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at center, #374151 0%, #000000 70%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
            transitionDelay: "0.2s",
          }}
        >
          Get Ready to Power Up Your Backend with Ease:
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            transitionDelay: "0.4s",
          }}
        >
          Your project’s backend potential is limitless—create, connect, and
          scale like never before.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            transitionDelay: "0.6s",
          }}
        >
          {/* Primary Button */}
          <button
            className="group relative bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transform"
            style={{
              boxShadow: "0 8px 30px rgba(255,255,255,0.2)",
            }}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Secondary Button */}
          <button
            className="group relative border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-2xl transform"
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" />
      <div
        className="absolute top-40 right-32 w-1 h-1 bg-teal-400 rounded-full opacity-80 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-20 w-1 h-1 bg-teal-300 rounded-full opacity-70 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default Conclusion;
