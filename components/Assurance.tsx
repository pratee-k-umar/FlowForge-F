import React, { useEffect, useRef, useState } from "react";

const Assurance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBoxes, setShowBoxes] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay the boxes animation
          setTimeout(() => {
            setShowBoxes(true);
          }, 800);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div ref={componentRef} className="max-w-7xl mx-auto min-h-[120vh]">
        {/* Dashboard Interface */}
        <div className="relative">
          {/* Main Dashboard Image Placeholder */}
          <div
            className={`relative mx-auto max-w-4xl transition-all duration-1000 ease-out ${
              isVisible
                ? "transform rotate-0 opacity-100"
                : "transform rotate-x-12 opacity-0 translate-y-20"
            }`}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Placeholder Rectangle Box */}
            <div
              className="bg-gray-800 rounded-2xl mx-auto shadow-2xl relative overflow-hidden"
              style={{ width: "800px", height: "600px", maxWidth: "100%" }}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-2xl">
                Dashboard Image Placeholder
              </div>

              {/* Border overlay that fades out at bottom */}
              <div className="absolute inset-0 rounded-2xl border border-gray-700 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-2xl"></div>

              {/* Gradient fade overlay from halfway down */}
              <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            {/* Overlaid Text */}
            <div className="absolute bottom-0 left-0 right-0 text-center pb-16 px-8 z-50">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
                See your products grow
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Keep track of your projects progress on the Appwrite Console and
                see them grow into products users love and use every day.
              </p>
            </div>
          </div>

          {/* Floating Stats Cards - All with consistent sizing */}
          <div className="absolute -top-8 -left-8 md:-left-16 z-0">
            <div
              className={`bg-gray-900 rounded-2xl px-10 py-6 border border-gray-800 shadow-2xl transition-all duration-700 ease-out flex justify-center items-center gap-10 ${
                showBoxes
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div>
                <div className="text-gray-400 text-sm mb-2 flex items-center">
                  <span className="mr-2">📁</span> STORAGE
                </div>
                <div className="text-6xl font-bold mb-2">
                  8.0 <span className="text-lg text-gray-400">GB</span>
                </div>
                <div className="text-gray-400 text-sm">Storage</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mt-1">Buckets: 44</div>
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">68% used</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 md:-left-16 z-0">
            <div
              className={`bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-2xl transition-all duration-700 ease-out ${
                showBoxes
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="text-4xl font-bold mb-2">
                1.20 <span className="text-lg text-gray-400">GB</span>
              </div>
              <div className="text-gray-400 text-sm mb-2">Bandwidth</div>
              <div className="mt-4">
                <div className="flex space-x-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-white rounded-sm"
                      style={{ height: `${Math.random() * 40 + 10}px` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>15 July</span>
                  <span>16 Aug</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 md:-right-16 z-0">
            <div
              className={`bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-2xl transition-all duration-700 ease-out ${
                showBoxes
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="text-6xl font-bold mb-2">100.0K</div>
              <div className="text-gray-400 text-sm">Realtime connections</div>
              <div className="mt-4">
                <div className="flex space-x-1 items-end">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 bg-white rounded-sm"
                      style={{ height: `${Math.random() * 60 + 20}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 md:-right-16 z-0">
            <div
              className={`bg-gray-900 rounded-2xl px-20 py-6 border border-gray-800 shadow-2xl transition-all duration-700 ease-out ${
                showBoxes
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="text-6xl font-bold mb-2">6.8K</div>
              <div className="text-gray-400 text-sm">Requests</div>
              <div className="mt-4 relative">
                <svg viewBox="0 0 100 50" className="w-full h-16">
                  <path
                    d="M0,40 Q25,10 50,25 T100,15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-0">
            <div
              className={`bg-gray-900 rounded-2xl px-20 py-6 border border-gray-800 shadow-2xl transition-all duration-700 ease-out h-40 ${
                showBoxes
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-gray-400 text-sm mb-2 flex items-center">
                <span className="mr-2">⚡</span> FUNCTIONS
              </div>
              <div className="text-5xl font-bold mb-2">846</div>
              <div className="text-gray-400 text-sm">Executions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assurance;
