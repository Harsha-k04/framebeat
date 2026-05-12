import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import CaseStudies from "./pages/CaseStudies"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"

// Service pages
import BrandVideoProduction from "./pages/services/BrandVideoProduction"
import AIVideoProduction from "./pages/services/AIVideoProduction"
import InfluencerMarketing from "./pages/services/InfluencerMarketing"
import SocialMediaManagement from "./pages/services/SocialMediaManagement"
import PodcastProduction from "./pages/services/PodcastProduction"
import ContentCreation from "./pages/services/ContentCreation"
import AIMusicAudioProduction from "./pages/services/AIMusicAudioProduction"
import YouTubeChannelManagement from "./pages/services/YouTubeChannelManagement"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />

            {/* Blog pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Service detail pages */}
            <Route
              path="/services/brand-video-production"
              element={<BrandVideoProduction />}
            />

            <Route
              path="/services/ai-video-production"
              element={<AIVideoProduction />}
            />

            <Route
              path="/services/influencer-marketing"
              element={<InfluencerMarketing />}
            />

            <Route
              path="/services/social-media-management"
              element={<SocialMediaManagement />}
            />

            <Route
              path="/services/podcast-production"
              element={<PodcastProduction />}
            />

            <Route
              path="/services/content-creation"
              element={<ContentCreation />}
            />

            <Route
              path="/services/ai-music-audio"
              element={<AIMusicAudioProduction />}
            />

            <Route
              path="/services/youtube-management"
              element={<YouTubeChannelManagement />}
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="min-h-[70vh] flex items-center justify-center px-6">
                  <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
                      404
                    </h1>

                    <p className="mt-6 text-neutral-400 text-lg">
                      The page you are looking for does not exist.
                    </p>

                    <a
                      href="/"
                      className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
                    >
                      Back To Home
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
