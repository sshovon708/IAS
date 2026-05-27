import { Link } from "react-router-dom";
import myFooterImage from "../assets/images/my-image.jpg"; // আপনার ছবি ইম্পোর্ট

// react-icons থেকে একদম অফিশিয়াল ও অরিজিনাল ব্র্যান্ড আইকনগুলো নিয়ে আসলাম
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // অফ-হোয়াইট ব্যাকগ্রাউন্ড এবং py-20 প্যাডিং দিয়ে ফুটারের হাইট বড় রাখা হয়েছে
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20">
        {/* মেইন ফুটার গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center border-b border-slate-200 pb-16">
          {/* ১. বাম পাশের সেকশন: বড় করা প্রোফাইল পিকচার এবং আপনার সঠিক নাম ও ডোমেইন */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0 rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <img
                src={myFooterImage}
                alt="Iftakhar Ahmmed Shovon"
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                IAS<span className="text-blue-600">.com</span>
              </h3>
              <p className="text-base font-bold text-slate-700 mt-0.5">
                Iftakhar Ahmmed Shovon
              </p>
              <p className="text-xs text-slate-400 mt-1 font-light max-w-[200px]">
                Building modern web solutions with clean code.
              </p>
            </div>
          </div>

          {/* ২. মাঝখানের সেকশন: কন্টাক্ট ইনফো (জিমেইল ও হোয়াটসঅ্যাপ) */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Contact Info
            </h4>
            <div className="text-sm space-y-2 font-light">
              <p>
                <span className="font-semibold text-slate-700">Gmail:</span>{" "}
                <a
                  href="mailto:sshovon708@gamil.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  sshovon708@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-700">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/8801315585665"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  +88 01315-585665
                </a>
              </p>
            </div>
          </div>

          {/* ৩. ডান পাশের সেকশন: অরিজিনাল ও প্রিমিয়াম সোশ্যাল মিডিয়া আইকনসমূহ */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Follow Me
            </h4>
            <div className="flex justify-center md:justify-start gap-5">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/iftakhar.ahmmed.shovon.2025"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-200"
                title="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/ifthakharahmmed/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg transition-all duration-200"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/sshovon708"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 hover:shadow-lg transition-all duration-200"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              {/* LinkedIn Icon (ব্ল্যাঙ্ক এবং লকড রাখা হয়েছে) */}
              <div
                className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-300 cursor-not-allowed opacity-50"
                title="LinkedIn (Not available)"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* ফুটারের একদম নিচের পার্ট: কপিরাইট এবং কুইক লিংক */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-light">
          <p className="text-slate-400">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-slate-600">IAS.com</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6 font-medium text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
