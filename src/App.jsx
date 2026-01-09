import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import CaseStudies from "./pages/CaseStudies"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"


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
      <Navbar />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service detail pages */}
        <Route path="/services/brand-video-production" element={<BrandVideoProduction />} />
        <Route path="/services/ai-video-production" element={<AIVideoProduction />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/podcast-production" element={<PodcastProduction />} />
        <Route path="/services/content-creation" element={<ContentCreation />} />
        <Route path="/services/ai-music-audio" element={<AIMusicAudioProduction />} />
        <Route path="/services/youtube-management" element={<YouTubeChannelManagement />} />
        <Route path="/careers" element={<Careers />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
