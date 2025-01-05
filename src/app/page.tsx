
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-8">
        {/* Text Content */}
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="text-white lg:text-5xl text-3xl font-bold lg:!leading-[56px] drop-shadow-lg">
            "The Future of Cybersecurity: Emerging Threats and Innovative Solutions"
          </h2>
          <p className="text-white mt-6 text-base leading-relaxed opacity-90">
            In an increasingly digital world, cybersecurity has become a cornerstone of modern society, protecting sensitive data, critical infrastructure, and personal information from malicious attacks.
          </p>
          <button
            type="button"
            className="mt-12 text-white font-bold text-sm rounded-md px-6 py-2.5 bg-blue-700 hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:h-[480px] flex items-center">
          <Image
            src="/cybersecurity2.png"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            alt="Cybersecurity"
            width={480}
            height={480}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12">
        {[
          {
            title: "Customization",
            description:
              "Customized cybersecurity refers to designing and implementing security strategies that address the unique requirements of an organization, industry, or individual.",
            icon: "🔧",
          },
          {
            title: "Support",
            description:
              "Support in cybersecurity refers to the resources, services, and assistance provided to organizations or individuals to maintain and troubleshoot their cybersecurity frameworks.",
            icon: "🛠️",
          },
          {
            title: "Performance",
            description:
              "Performance in cybersecurity typically refers to the effectiveness and efficiency with which an organization's security measures operate to protect digital assets.",
            icon: "📊",
          },
          {
            title: "Security",
            description:
              "Security in cybersecurity refers to the measures, practices, and technologies implemented to protect digital assets, systems, networks, and data from unauthorized access.",
            icon: "🔒",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 mb-4 bg-blue-100 text-blue-500 p-2 rounded-md flex items-center justify-center text-2xl">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600">{card.description}</p>
            <a
              href="#"
              className="text-blue-600 font-bold inline-block text-sm mt-4 hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
