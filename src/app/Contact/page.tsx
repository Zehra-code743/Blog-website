"use client"; // This line marks the file as a Client Component
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-r from-green-200 to-blue-100 font-sans min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid lg:grid-cols-2 items-center w-full max-w-6xl mx-auto p-6 lg:p-12 shadow-lg rounded-lg bg-white">
        {/* Left Column - Image */}
        <motion.div
          className="w-full"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/contact.png"
            alt="contact Image"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-full"
            priority
          />
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="w-full space-y-6"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-600 text-center">
            We’re excited to hear from you! Fill out the form, and we’ll get back to you as soon as possible.
          </p>

          {submitted && (
            <motion.p
              className="text-green-600 text-center font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 3000);
            }}
            className="space-y-4"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-md px-4 py-3 bg-gray-100 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-green-400 transition"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-md px-4 py-3 bg-gray-100 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-green-400 transition"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full rounded-md px-4 py-3 bg-gray-100 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-green-400 transition"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-md px-4 py-3 bg-gray-100 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-green-400 transition"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-green-500 text-white font-semibold rounded-md px-6 py-3 w-full shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}