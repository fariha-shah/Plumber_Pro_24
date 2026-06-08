// Blog Page - List of plumbing tips and articles
// Author: Wajeeha Habib | TechNexus Internship

import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import heroImg from '../assets/hero.png';

// Dummy blog posts data
// TODO: Replace with GET /api/blog when backend is ready
const blogPosts = [
  {
    id: 1,
    title: '10 Signs You Need Emergency Plumbing Service',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    category: 'Emergency',
    author: 'John Smith',
    date: 'May 15, 2026',
    readTime: '5 min read',
    categoryColor: 'bg-red-100 text-[#DC2626]',
  },
  {
    id: 2,
    title: 'How to Prevent Drain Blockages in Your Home',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    category: 'Tips',
    author: 'Mike Johnson',
    date: 'May 12, 2026',
    readTime: '4 min read',
    categoryColor: 'bg-blue-100 text-[#2563EB]',
  },
  {
    id: 3,
    title: 'Water Heater Installation: What You Need to Know',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    category: 'Installation',
    author: 'David Lee',
    date: 'May 10, 2026',
    readTime: '6 min read',
    categoryColor: 'bg-green-100 text-[#10B981]',
  },
  {
    id: 4,
    title: 'DIY Plumbing Tips Every Homeowner Should Know',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    category: 'DIY',
    author: 'Ali Hassan',
    date: 'May 8, 2026',
    readTime: '7 min read',
    categoryColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 5,
    title: 'How to Choose the Right Plumber for Your Home',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    category: 'Guide',
    author: 'John Smith',
    date: 'May 5, 2026',
    readTime: '3 min read',
    categoryColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 6,
    title: 'Top 5 Common Plumbing Problems and How to Fix Them',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    category: 'Tips',
    author: 'Mike Johnson',
    date: 'May 2, 2026',
    readTime: '5 min read',
    categoryColor: 'bg-blue-100 text-[#2563EB]',
  },
];

// Categories for filter
const categories = ['All', 'Emergency', 'Tips', 'Installation', 'DIY', 'Guide'];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── PAGE HERO BANNER ── */}
      <div className="bg-[#2563EB] py-16 px-4 md:px-10 text-center">
        <p
          className="text-[#ffffff] text-xs font-bold tracking-widest
          uppercase mb-3"
        >
          Our Blog
        </p>
        <h1
          className="font-black font-poppins text-white uppercase
          text-3xl md:text-5xl mb-4"
        >
          PLUMBING TIPS & NEWS
        </h1>
        <p className="text-[#ffffff] text-sm max-w-xl mx-auto">
          Expert plumbing advice, DIY tips and industry news to keep your home
          running smoothly.
        </p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        {/* ── CATEGORY FILTER TABS ── */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-xs font-bold
                tracking-wider uppercase transition
                ${
                  cat === 'All'
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#2563EB] hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── FEATURED POST (first post big) ── */}
        <div
          className="bg-[#F1F5F9] rounded-3xl overflow-hidden
          grid md:grid-cols-2 gap-0 mb-12 group cursor-pointer
          hover:shadow-xl transition"
        >
          {/* Image */}
          <div className="h-64 md:h-auto bg-[#e2e8f0] overflow-hidden">
            <img
              src={heroImg}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover
                group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {/* Category + Featured badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold
                ${blogPosts[0].categoryColor}`}
              >
                {blogPosts[0].category}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold
                bg-[#0F172A] text-white"
              >
                Featured
              </span>
            </div>

            {/* Title */}
            <h2
              className="font-black font-poppins text-[#0F172A]
              text-2xl md:text-3xl leading-tight mb-4
              group-hover:text-[#2563EB] transition"
            >
              {blogPosts[0].title}
            </h2>

            {/* Excerpt */}
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              {blogPosts[0].excerpt}
            </p>

            {/* Meta info */}
            <div
              className="flex items-center gap-4 text-xs
              text-[#64748B] mb-6"
            >
              <span className="flex items-center gap-1">
                <User size={12} /> {blogPosts[0].author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {blogPosts[0].date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {blogPosts[0].readTime}
              </span>
            </div>

            {/* Read More */}
            <Link to={`/blog/${blogPosts[0].id}`}>
              <button
                className="flex items-center gap-2 px-6 py-3
                bg-[#2563EB] text-white rounded-lg font-bold text-xs
                tracking-wider uppercase hover:bg-blue-700 transition
                w-fit"
              >
                READ MORE <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>

        {/* ── BLOG GRID - remaining posts ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6"
        >
          {blogPosts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Blog Card Component ───────────────────────────────────────────
function BlogCard({ post }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm
      border border-gray-100 hover:shadow-xl transition
      group cursor-pointer"
    >
      {/* Image */}
      <div className="h-48 bg-[#F1F5F9] overflow-hidden">
        <img
          src={heroImg}
          alt={post.title}
          className="w-full h-full object-cover
            group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span
          className={`inline-block px-3 py-1 rounded-full
          text-xs font-bold mb-3 ${post.categoryColor}`}
        >
          {post.category}
        </span>

        {/* Title */}
        <h3
          className="font-bold font-poppins text-[#0F172A] text-lg
          leading-tight mb-3 group-hover:text-[#2563EB] transition"
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-[#64748B] text-sm leading-relaxed mb-4
          line-clamp-3"
        >
          {post.excerpt}
        </p>

        {/* Divider */}
        <hr className="border-gray-100 mb-4" />

        {/* Meta + Read More */}
        <div className="flex items-center justify-between">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-[#64748B]">
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>

          {/* Arrow */}
          <Link to={`/blog/${post.id}`}>
            <div
              className="w-8 h-8 bg-[#F1F5F9] rounded-full
              flex items-center justify-center text-[#2563EB]
              hover:bg-[#2563EB] hover:text-white transition"
            >
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
