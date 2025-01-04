"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing motion for animations
import { FaUserCircle, FaCommentDots } from 'react-icons/fa'; // Importing icons from react-icons

type Data = {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
};

const cybersecurityData: Data[] = [
  {
    id: 1,
    title: "Understanding CyberSecurity",
    description: "Learn the basics of protecting your digital life from threats.",
    content:
      "Cybersecurity involves defending your computer systems, networks, and data from digital attacks. This blog explores the various types of cyber threats and offers insights into how you can protect your personal and professional information from hackers and malicious software.",
    imageUrl: "/understanding.png",
  },
  {
    id: 2,
    title: "The Rise of Cyber Attacks",
    description: "How cyber threats are becoming more sophisticated.",
    content:
      "Cyberattacks have become increasingly sophisticated over the years. In this post, we will examine some of the most common types of cyberattacks, such as phishing, ransomware, and DDoS attacks. Understanding these threats can help you take proactive steps to secure your systems.",
    imageUrl: "/cyberattacks.png",
  },
  {
    id: 3,
    title: "Protecting Your Personal Data",
    description: "Best practices to secure your personal information.",
    content:
      "In todays digital age, securing your personal data is more important than ever. This guide will provide practical steps for safeguarding sensitive information such as passwords, banking details, and other private data from cybercriminals. Learn about strong passwords, encryption, and multi-factor authentication.",
    imageUrl: "/Dataprotection.png",
  },
  {
    id: 4,
    title: "CyberSecurity Best Practices",
    description: "Key steps to ensure your online safety.",
    content:
      "Whether you're an individual or a business, implementing cybersecurity best practices is crucial for staying safe online. In this post, we will share tips such as using strong, unique passwords, applying software updates regularly, and educating yourself about the latest cyber threats.",
    imageUrl: "/cyberpractice.png",
  },
  {
    id: 5,
    title: "The Future of CyberSecurity",
    description: "How emerging technologies are shaping cybersecurity.",
    content:
      "The world of cybersecurity is constantly evolving. With the rise of artificial intelligence, machine learning, and blockchain, the future of digital security looks both exciting and challenging. This article explores how these emerging technologies are transforming the way we defend against cyber threats.",
    imageUrl: "/cyberfuture.png",
  },
  {
    id: 6,
    title: "CyberSecurity Careers",
    description: "Exploring job opportunities in the growing field of cybersecurity.",
    content:
      "As cyber threats grow, so does the demand for cybersecurity professionals. This post explores various career paths in cybersecurity, from ethical hacking to security analysis. We’ll also provide tips on how to get started and the skills you will need to succeed in this rapidly growing field.",
    imageUrl: "/cybercareers.png",
  },
];

const BlogPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [selectedBlog, setSelectedBlog] = useState<Data | undefined>(undefined);
  const [name, setName] = useState(""); // Name input state
  const [comment, setComment] = useState(""); // Comment input state
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]); // State for the list of comments

  useEffect(() => {
    const blog = cybersecurityData.find((i) => i.id === parseInt(id));
    if (blog) {
      setSelectedBlog(blog);
    }
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (name.trim() && comment.trim()) {
      const newComment = { name, comment };
      setComments((prevComments) => [...prevComments, newComment]); // Add new comment to the list
      setName(""); // Clear name input after submit
      setComment(""); // Clear comment input after submit
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="blog-container px-4 py-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      {selectedBlog ? (
        <motion.div
          className="blog-content max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }} // Initial state (invisible, below screen)
          animate={{ opacity: 1, y: 0 }}  // Animated to visible state
          transition={{ duration: 0.8 }}  // Transition duration
        >
          <motion.div
            className="image-container mb-6"
            initial={{ scale: 0.9 }}  // Initial image size
            animate={{ scale: 1 }}    // Animate image to normal size
            transition={{ duration: 0.6 }}
          >
            <Image
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              width={800}
              height={400}
              className="rounded-xl shadow-xl mx-auto transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.h2
            className="text-4xl font-extrabold text-gray-800 mb-4 transition-transform duration-300 hover:translate-x-2"
            initial={{ opacity: 0 }}    // Initial opacity for title
            animate={{ opacity: 1 }}    // Animate to full opacity
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {selectedBlog.title}
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 text-lg italic"
            initial={{ opacity: 0 }}    // Initial opacity for description
            animate={{ opacity: 1 }}    // Animate to full opacity
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {selectedBlog.description}
          </motion.p>

          <motion.div
            className="content text-gray-700 text-base leading-relaxed"
            initial={{ opacity: 0 }}    // Initial opacity for content
            animate={{ opacity: 1 }}    // Animate to full opacity
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>{selectedBlog.content}</p>
          </motion.div>

          {/* Comment Section */}
          <div className="comments-section mt-8 bg-gradient-to-r from-teal-50 to-lime-50 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Leave a Comment</h3>

            {/* Comment Form */}
            <div className="comment-form mb-6">
              <input
                type="text"
                className="w-full p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name
              />
              <textarea
                className="w-full p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)} // Update comment
              />
              <button
                onClick={handleCommentSubmit}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Submit Comment
              </button>
            </div>

            {/* Display Comments Heading */}
            <h4 className="text-lg font-semibold mt-6 mb-4 text-gray-700">Comments</h4>

            {/* Display Submitted Comments */}
            <div className="existing-comments">
              {comments.length > 0 ? (
                comments.map((commentData, index) => (
                  <div
                    key={index}
                    className="comment p-4 mb-4 bg-gray-200 rounded-lg shadow-sm flex items-start transition-all hover:bg-gray-300"
                  >
                    {/* User Icon */}
                    <div className="mr-4">
                      <FaUserCircle className="text-gray-600 text-3xl" />
                    </div>
                    {/* Comment Content */}
                    <div>
                      <h4 className="font-semibold text-gray-800">{commentData.name}</h4>
                      <div className="flex items-center">
                        <FaCommentDots className="text-gray-500 mr-2" />
                        <p className="text-gray-700">{commentData.comment}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <p className="text-center text-xl text-gray-500">Blog not found.</p>
      )}
    </div>
  );
};

export default BlogPage;
