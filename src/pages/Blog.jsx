import { useState } from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

export default function Blog() {
  // একটি স্টেট যোগ করা হয়েছে যাতে ক্লিক করলে পুরো আর্টিকেলটি পপআপে পড়া যায়
  const [activePost, setActivePost] = useState(null);

  // আপনার ব্লগের বিস্তারিত এবং প্রফেশনাল ৩টি আর্টিকেল
  const blogPosts = [
    {
      id: 1,
      title: "Why I Switched to Tailwind CSS v4 in 2026",
      excerpt:
        "Tailwind CSS v4-এর নতুন ফিচার, লাইটওয়েট আর্কিটেকচার এবং পারফরম্যান্স বুস্ট কেন আমাদের প্রজেক্ট বিল্ড করার প্রসেস সম্পূর্ণ বদলে দিচ্ছে...",
      content: `ওয়েব ডেভেলপমেন্টের দুনিয়ায় Tailwind CSS বরাবরই ডেভেলপারদের প্রথম পছন্দ। কিন্তু ২০২৬ সালে এসে Tailwind CSS v4 রিলিজ হওয়ার পর এটি ফ্রন্টএন্ড ডেভেলপমেন্টকে একদম নতুন এক উচ্চতায় নিয়ে গেছে। কেন আমি আমার সাম্প্রতিক সব প্রজেক্টে v4 ব্যবহার শুরু করলাম, তার প্রধান কয়েকটি কারণ নিচে তুলে ধরলাম:

১. লাইটওয়েট এবং সুপার ফাস্ট ইঞ্জিন: 
v4 সংস্করণে নতুন Rust-ভিত্তিক কম্পাইলার ব্যবহার করা হয়েছে, যা আগের সংস্করণের চেয়ে প্রায় ১০ গুণ দ্রুত কোড বিল্ড করতে পারে। এর ফলে প্রোডাকশন সাইজের সাইটগুলো আরও দ্রুত লোড হয়।

২. নো-কনফিগারেশন সেটআপ:
আগে Tailwind সেটআপ করার জন্য বড় একটি 'tailwind.config.js' ফাইলের প্রয়োজন হতো। কিন্তু v4-এ কোনো কনফিগারেশন ফাইল ছাড়াই সরাসরি CSS ফাইলের ভেতর '@theme' ডিরেক্টিভ ব্যবহার করে কাস্টম কালার, ফন্ট এবং ব্রেকপয়েন্ট কন্ট্রোল করা যায়।

৩. নেটিভ CSS ভেরিয়েবলস:
Tailwind v4 এখন নেটিভ CSS কাস্টম প্রোপার্টিজ (Variables) জেনারেট করে। এর ফলে রানটাইমে জাভাস্ক্রিপ্ট ছাড়াই থিম চেঞ্জ বা ডার্ক মোড হ্যান্ডেল করা অনেক বেশি সহজ এবং পারফরম্যান্ট হয়েছে।

একজন ফ্রন্টএন্ড ডেভেলপার হিসেবে ক্লিন কোড এবং সাইটের স্পিড ধরে রাখতে Tailwind CSS v4-এর কোনো বিকল্প নেই।`,
      date: "May 25, 2026",
      readTime: "4 min read",
      category: "Web Dev",
    },
    {
      id: 2,
      title: "Mastering Asynchronous JavaScript & REST APIs",
      excerpt:
        "ফ্রন্টএন্ডে ডেটা ফেচিং আরো স্মুথ করতে এবং কমন এপিআই এররগুলো হ্যান্ডেল করার জন্য Async/Await-এর সেরা কিছু প্র্যাকটিস নিয়ে বিস্তারিত আলোচনা...",
      content: `একটি মডার্ন ওয়েব অ্যাপ্লিকেশনের প্রাণ হলো তার ডেটা ফ্লো। ব্যাকএন্ড সার্ভার বা কোনো থার্ড-পার্টি API থেকে ডেটা এনে ফ্রন্টএন্ডে রেন্ডার করার জন্য JavaScript-এর Asynchronous প্রোগ্রামিংয়ের ওপর দখল থাকা আবশ্যক। 

অধিকাংশ নতুন ডেভেলপাররা API ফেচিং করতে গিয়ে 'Callback Hell' অথবা 'Promise Chaining' (.then().catch()) এর গোলকধাঁধায় হারিয়ে যান। এই সমস্যা সমাধানের সেরা উপায় হলো ক্লিন 'Async/Await' সিনট্যাক্স ব্যবহার করা। 

ক্লিন এবং এরর-ফ্রি ডেটা ফেচিংয়ের জন্য আমার ৩টি মূল নিয়ম:
১. ট্রাই-ক্যাচ (try...catch) ব্লক ব্যবহার: যেকোনো API কল করার সময় নেটওয়ার্ক ডাউন বা সার্ভার ক্রাশ হতে পারে। তাই সর্বদা 'try...catch' ব্লকের মধ্যে কোড রাখা উচিত যাতে সাইট ক্রাশ না করে ইউজারকে সুন্দর একটি এরর মেসেজ দেখানো যায়।
২. লোডিং স্টেট (Loading States): ডেটা লোড হওয়ার আগ পর্যন্ত ইউজারকে একটি সুন্দর স্পিনার বা কঙ্কাল স্ক্রিন (Skeleton Loader) দেখানো উচিত, যা ইউজারের এক্সপেরিয়েন্সকে উন্নত করে।
৩. ক্যাশিং (Caching): একই ডেটা বারবার সার্ভার থেকে ফেচ না করে ব্রাউজারের মেমোরিতে বা 'React Query' এর মতো টুল ব্যবহার করে ক্যাশ করে রাখা উচিত, এতে সার্ভারের ওপর চাপ কমে।`,
      date: "May 18, 2026",
      readTime: "6 min read",
      category: "JavaScript",
    },
    {
      id: 3,
      title: "The Reality of Building Full-Stack Apps Solo",
      excerpt:
        "আইডিয়া জেনারেট করা থেকে শুরু করে ডেটাবেজ ডিজাইন এবং ইউআই রিফাইনমেন্ট—একা একটি ফুল-স্ট্যাক প্রজেক্ট হ্যান্ডেল করার অভিজ্ঞতা এবং চ্যালেঞ্জসমূহ...",
      content: `একা একটি সম্পূর্ণ ফুল-স্ট্যাক অ্যাপ্লিকেশন (Full-Stack App) তৈরি করা একই সাথে অত্যন্ত রোমাঞ্চকর এবং চ্যালেঞ্জিং। যখন আপনি একাই ডিজাইনার, ফ্রন্টএন্ড ডেভেলপার, ব্যাকএন্ড আর্কিটেক্ট এবং ডেটাবেজ অ্যাডমিনিস্ট্রেটর হিসেবে কাজ করেন, তখন শেখার পরিধিটা অন্য যেকোনো মাধ্যমের চেয়ে অনেক বড় হয়।

আমার ব্যক্তিগত ফুল-স্ট্যাক প্রজেক্টগুলো বিল্ড করার জার্নি থেকে পাওয়া কিছু গুরুত্বপূর্ণ অভিজ্ঞতা:

১. সঠিক টেকনোলজি স্ট্যাক নির্বাচন: 
শুরুতেই এমন টেকনোলজি বেছে নেওয়া উচিত যা দ্রুত ডেভেলপমেন্টে সাহায্য করে। যেমন- ফ্রন্টএন্ডের জন্য React ও Tailwind CSS, ব্যাকএন্ডের জন্য Node.js/Express এবং ডেটাবেজের জন্য MongoDB বা PostgreSQL।

২. ডেটাবেজ মডেলিং ও সিকিউরিটি:
ফুল-স্ট্যাক অ্যাপের প্রধান চ্যালেঞ্জ হলো ডেটা সিকিউরিটি। ইউজার পাসওয়ার্ড হাশিং (যেমন- bcrypt ব্যবহার করা) এবং JWT (JSON Web Token) এর মাধ্যমে রাউট প্রটেক্ট করা অত্যন্ত জরুরি। ডেটার রিলেশনশিপ অনুযায়ী সঠিক টেবিল বা কালেকশন ডিজাইন না করলে প্রজেক্ট বড় হওয়ার সাথে সাথে কোড জটিল হয়ে যায়।

৩. টাইম ম্যানেজমেন্ট ও বার্নআউট:
সবকিছু একা করতে গিয়ে অনেক সময় ডেভেলপাররা খেই হারিয়ে ফেলেন। এর থেকে বাঁচার উপায় হলো পুরো প্রজেক্টকে ছোট ছোট ফিচারে (যেমন- প্রথমে শুধু লগইন সিস্টেম, তারপর ড্যাশবোর্ড ইত্যাদি) ভাগ করে নিয়ে একটি কানবান বোর্ড (Kanban Board) মেইনটেইন করা।`,
      date: "May 10, 2026",
      readTime: "5 min read",
      category: "Journey",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden pt-28 pb-20">
      {/* Background Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-24 -right-32 w-[550px] h-[550px] rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute bottom-16 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-50/50 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-[fadeUp_0.65s_ease_both]">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
              Articles
            </span>
            <span className="w-6 h-px bg-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Tech <span className="text-blue-600">Insights</span> & Stories
          </h1>
          <p className="text-slate-500 font-light text-base leading-relaxed">
            প্রোগ্রামিং শেখার জার্নি, নতুন সব ওয়েব টেকনোলজি এবং বিভিন্ন প্রজেক্ট
            তৈরি করার সময় আমি যেসব অভিজ্ঞতা অর্জন করেছি, সেগুলোই এখানে শেয়ার
            করি।
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-[fadeUp_0.65s_0.15s_ease_both]">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 mb-4">
                  <span className="px-2.5 py-0.5 font-bold text-blue-600 bg-blue-50 rounded-md uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <FaRegClock />
                  <span>{post.readTime}</span>
                </div>

                <button
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors cursor-pointer"
                >
                  Read Article
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ─── MODAL / POPUP FOR FULL ARTICLE ─── */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setActivePost(null)}
          />

          {/* Modal Box */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto z-10 animate-[fadeUp_0.3s_ease_both]">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 mb-3">
              <span className="px-2.5 py-0.5 font-bold text-blue-600 bg-blue-50 rounded-md uppercase tracking-wider">
                {activePost.category}
              </span>
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <span>{activePost.date}</span>
              </div>
              <span>•</span>
              <span>{activePost.readTime}</span>
            </div>

            <h2 className="text-2xl font-black text-slate-900 mb-6 leading-snug">
              {activePost.title}
            </h2>

            <div className="text-slate-600 font-light text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {activePost.content}
            </div>
          </div>
        </div>
      )}

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
