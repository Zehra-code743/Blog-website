export default function Feature() {
  const features = [
    {
      title: "Customization",
      description: "Tailor our product to suit your needs.",
      icon: "⚙️", // Placeholder icon
    },
    {
      title: "Security",
      description: "Your data is protected by the latest security measures.",
      icon: "🔒", // Placeholder icon
    },
    {
      title: "Support",
      description: "24/7 customer support for all your inquiries.",
      icon: "📞", // Placeholder icon
    },
    // Add more features here...
  ];

  return (
    <div className="font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-white sm:text-4xl text-3xl font-extrabold text-center mb-12 leading-snug">
          Discover Our Exclusive Features
        </h2>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl group p-8 text-center bg-gradient-to-br from-purple-700 to-indigo-700 text-white hover:scale-105 hover:shadow-2xl hover:bg-white hover:text-purple-800 transition-all duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-white text-purple-800 rounded-full mx-auto shadow-lg group-hover:shadow-purple-800 transition duration-300 text-3xl">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-300 group-hover:text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
