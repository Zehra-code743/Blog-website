"use client"; // This line marks the file as a Client Component
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  // Team data
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Kevin Mitnick",
      role: "Security Analyst",
      image: "/About1.png",
      color: "#00a8ff",
    },
    {
      id: 2,
      name: "Hadia Omar",
      role: "Penetration Tester (Ethical Hacker)",
      image: "/About2.png",
      color: "#c730cb",
    },
    {
      id: 3,
      name: "Tina Norris",
      role: "Chief Information Security Officer (CISO)",
      image: "/About3.png",
      color: "#ff3d8c",
    },
  ]);

  return (
    <div className="font-[sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-gray-800 text-4xl sm:text-5xl font-extrabold text-center">
          Our Team
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="rounded-lg p-6 hover:scale-[1.03] transition-all"
              style={{ backgroundColor: member.color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="lg:min-h-[250px] w-full flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full border-4 border-white shadow-xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56"
                />
              </div>

              <div className="mt-6">
                <h4 className="text-lg sm:text-xl text-white font-bold">{member.name}</h4>
                <p className="text-sm sm:text-base text-gray-50 mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
