import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // ফুটার ইম্পোর্ট করা হলো
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// আপনার assets ফোল্ডার থেকে লোগোটি ইম্পোর্ট করা হলো
import myLogo from "./assets/images/logo.webp";

function App() {
  // ব্রাউজার ট্যাব টাইটেল এবং ফেভিকন (লোগো) ডাইনামিকালি সেট করার জন্য
  useEffect(() => {
    // ১. ব্রাউজারের টাইটেল পরিবর্তন
    document.title = "IAS | Home";

    // ২. ব্রাউজারের ফেভিকন/লোগো পরিবর্তন
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.type = "image/webp";
    link.href = myLogo;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between">
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      {/* ফুটারটি এখানে যুক্ত হলো */}
      <Footer />
    </div>
  );
}

export default App;
