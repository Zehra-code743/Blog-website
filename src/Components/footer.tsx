"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer-parent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-4" // Increased padding-top
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <motion.div
          className="about-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg font-semibold mb-3 flex items-center">
            <FaShieldAlt className="mr-2 text-blue-200" /> CyberSecurity
          </h2>
          <p className="text-sm leading-relaxed">
            We provide cutting-edge cybersecurity solutions to protect your digital assets. Your safety is our priority.
          </p>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
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
            <li className="flex items-center space-x-2">
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
            <li className="flex items-center space-x-2">
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
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">
            For inquiries or support, reach us at:
          </p>
          <p className="text-blue-200 mt-2 hover:text-blue-300">
            support@cybersec.com
          </p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-blue-300 pt-3 text-center text-xs">
        <p>&copy; 2025 CyberSec. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
