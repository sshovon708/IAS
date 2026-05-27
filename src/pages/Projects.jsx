import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  // প্রজেক্ট ফিল্টার করার জন্য স্টেট
  const [filter, setFilter] = useState("All");

  // আপনার আসল বা ডামি প্রজেক্টের লিস্ট (এখানে আপনি পরে নিজের মতো চেঞ্জ করতে পারবেন)
  const myProjects = [
    {
      id: 1,
      title: "Premium E-Commerce Platform",
      description:
        "A complete online shopping solution featuring secure checkout, product management dashboard, and real-time order tracking.",
      category: "Full-Stack",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/sshovon708",
    },
    {
      id: 2,
      title: "Real-Time Task Manager",
      description:
        "A collaborative Kanban-style board application where teams can create, assign, and track tasks dynamically.",
      category: "Full-Stack",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/sshovon708",
    },
    {
      id: 3,
      title: "Modern Developer Portfolio",
      description:
        "A lightning-fast, highly optimized creative portfolio website with glassmorphism UI elements and fluid layout.",
      category: "Frontend",
      tags: ["React", "Vite", "Tailwind v4", "Framer Motion"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/sshovon708",
    },
    {
      id: 4,
      title: "AI Chat Interface UI",
      description:
        "A clean and intuitive user interface designed for seamless interactions with AI language models, supporting dark mode.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/sshovon708",
    },
  ];

  // ফিল্টার অনুযায়ী প্রজেক্ট আলাদা করা
  const filteredProjects =
    filter === "All"
      ? myProjects
      : myProjects.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden pt-28 pb-20">
      {/* ─── background elements ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-50/40 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-[fadeUp_0.65s_ease_both]">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
              Showcase
            </span>
            <span className="w-6 h-px bg-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            My Creative <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed">
            আমি যেসব প্রজেক্ট তৈরি করেছি তার একটি সংকলন। আইডিয়া থেকে শুরু করে
            কোডিং এবং ডিপ্লয়মেন্ট—প্রতিটি ধাপে ক্লিন কোড মেইনটেইন করার চেষ্টা
            করেছি।
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-12 animate-[fadeUp_0.65s_0.1s_ease_both]">
          {["All", "Frontend", "Full-Stack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === tab
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 scale-105"
                  : "bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeUp_0.65s_0.2s_ease_both]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Category Badge */}
                <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium rounded bg-slate-50 border border-slate-200 text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors ml-auto"
                  >
                    Live Demo <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
}
