import React from "react";
import { ChartNoAxesCombined, KeyRound, Database, Parentheses, ChevronsLeftRightEllipsis, ShieldEllipsis } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  explanation: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Analytics",
      description:
        "Gain insights into your project's performace and API usage effortlessly.",
      explanation:
        "Understand how your APIs are performing and how users interact with your project. Analytics provide actionable insights into response times, error rates, and traffic patterns. This empowers you to optimize backend performance, enhance user experience, and make data-driven decisions..",
      icon: <ChartNoAxesCombined className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Auth",
      description:
        "Secure user access with JWT and role-based permissions",
      explanation:
        "Building projects with unique user bases demands a secure, streamlined approach to authentication. With dedicated login systems for each project, your platform keeps access controlled and data protected.",
      icon: <KeyRound className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Database",
      description: "Data backups ensures data integrity and availability.",
      explanation:
        "Connecting to databases should be as seamless as creating a project itself. By offering easy integration with cloud databases like MongoDB, Postgres, and MySQL, your platform empowers users to manage their data with confidence.",
      icon: <Database className="w-8 h-8 text-white" />,
    },
    {
      id: 4,
      title: "Functions",
      description: "Define and deploy logic with dynamic APIs",
      explanation:
        "By letting users design APIs and data relationships without diving into backend code, you unlock agility. Projects can evolve naturally as needs change, ensuring that backend systems are never a bottleneck for innovation.",
      icon: <Parentheses className="w-8 h-8 text-white" />,
    },
    {
      id: 5,
      title: "Realtime",
      description: "Enable live updates and collabration features.",
      explanation:
        "Whether it’s live data updates, collaborative workflows, or instant feedback, the ability to react in real time transforms the user experience. It’s the secret sauce that keeps users engaged and systems responsive.",
      icon: <ChevronsLeftRightEllipsis className="w-8 h-8 text-white" />,
    },
    {
      id: 6,
      title: "Testing",
      description: "Track API performance and catch issues early.",
      explanation:
        "From API performance to error monitoring, proactive checks ensure that systems are reliable and resilient. By integrating testing from the start, you give developers the tools to deliver confidently, knowing that their work can withstand the demands of production.",
      icon: <ShieldEllipsis className="w-8 h-8 text-white" />,
    },
  ];

  const FeatureCard: React.FC<{
    feature: Feature;
    isLeft: boolean;
    index: number;
  }> = ({ feature, isLeft, index }) => (
    <div
      className={`flex items-center mb-20 px-50 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } relative animate-fadeInUp`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Feature Box */}
      <div
        className={`w-80 p-8 bg-gray-900/60 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/30 hover:bg-gray-900/40 group relative overflow-hidden ${
          isLeft ? "mr-12" : "ml-12"
        }`}
      >
        {/* Inner Fade Effect - Strong fade to invisible */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isLeft
              ? "bg-gradient-to-r from-transparent via-black/30 to-black"
              : "bg-gradient-to-l from-transparent via-black/30 to-black"
          }`}
        ></div>
        <div className="relative z-10">
          <div className="flex items-center mb-6 relative z-10">
            <div className="p-3 bg-gray-800/30 rounded-xl group-hover:bg-gray-700/30 transition-colors duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white/90 ml-4 group-hover:text-white transition-colors duration-300">
              {feature.title}
            </h3>
          </div>
          <p className="text-gray-400/80 text-sm leading-relaxed mb-6 group-hover:text-gray-300/90 transition-colors duration-300 relative z-10">
            {feature.description}
          </p>
          <button className="text-gray-300/80 hover:text-white text-sm font-medium flex items-center transition-all duration-300 group-hover:translate-x-1 relative z-10">
            Learn More
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Connecting Line */}
      <div
        className={`flex-1 flex items-center justify-center relative ${
          isLeft ? "" : ""
        }`}
      >
        <div
          className={`flex items-center ${isLeft ? "" : "flex-row-reverse"}`}
        >
          {/* Animated Line */}
          <div
            className={`h-0.5 bg-gray-600/60 relative overflow-hidden ${
              isLeft ? "w-20" : "w-20"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
          </div>

          {/* Pulsing Dot */}
          <div
            className={`w-4 h-4 rounded-full bg-white/80 ${
              isLeft ? "ml-3" : "mr-3"
            } animate-pulse shadow-lg shadow-white/20`}
          >
            <div className="w-full h-full rounded-full bg-white/60 animate-ping opacity-75"></div>
          </div>

          {/* Extended Line */}
          <div
            className={`h-0.5 bg-gray-600/60 relative overflow-hidden ${
              isLeft ? "w-12 ml-3" : "w-12 mr-3"
            }`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Explanation Text (Not in Box) */}
      <div className={`w-96 ${isLeft ? "ml-8" : "mr-8"}`}>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse mr-3"></div>
          <h4 className="text-lg font-medium text-gray-200/90">
            Why This Matters
          </h4>
        </div>
        <p className="text-gray-400/70 text-sm leading-relaxed hover:text-gray-300/90 transition-colors duration-300">
          {feature.explanation}
        </p>
      </div>

      {/* Floating Number Badge */}
      <div
        className={`absolute ${
          isLeft ? "left-35" : "right-35"
        } top-6 w-10 h-10 bg-gray-800/70 border-2 border-gray-600/50 rounded-full flex items-center justify-center text-white/90 text-sm font-bold shadow-lg hover:border-gray-400/70 transition-colors duration-300 animate-bounce`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="text-center py-20 px-4 relative">
        <h1 className="text-6xl font-bold mb-6 text-white animate-fadeInDown">
          Get Better Result with Stunning
        </h1>
        <h2
          className="text-6xl font-bold text-gray-300 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          Features
        </h2>
        <div className="mt-8 w-24 h-1 bg-gray-600 mx-auto animate-expandWidth"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-8xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-slideDown opacity-30"></div>
          </div>

          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-slideDown {
          animation: slideDown 3s infinite linear;
        }

        .animate-twinkle {
          animation: twinkle 2s infinite ease-in-out;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards;
          animation-delay: 0.6s;
          width: 0;
        }
      `}
      </style>
    </div>
  );
};

export default Features;
