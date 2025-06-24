import React, { useState, useEffect, useRef } from "react";

const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "A great fit for passion projects and small applications.",
      buttonText: "Start building",
      buttonStyle:
        "border border-gray-600 text-white hover:bg-gray-800 hover:border-white",
      popular: false,
      delay: 0,
    },
    {
      name: "Pro",
      price: "$15",
      period: "/month",
      description:
        "For production applications that need powerful functionality and resources to scale.",
      buttonText: "Start building",
      buttonStyle:
        "bg-white text-black hover:bg-gray-200 transform hover:scale-105",
      popular: true,
      delay: 100,
    },
    {
      name: "Scale",
      price: "$599",
      period: "/month",
      description:
        "For teams that handle more complex and large projects and need more control and support.",
      buttonText: "Start building",
      buttonStyle:
        "border border-gray-600 text-white hover:bg-gray-800 hover:border-white",
      popular: false,
      delay: 200,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For enterprises that need more power and premium support.",
      buttonText: "Contact us",
      buttonStyle:
        "border border-gray-600 text-white hover:bg-gray-800 hover:border-white",
      popular: false,
      delay: 300,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black text-white font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Start building like a team of
              <br />
              hundreds today<span className="text-white animate-pulse">_</span>
            </h1>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 transform hover:scale-105">
                Start building for free
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 hover:border-white transition-all duration-300 transform hover:scale-105">
                View pricing plans
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 border border-gray-800 hover:border-gray-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              } ${
                hoveredCard === index
                  ? "transform scale-105 bg-gray-800/70 shadow-2xl shadow-white/10"
                  : ""
              } ${plan.popular ? "ring-2 ring-white/50" : ""}`}
              style={{
                transitionDelay: isVisible ? `${plan.delay}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-gray-400 text-lg mb-2 transition-colors duration-300 hover:text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold transition-all duration-300 hover:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed transition-colors duration-300 hover:text-white">
                {plan.description}
              </p>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Pricing;
