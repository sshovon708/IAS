import { Link } from "react-router-dom";
import myAboutImage from "../assets/images/my-image.jpg";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

export default function About() {
  // আপনার স্কিল সেটের লিস্ট
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-xl text-blue-600" />,
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Backend & Database",
      icon: <FaServer className="text-xl text-indigo-600" />,
      skills: ["Node.js", "Express", "C / C++ Basics", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Others",
      icon: <FaCode className="text-xl text-emerald-600" />,
      skills: [
        "Git & GitHub",
        "Vite",
        "REST APIs",
        "Clean Architecture",
        "UI/UX Optimization",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden pt-28 pb-20">
      {/* ─── Background Elements ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-40 -right-24 w-[500px] h-[500px] rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-20 -left-24 w-[450px] h-[450px] rounded-full bg-indigo-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* ─── ১. INTRO SECTION ─── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          {/* বাম পাশে ছবি (হোম পেজের মতো স্টাইলিশ ফ্রেম) */}
          <div className="lg:col-span-5 flex justify-center animate-[fadeUp_0.65s_ease_both]">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-xl scale-105 translate-y-4" />
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-[360px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-blue-100/80 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                <img
                  src={myAboutImage}
                  alt="Iftakhar Ahmmed Shovon"
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>
            </div>
          </div>

          {/* ডান পাশে টেক্সট ও ডেসক্রিপশন */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-[fadeUp_0.65s_0.1s_ease_both]">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
                My Story
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              About <span className="text-blue-600">Me</span>
            </h1>

            <div className="space-y-4 text-base text-slate-500 font-light leading-relaxed">
              <p>
                হাই, আমি{" "}
                <span className="font-semibold text-slate-800">
                  শোভন (Iftakhar Ahmmed Shovon)
                </span>
                । আমি একজন প্যাশনেট ফুল-স্ট্যাক এবং ফ্রন্টএন্ড ওয়েব ডেভেলপার।
                জটিল কোড বা লজিক্যাল সমস্যাগুলোকে চমৎকার, পারফরম্যান্ট এবং
                ইউজার-ফ্রেন্ডলি ইন্টারফেসে রূপান্তর করতেই আমি সবচেয়ে বেশি
                স্বাচ্ছন্দ্যবোধ করি।
              </p>
              <p>
                কোডিংয়ের প্রতিটি লাইনে আমি ক্লিন আর্কিটেকচার, মডুলার স্ট্রাকচার
                এবং বেস্ট পারফরম্যান্স বজায় রাখার সর্বোচ্চ চেষ্টা করি। শুধু কোড
                লেখাই নয়, বরং এমন কিছু তৈরি করা যা মানুষের বাস্তব জীবনে কোনো না
                কোনো ইমপ্যাক্ট তৈরি করতে পারে—এটাই আমার মূল লক্ষ্য।
              </p>
            </div>

            {/* শর্ট এডুকেশন ইনফো */}
            <div className="mt-2 p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-100">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Academic Background
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Focusing on science, core mathematics, and language skills
                  alongside computer programming.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ২. TECH STACK / SKILLS SECTION ─── */}
        <div className="mb-16 animate-[fadeUp_0.65s_0.2s_ease_both]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              My Tech Stack
            </h2>
            <p className="text-slate-400 text-sm font-light">
              আইডিয়া থেকে প্রোডাকশন লেভেল পর্যন্ত প্রজেক্ট বিল্ড করার জন্য আমি
              যেসব টুলস এবং টেকনোলজি নিয়মিত ব্যবহার করি:
            </p>
          </div>

          {/* স্কিলস ক্যাটাগরি গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  {cat.icon}
                  <h3 className="font-bold text-slate-900 text-base">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── ৩. BOTTOM CTA ─── */}
        <div className="text-center pt-10 animate-[fadeUp_0.65s_0.3s_ease_both]">
          <p className="text-slate-400 text-sm font-light mb-4">
            আমার করা কাজগুলো দেখতে চান?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
          >
            Explore My Projects
          </Link>
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
