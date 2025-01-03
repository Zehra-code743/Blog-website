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
      className="bg-green-50 font-[sans-serif] lg:h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
        <motion.div
          className="max-w-lg mx-auto text-center mb-6 lg:col-span-1"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.
          </p>

          {submitted && (
            <motion.p
              className="text-green-600 mt-4 font-semibold"
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
            className="mx-auto mt-4 bg-white rounded-lg p-6 shadow-md space-y-4"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              whileFocus={{ scale: 1.05 }}
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
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="text-gray-800 bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="z-10 relative lg:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/Contact.png"
            alt="Contact Image"
            width={1200}
            height={800}
            className="w-full sm:w-3/4 lg:w-full xl:w-full object-contain block mx-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
