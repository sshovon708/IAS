import { Link } from "react-router-dom";
import profileImage from "../assets/images/my-image.jpg";

export default function Home() {
  // আপনার হোম পেজে দেখানোর জন্য ৩টি সেরা প্রোজেক্ট
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Web App",
      description:
        "A full-featured online shopping platform with payment gateway integration and dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      id: 2,
      title: "Task Management Tool",
      description:
        "A real-time kanban board application for teams to manage tasks and collaborate seamlessly.",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A clean, modern, and lightning-fast developer portfolio template using React and Tailwind v4.",
      tags: ["React", "Tailwind v4", "Vite"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden">
      {/* ─── [১] জ্যামিতিক ও গ্লোয়িং ব্যাকগ্রাউন্ড শেপস (যা আগে হারিয়ে গিয়েছিল) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Large pale blue circle — bleeds off top-right */}
        <div className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-blue-50 border border-blue-100/60" />
        {/* Smaller indigo ring inside */}
        <div className="absolute top-16 right-16 w-[420px] h-[420px] rounded-full border-2 border-indigo-100/70" />
        {/* Accent dot cluster */}
        <div className="absolute top-28 right-64 w-3 h-3 rounded-full bg-blue-400/50" />
        <div className="absolute top-48 right-44 w-2 h-2 rounded-full bg-indigo-400/40" />
        <div className="absolute top-72 right-72 w-1.5 h-1.5 rounded-full bg-blue-300/60" />
        {/* Bottom-left soft wash */}
        <div className="absolute top-[40rem] -left-24 w-[380px] h-[380px] rounded-full bg-slate-50 border border-slate-100/80" />
        {/* Subtle vertical rule */}
        <div className="absolute top-0 right-[38%] w-px h-[60rem] bg-gradient-to-b from-transparent via-slate-200/50 to-transparent" />
      </div>

      {/* ─── [২] HERO SECTION ─── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-32 pb-24 border-b border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ─── LEFT — Copy ─── */}
          <div className="flex flex-col gap-8 animate-[fadeUp_0.65s_ease_both]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 self-start">
              <span className="w-8 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-semibold tracking-[0.18em] uppercase">
                Full Stack Developer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-[4.5rem] font-black leading-[1.05] tracking-tight text-slate-900">
              Building Modern <br />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-blue-600">
                  Web Solutions
                </span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7 Q55 2 110 6 Q165 10 218 4"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>
              <br />
              From Scratch.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-slate-500 max-w-md leading-relaxed font-light">
              Hi, I'm{" "}
              <span className="font-semibold text-slate-800">Shovon</span> — a
              passionate Full-Stack Developer, who turns complex
              problems into clean, performant, and beautiful web applications.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "PostgreSQL",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-slate-100">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Shipped" },
                { value: "10+", label: "Happy Clients" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900">
                    {value}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT — Profile image (with glowing background elements) ─── */}
          <div className="relative flex items-center justify-center animate-[fadeUp_0.65s_0.18s_ease_both]">
            {/* Slow-spin dashed ring */}
            <div className="absolute w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border-2 border-dashed border-blue-200/60 animate-[spin_30s_linear_infinite]" />

            {/* Counter-rotating ring with orbiting dot */}
            <div className="absolute w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] rounded-full border border-indigo-200/50 animate-[spin_20s_linear_infinite_reverse]">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_4px_rgba(37,99,235,0.35)]" />
            </div>

            {/* Glow backdrop */}
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 blur-2xl opacity-80" />

            {/* Photo — floating */}
            <div className="relative z-10 animate-[float_5s_ease-in-out_infinite]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-xl scale-105 translate-y-4" />

              {/* Image frame */}
              <div className="relative w-64 h-72 lg:w-80 lg:h-[360px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-blue-100/80">
                <img
                  src={profileImage}
                  alt="Shovon — Full Stack Developer"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              {/* Corner star accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 shadow-lg shadow-blue-300/50 flex items-center justify-center">
                <span className="text-white text-xs font-black">✦</span>
              </div>
            </div>

            {/* Floating badge — top-left */}
            <div className="absolute top-6 left-0 lg:-left-6 animate-[float_5s_1.2s_ease-in-out_infinite] z-20">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100/80">
                <span className="text-lg">👨‍💻</span>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-none">
                    Open to Work
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Available now
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
              </div>
            </div>

            {/* Floating badge — bottom-right */}
            <div className="absolute bottom-8 right-0 lg:-right-4 animate-[float_5s_2.5s_ease-in-out_infinite] z-20">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-blue-600 shadow-xl shadow-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-blue-200 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <div>
                  <p className="text-xs font-bold text-white leading-none">
                    Clean Code
                  </p>
                  <p className="text-[10px] text-blue-300 mt-0.5">Always</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── [৩] FEATURED PROJECTS SECTION (মার্জ করা হলো) ─── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-24">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-wider uppercase mb-2">
                My Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
            >
              See All Projects
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* প্রজেক্ট কার্ড গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 border border-slate-200 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CSS Keyframes ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);   }
          50%      { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
