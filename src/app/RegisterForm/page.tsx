"use client"; // This line marks the file as a Client Component
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterForm() {
  // React state for individual form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 h-full">
        <div className="max-md:order-2 p-4">
          <motion.img
            src="/Registration.png"
            className="lg:max-w-[90%] max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
        </div>

        <div className="flex items-center md:p-6 p-4 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <motion.form
            className="max-w-sm w-full mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-400">Create an account</h3>
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-2 outline-none"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-2 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-white text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-2 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                id="remember-me"
                name="acceptTerms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 shrink-0 rounded"
              />
              <label
                htmlFor="remember-me"
                className="text-white ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-yellow-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="w-full sm:w-max shadow-xl py-2 px-4 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
              >
                Register
              </button>
              <p className="text-sm text-white mt-6 text-center sm:text-left">
                Already have an account?{" "}
                <a href="javascript:void(0);" className="text-yellow-400 font-semibold hover:underline ml-1">
                  Login here
                </a>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
