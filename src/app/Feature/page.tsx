export default function Feature() {
  const features = [
    {
      title: "Customization",
      description: "Tailor our product to suit your needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 32 32">
          <path d="..." />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "Your data is protected by the latest security measures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 682.667 682.667">
          <path d="..." />
        </svg>
      ),
    },
    {
      title: "Support",
      description: "24/7 customer support for all your inquiries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 512.001 512.001">
          <path d="..." />
        </svg>
      ),
    },
    // Add more features here...
  ];

  return (
    <div className="font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">
          Discover Our Exclusive Features
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-md:max-w-lg mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
