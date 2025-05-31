import React, { useState, useEffect, useRef } from "react";

const BenefitsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger title animation first
            setTimeout(() => setTitleVisible(true), 200);
            // Then trigger cards animation
            setTimeout(() => setIsVisible(true), 600);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Start animation 50px before it comes into view
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

  const benefits = [
    {
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="mb-8"
        >
          <path
            d="M20 25 L35 40 L60 15 M15 50 L30 65 L55 40"
            stroke="#6B7280"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
        </svg>
      ),
      title: "Minimize Project Delays and Accelerate Process",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="mb-8"
        >
          <rect
            x="15"
            y="20"
            width="25"
            height="25"
            stroke="#6B7280"
            strokeWidth="3"
            fill="none"
            className="animate-fade-in-scale"
          />
          <rect
            x="45"
            y="20"
            width="6"
            height="40"
            fill="#6B7280"
            className="animate-slide-up"
          />
          <rect
            x="55"
            y="30"
            width="6"
            height="30"
            fill="#6B7280"
            className="animate-slide-up delay-200"
          />
        </svg>
      ),
      title: "Enhance Your Workflow for Optimal Efficiency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="mb-8"
        >
          <rect
            x="20"
            y="20"
            width="40"
            height="40"
            stroke="#6B7280"
            strokeWidth="3"
            fill="none"
            className="animate-fade-in-scale"
          />
          <rect
            x="25"
            y="25"
            width="12"
            height="12"
            fill="#6B7280"
            className="animate-pulse delay-300"
          />
          <rect
            x="43"
            y="25"
            width="12"
            height="12"
            fill="#6B7280"
            className="animate-pulse delay-500"
          />
          <rect
            x="25"
            y="43"
            width="12"
            height="12"
            fill="#6B7280"
            className="animate-pulse delay-700"
          />
          <rect
            x="43"
            y="43"
            width="12"
            height="12"
            fill="#6B7280"
            className="animate-pulse delay-900"
          />
        </svg>
      ),
      title: "Broaden Your Range of Services to Meet Diverse Client Needs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1
            className={`text-5xl md:text-6xl font-light tracking-wide transition-all duration-1200 ease-out ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            Experience the key benefits
          </h1>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm transition-all duration-1000 ease-out hover:scale-105 hover:border-gray-600 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-24 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 300}ms`,
              }}
            >
              {/* Animated Background Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {/* Moving circles */}
                <div className="absolute w-32 h-32 bg-white/5 rounded-full -top-16 -left-16 animate-float" />
                <div className="absolute w-24 h-24 bg-white/3 rounded-full -bottom-12 -right-12 animate-float-reverse" />
                <div className="absolute w-40 h-40 bg-white/2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-white/10 animate-grid-fade"
                        style={{
                          animationDelay: `${
                            (i % 8) * 100 + Math.floor(i / 8) * 150
                          }ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/20 rounded-full animate-ripple" />
                  <div className="absolute w-4 h-4 bg-white/10 rounded-full animate-ripple-delayed" />
                </div>
              </div>

              {/* Icon Container */}
              <div className="relative z-10 flex justify-center items-center h-24 mb-6">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-medium mb-6 leading-relaxed transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(1deg);
          }
          50% {
            transform: translateY(-5px) translateX(-5px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) translateX(3px) rotate(0.5deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(10px) translateX(-5px) rotate(-1deg);
          }
          50% {
            transform: translateY(5px) translateX(5px) rotate(1deg);
          }
          75% {
            transform: translateY(15px) translateX(-3px) rotate(-0.5deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.05;
          }
        }

        @keyframes grid-fade {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(20);
            opacity: 0;
          }
        }

        @keyframes ripple-delayed {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(30);
            opacity: 0;
          }
        }

        .animate-draw {
          animation: draw 2s ease-in-out infinite;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-grid-fade {
          animation: grid-fade 3s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 2s ease-out infinite;
        }

        .animate-ripple-delayed {
          animation: ripple-delayed 2s ease-out infinite 0.5s;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-900 {
          animation-delay: 900ms;
        }
      `}</style>
    </div>
  );
};

export default BenefitsSection;
