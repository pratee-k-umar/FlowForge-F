import React, { useEffect, useRef, useState } from "react";

interface SaaSHeroProps {
  className?: string;
}

const Conclusion: React.FC<SaaSHeroProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-black ${className}`}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMove 25s linear infinite",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* First Orb - Top Left */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{
            top: "10%",
            left: "15%",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />

        {/* Second Orb - Bottom Right */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-25"
          style={{
            bottom: "15%",
            right: "10%",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Subtle Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)
          `,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span
              className="inline-block"
              style={{
                animation: isVisible
                  ? "slideInLeft 0.8s ease-out 0.2s both"
                  : "none",
              }}
            >
              Get Ready to unleash
            </span>
            <br />
            <span
              className="inline-block text-white"
              style={{
                animation: isVisible
                  ? "slideInRight 0.8s ease-out 0.4s both"
                  : "none",
              }}
            >
              your Project with US
            </span>
          </h1>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button
            className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/5 hover:scale-105"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 border border-white/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-30" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.2;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Conclusion;
