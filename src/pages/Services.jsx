import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import ServiceCard from "../components/ServiceCard"

const services = [
  {
    title: "Brand Video Production",
    description:
      "Cinematic commercials, corporate films, product videos, ads, and premium brand storytelling.",
    link: "/services/brand-video-production",
  },
  {
    title: "AI Video Production",
    description:
      "Scalable AI-powered video workflows for short-form content, ads, and modern marketing campaigns.",
    link: "/services/ai-video-production",
  },
  {
    title: "Influencer Marketing",
    description:
      "Strategic influencer campaigns and creator collaborations designed for authentic audience engagement.",
    link: "/services/influencer-marketing",
  },
  {
    title: "Social Media Management",
    description:
      "Growth-focused social media management with reels strategy, engagement systems, and analytics.",
    link: "/services/social-media-management",
  },
  {
    title: "Podcast & Video Podcast Production",
    description:
      "Professional podcast production, editing, branding, and scalable long-form content systems.",
    link: "/services/podcast-production",
  },
  {
    title: "Content Creation",
    description:
      "Platform-optimized content, branded storytelling, reels, and digital-first creative campaigns.",
    link: "/services/content-creation",
  },
  {
    title: "AI Music & Audio Production",
    description:
      "AI-generated music, sound design, sonic branding, and scalable audio production for modern media.",
    link: "/services/ai-music-audio",
  },
  {
    title: "YouTube Channel Management",
    description:
      "YouTube growth strategy, SEO optimization, Shorts systems, publishing workflows, and audience scaling.",
    link: "/services/youtube-management",
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Media, AI & Marketing Services | Framebeat Labs"
        description="Explore Framebeat Labs services including AI video production, influencer marketing, social media management, YouTube growth, content creation, podcasts, and cinematic brand videos."
        keywords="AI video production, influencer marketing agency, YouTube channel management, social media management, content creation agency"
        url="https://www.framebeatlabs.com/services"
      />

      <div className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800 opacity-20 blur-3xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">
              Media, AI & Growth Solutions
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Strategic Services Built
              <span className="block text-neutral-300">
                For Modern Brand Growth
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              Framebeat Labs helps brands, startups, and creators grow through
              cinematic video production, AI-powered content systems,
              influencer marketing, social media strategy, YouTube growth, and
              modern digital storytelling.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Book a Strategy Call
              </a>

              <a
                href="/case-studies"
                className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              End-To-End Creative & Growth Solutions
            </h2>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We combine creativity, AI-enhanced workflows, platform-focused
              strategies, and modern storytelling systems to help brands scale
              visibility, engagement, and long-term digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Link to={service.link}>
                  <div className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 hover:border-neutral-700 transition duration-300 h-full">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-neutral-700 opacity-5 blur-3xl rounded-full" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-neutral-700 flex items-center justify-center text-xl">
                        ✦
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold tracking-tight group-hover:text-white transition">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-neutral-400 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-300 group-hover:text-white transition">
                        Explore Service →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Why Framebeat Labs
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Creative Strategy Meets Modern Growth Systems
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "AI-Powered Content Workflows",
                "Platform-Focused Growth Strategies",
                "Cinematic Storytelling & Production",
                "Modern Short-Form Content Expertise",
                "YouTube & Social Media Growth Systems",
                "Performance-Driven Creative Direction",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-5 text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-20">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Build High-Impact Digital Content?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create strategic content systems, cinematic videos,
                influencer campaigns, and AI-powered marketing designed for
                modern digital growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
                >
                  Contact Us
                </a>

                <a
                  href="/"
                  className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition"
                >
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
