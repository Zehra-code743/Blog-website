"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer-parent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <motion.div
          className="about-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaShieldAlt className="mr-2 text-blue-200" /> CyberSecurity
          </h2>
          <p className="leading-relaxed">
            We provide cutting-edge cybersecurity solutions to protect your
            digital assets. With advanced tools and expertise, your safety is our
            priority.
          </p>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <FaFacebook className="text-blue-200" />
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-300"
              >
                Facebook
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FaTwitter className="text-blue-300" />
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-400"
              >
                Twitter
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-400" />
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-500"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="contact-us"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>
            For inquiries or support, reach us at:
          </p>
          <p className="text-blue-200 mt-2 hover:text-blue-300">
            support@cybersec.com
          </p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-blue-300 pt-4 text-center text-sm">
        <p>&copy; 2025 CyberSec. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
