import React, { useEffect, useRef, useState, useCallback } from "react";

interface AnimatedImageContainerProps {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  initialRotation?: number;
  maxRotation?: number;
}

const ImageContainer: React.FC<AnimatedImageContainerProps> = ({
  className = "",
  width = "1200px",
  height = "700px",
  borderRadius = "16px",
  initialRotation = 24,
  maxRotation = 24,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(initialRotation);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  const updateElementPosition = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setElementTop(rect.top + scrollTop);
      setElementHeight(rect.height);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || elementHeight === 0) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Animation starts as soon as element enters viewport
    const animationStartPoint = elementTop - windowHeight;
    const animationEndPoint = elementTop - windowHeight * 0.5;

    if (scrollTop >= animationStartPoint && scrollTop <= animationEndPoint) {
      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollTop - animationStartPoint) /
            (animationEndPoint - animationStartPoint)
        )
      );

      const currentRotation = maxRotation * (1 - progress);
      setRotation(currentRotation);
    } else if (scrollTop < animationStartPoint) {
      setRotation(maxRotation);
    } else if (scrollTop > animationEndPoint) {
      setRotation(0);
    }
  }, [elementTop, elementHeight, maxRotation]);

  useEffect(() => {
    updateElementPosition();

    const timer = setTimeout(() => {
      updateElementPosition();
      handleScroll();
    }, 100);

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    window.addEventListener("resize", updateElementPosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", updateElementPosition);
    };
  }, [updateElementPosition, handleScroll]);

  return (
    <div className="flex justify-center items-center min-h-screen py-20 bg-black">
      <div className="text-center w-full max-w-7xl mx-auto px-8">
        <div
          className="relative mx-auto"
          style={{
            perspective: "2000px",
            perspectiveOrigin: "center center",
          }}
        >
          <div
            ref={containerRef}
            className={`relative transform-gpu ${className}`}
            style={{
              width,
              height,
              transform: `rotateX(${rotation}deg)`,
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Dark Theme Image Container */}
            <div
              className="w-full h-full bg-black flex flex-col items-center justify-center shadow-2xl border border-gray-800 relative overflow-hidden"
              style={{
                borderRadius,
                boxShadow: `0 ${Math.abs(rotation) * 3}px ${
                  Math.abs(rotation) * 6
                }px rgba(0,0,0,0.4), 
                         0 ${Math.abs(rotation) * 1}px ${Math.abs(
                  rotation * 3
                )}px rgba(0,0,0,0.3)`,
              }}
            >
              {/* Grid Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              {/* Central Content Area */}
              <div className="relative z-10 text-center p-12 max-w-4xl">
                <p className="text-white">Image Container</p>
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
