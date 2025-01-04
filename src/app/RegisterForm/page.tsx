"use client"; // This line marks the file as a Client Component
import { useState } from "react";

export default function RegisterForm() {
  // React state for individual form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-red-400 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 flex">
        {/* Left Column - Image */}
        <div className="hidden lg:block w-1/2 p-4">
          <img
            src="/cybersoftwere.png" // Replace with your image URL
            alt="Register"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Create an Account</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Join us today! Fill in the details below to get started.
          </p>

          <form
            action="/your-form-endpoint" // Replace with your form submission endpoint
            method="POST" 
            className="mt-6 space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Accept Terms */}
            <div className="flex items-center">
              <input
                id="accept-terms"
                name="acceptTerms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="accept-terms" className="ml-2 text-sm text-gray-600">
                I accept the{" "}
                <a href="#" className="text-indigo-600 underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-white font-semibold bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
