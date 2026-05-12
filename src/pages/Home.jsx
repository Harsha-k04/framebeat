import { motion } from "framer-motion"
import SEO from "../components/SEO"
import ReviewsCarousel from "../components/ReviewsCarousel"

const services = [
  {
    title: "UGC Video Production",
    desc: "High-converting user generated content designed for paid ads, reels, and social growth.",
  },
  {
    title: "Influencer Marketing",
    desc: "Creator collaborations and influencer campaigns that increase reach and brand trust.",
  },
  {
    title: "AI Video Production",
    desc: "AI-powered video workflows for scalable, fast, and modern content creation.",
  },
  {
    title: "YouTube Channel Management",
    desc: "Content strategy, editing, thumbnails, SEO, and audience growth for creators and brands.",
  },
]

const stats = [
  { number: "10M+", label: "Views Generated" },
  { number: "150+", label: "Videos Produced" },
  { number: "50+", label: "Brand Collaborations" },
  { number: "95%", label: "Client Satisfaction" },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Framebeat Labs | AI Video Production & Influencer Marketing Agency"
        description="Framebeat Labs helps brands grow through AI video production, UGC content, influencer marketing, YouTube management, and short-form video strategies."
        keywords="ugc video agency india, influencer marketing agency, ai video production, youtube channel management, short form video agency"
        url="https://www.framebeatlabs.com/"
      />

      <div className="bg-black text-white overflow-hidden">
        {/* HERO */}
        <section className="relative px-6 md:px-20 pt-32 pb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 -z-10" />

          <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-800 opacity-20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">
                AI-Powered Growth Content Agency
              </span>

              <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
                Scale Your Brand With
                <span className="block text-neutral-300">
                  AI Videos, UGC & Influencer Marketing
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
                We help startups, creators, and modern brands grow through
                cinematic video production, AI-generated content, influencer
                campaigns, YouTube growth strategies, and short-form content
                built for engagement.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition duration-300"
                >
                  Book a Strategy Call
                </a>

                <a
                  href="/services"
                  className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* QUICK POINTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-4xl">
              {[
                "UGC & Short Form Video Production",
                "Influencer Marketing Campaigns",
                "AI Generated Video Content",
                "YouTube Channel Growth & Management",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-5 text-neutral-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 md:px-20 py-20 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-semibold">
                  {stat.number}
                </h2>

                <p className="mt-3 text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-6 md:px-20 py-28 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Services
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Growth-Focused Media & Marketing Solutions
              </h2>

              <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
                We combine creative storytelling, AI workflows, and performance
                marketing strategies to help brands scale faster in the modern
                digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="group bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-neutral-700 flex items-center justify-center text-xl">
                    ✦
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {service.desc}
                  </p>

                  <a
                    href="/services"
                    className="inline-block mt-6 text-sm text-neutral-300 hover:text-white transition"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="px-6 md:px-20 py-28 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Why Framebeat Labs
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Built For Modern Brand Growth
              </h2>

              <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
                We blend cinematic creativity, AI-powered production, and
                platform-focused strategy to create content that drives real
                business impact.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                "AI-Driven Content Workflows",
                "Fast Turnaround & Scalable Production",
                "Short Form Content Expertise",
                "Performance-Focused Creative Strategy",
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

        {/* REVIEWS */}
        <section className="px-6 md:px-20 py-28 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Trusted By Growing Brands
            </h2>

            <p className="mt-6 text-neutral-400 max-w-2xl text-lg leading-relaxed">
              Brands work with Framebeat Labs for premium content production,
              influencer campaigns, YouTube growth, and AI-powered marketing
              execution.
            </p>

            <div className="mt-14">
              <ReviewsCarousel />
            </div>

            <a
              href="https://www.google.co.in/search?sca_esv=07b6421d581a57bc&sxsrf=AE3TifNq6KkxTtMjqzSqyH-bS3hpqA2gqg:1767804447530&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3o7P_y15QT6ncjmf_1KuPtd1HfdzR42PMnMt38RbGOmJ9G6cY_MRbS7S_LlsIs6mSM2TP-AR6R8rSBICQjiySpvz0oLI2r6Pef5nhRikLvXxqy0rA%3D%3D&q=Framebeat+Labs+%26+Media+LLP+Reviews&sa=X&ved=2ahUKEwjvkoLh8PmRAxWD8zgGHZl2JPkQ0bkNegQIHRAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-neutral-400 hover:text-white transition"
            >
              View Google Reviews →
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 md:px-20 py-28">
          <div className="max-w-7xl mx-auto rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-tight">
                Ready To Scale Your Brand With High-Impact Content?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create cinematic videos, influencer campaigns, AI-powered
                content, and growth strategies designed for modern audiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
                >
                  Contact Us
                </a>

                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
