"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type IData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const initialData: IData[] = [
  {
    id: 1,
    title: "Understanding CyberSecurity",
    description:
      "An introduction to protecting systems, networks, and data from digital threats.",
    imageUrl: "/cybersoftwere.png",
  },
  {
    id: 2,
    title: "The Rise of Cyber Attacks",
    description:
      "A look at the increasing threat of cyber attacks and how to defend against them.",
    imageUrl: "/systemhacked.png",
  },
  {
    id: 3,
    title: "Protecting Your Personal Data",
    description: "Learn essential tips for safeguarding your personal data online.",
    imageUrl: "/cybersecurity2.png",
  },
  {
    id: 4,
    title: "CyberSecurity Best Practices",
    description: "Key strategies for staying safe and secure in the digital world.",
    imageUrl: "/cybersecurity.png",
  },
  {
    id: 5,
    title: "The Future of CyberSecurity",
    description: "Exploring trends and predictions in the cybersecurity industry.",
    imageUrl: "/cyberscope.png",
  },
  {
    id: 6,
    title: "CyberSecurity Careers",
    description:
      "Opportunities and advice for those interested in a career in cybersecurity.",
    imageUrl: "/cyberfurastic.png",
  },
];

export default function Blogs() {
  const [blogs, setBlogs] = useState<IData[]>([]);

  useEffect(() => {
    setBlogs(initialData);
  }, []);

  return (
    <div className="blogs-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-200">
      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          className="blog-card relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-lg">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
              {blog.description}
            </p>
            <Link href={`/blogs/${blog.id}`}>
              <button className="read-more-btn text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
