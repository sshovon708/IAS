import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/images/logo.webp"; // লোগো ইম্পোর্ট

export default function Header() {
  return (
    // অফ-হোয়াইট ব্যাকগ্রাউন্ড এবং বর্ডার
    <header className="bg-slate-50 text-slate-800 border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 h-20 flex items-center justify-between">
        {/* ১. বড় করা লোগো ইমেজ */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Logo"
            className="h-14 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* ডান পাশের নেভিগেশন ও বাটন গ্রুপ */}
        <div className="flex items-center gap-8">
          {/* ২. নেভিগেশন লিংকসমূহ */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-blue-600 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-blue-600 transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-blue-600 transition-colors"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-blue-600 transition-colors"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-blue-600 transition-colors"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* ৩. Hire Me বাটন (সরাসরি কন্টাক্ট পেজে নিয়ে যাবে) */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-100 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
