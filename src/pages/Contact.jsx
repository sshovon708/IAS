import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  // সাবমিশন স্টেট হ্যান্ডেল করার জন্য
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // আপনার দেওয়া আসল Formspree Endpoint লিংক
    const formspreeEndpoint = "https://formspree.io/f/mdajprgb";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // সাবমিট সফল হলে ফর্মের টেক্সট ক্লিয়ার করার জন্য
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden pt-28 pb-20">
      {/* Background Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-32 -left-24 w-[500px] h-[500px] rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute bottom-10 -right-24 w-[550px] h-[550px] rounded-full bg-indigo-50/50 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-[fadeUp_0.65s_ease_both]">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <span className="w-6 h-px bg-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Let's Work <span className="text-blue-600">Together</span>
          </h1>
          <p className="text-slate-500 font-light text-base leading-relaxed">
            আপনার কোনো নতুন প্রজেক্টের আইডিয়া আলোচনা করতে চান, নাকি কোনো প্রশ্ন
            আছে? জাস্ট নিচের ফর্মটি পূরণ করুন অথবা সরাসরি সোশ্যাল মিডিয়ায় নক
            দিন।
          </p>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* LEFT: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 animate-[fadeUp_0.65s_0.1s_ease_both]">
            <a
              href="mailto:your-email@gmail.com"
              className="p-5 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Email Me</h4>
                <p className="text-xs text-slate-400 mt-1">
                  your-email@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-50 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <FaWhatsapp className="text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
                <p className="text-xs text-slate-400 mt-1">+880 1XXX-XXXXXX</p>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-50 flex items-center gap-4">
              <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-xl">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Location</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Rajshahi, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7 animate-[fadeUp_0.65s_0.2s_ease_both]">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Hi Shovon, I would love to discuss a project with you..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                ></textarea>
              </div>

              {/* সাকসেস এবং এরর মেসেজ অ্যালার্ট */}
              {status === "SUCCESS" && (
                <p className="text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-4 py-2.5 rounded-xl">
                  🎉 ধন্যবাদ ভাই! আপনার মেসেজটি সফলভাবে সরাসরি আমার জিমেইলে চলে
                  এসেছে।
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-sm font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-4 py-2.5 rounded-xl">
                  ❌ দুঃখিত ভাই, মেসেজ পাঠানো যায়নি। আবার চেষ্টা করুন।
                </p>
              )}

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Send Message{" "}
                <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
}
