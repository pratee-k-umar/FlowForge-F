import React from "react";

const features = [
  {
    title: "Self-Hosted",
    description: "Own your data or host it on a cloud region of choice.",
    icon: "🏠",
  },
  {
    title: "Encryption",
    description: "Built-in data encryption both in rest and in transit.",
    icon: "🔒",
  },
  {
    title: "Abuse Protection",
    description: "Protect your APIs from abuse with built-in protection.",
    icon: "🛡️",
  },
  {
    title: "Data Migrations",
    description:
      "Easily transfer data from 3rd parties or between Cloud and self-hosted.",
    icon: "🔄",
  },
  {
    title: "GDPR",
    description:
      "Safeguard user data and privacy with provided GDPR regulations.",
    icon: "📜",
  },
  {
    title: "SOC-2",
    description: "Ensure the highest level of security and privacy protection.",
    icon: "🔐",
  },
];

const PrivacySecuritySection: React.FC = () => {
  return (
    <section className="bg-white text-green-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-sm font-semibold bg-green-200 text-green-800 py-1 px-3 rounded-full inline-block mb-4">
          PRIVACY & SECURITY
        </span>
        <h2 className="text-4xl font-bold mb-4">
          Self-host your data or take it to the Cloud
        </h2>
        <p className="text-lg mb-12">
          Migrate your data from and to any platform at any time with Appwrite
          Migrations. With built-in security and privacy for peace of mind.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:border-t-green-300 hover-border-t-4 transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-green-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySecuritySection;
