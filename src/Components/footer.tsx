"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer-parent bg-gray-900 text-gray-300 py-10 px-6"
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
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <FaShieldAlt className="mr-2 text-blue-500" /> CyberSecurity 
          </h2>
          <p className="text-gray-400 leading-relaxed">
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
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <FaFacebook className="text-blue-500" />
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FaTwitter className="text-blue-400" />
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-700" />
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
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
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">
            For inquiries or support, reach us at:
          </p>
          <p className="text-blue-500 mt-2">support@cybersec.com</p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2025 CyberSec . All rights reserved.</p>
      </div>
    </motion.footer>
  );
}