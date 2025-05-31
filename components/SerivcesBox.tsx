"use client";

import Image from "next/image";
import { Shield, Database, HardDrive, Zap, MessageSquare, Globe, Radio } from 'lucide-react';


type ServiceBoxProps = {
  hoverKey: { label: string }[];
  hovered: boolean;
};

export default function ServiceBox({ hoverKey, hovered }: ServiceBoxProps) {
  const products = [
    {
      icon: Shield,
      title: "Auth",
      description: "Secure login with multi-factor auth.",
    },
    {
      icon: Database,
      title: "Databases",
      description: "Scalable and robust databases.",
    },
    {
      icon: Zap,
      title: "Functions",
      description: "Deploy & scale serverless functions.",
    },
    {
      icon: Radio,
      title: "Realtime",
      description: "Subscribe and react to any event.",
    },
    {
      icon: HardDrive,
      title: "Testing",
      description: "Advanced compression and encryption.",
    },
    {
      icon: MessageSquare,
      title: "Messaging",
      description: "Set up a full-functioning messaging service.",
    }
  ];
  return (
    <div
      className={`absolute top-25 left-1/2 transform -translate-x-1/2 shadow-2xl ${
        hoverKey[1] && hovered ? "block" : "hidden"
      }`}
    >
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products Section */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-green-600 mb-6 tracking-wider uppercase">
                PRODUCTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-green-900 mb-2">
                            {product.title}
                          </h3>
                          <p className="text-green-700 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 row-2 gap-4">
        
      </div> */}
    </div>
  );
}
