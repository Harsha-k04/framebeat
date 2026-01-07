import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"

const services = [
  {
    title: "Brand Video Production",
    description:
      "High-quality commercials, corporate films, ads, reels, and brand videos.",
    link: "/services/brand-video-production",
  },
  {
    title: "AI Video Production",
    description:
      "Scalable, cost-effective AI-powered video content for modern marketing.",
    link: "/services/ai-video-production",
  },
  {
    title: "Influencer Marketing",
    description:
      "Authentic influencer campaigns with measurable impact.",
    link: "/services/influencer-marketing",
  },
  {
    title: "Social Media Management",
    description:
      "Strategy-led social media management focused on growth and engagement.",
    link: "/services/social-media-management",
  },
  {
    title: "Podcast & Video Podcast Production",
    description:
      "End-to-end podcast and video podcast production for brands and creators.",
    link: "/services/podcast-production",
  },
  {
    title: "Content Creation for Brands",
    description:
      "Platform-specific content designed to boost engagement and brand recall.",
    link: "/services/content-creation",
  },
  {
    title: "AI Music & Audio Production",
    description:
      "Custom AI-generated music, sound effects, and audio branding.",
    link: "/services/ai-music-audio",
  },
  {
    title: "YouTube Channel Management",
    description:
      "End-to-end YouTube strategy, optimization, and growth management.",
    link: "/services/youtube-management",
  },
]

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Our Services
      </h1>

      <p className="mt-6 text-neutral-400 max-w-3xl">
        Framebeat Labs & Media LLP offers end-to-end media production,
        AI-powered content, and digital marketing services designed to help
        brands grow visibility, engagement, and long-term value.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {services.map((service) => (
          <Link key={service.title} to={service.link}>
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
