import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"

const caseStudies = [
  {
    title: "Brand Growth Through Video & Influencer Marketing",
    category: "Influencer Marketing",
    description:
      "A multi-platform campaign combining short-form video production and creator-led storytelling to increase engagement, audience reach, and brand visibility.",
    results: [
      "Increased audience engagement",
      "Higher brand visibility across platforms",
      "Stronger creator-driven trust",
    ],
    link: "/contact",
  },
  {
    title: "Content-Led Social Media Expansion",
    category: "Social Media Strategy",
    description:
      "A platform-focused content system designed to improve posting consistency, audience retention, and long-term social media growth.",
    results: [
      "Consistent content publishing",
      "Improved audience retention",
      "Scalable social growth workflows",
    ],
    link: "/contact",
  },
  {
    title: "AI-Powered Short Form Video Scaling",
    category: "AI Video Production",
    description:
      "AI-assisted production workflows built for rapid short-form content creation across modern social platforms and ad campaigns.",
    results: [
      "Faster content production",
      "Scalable creative workflows",
      "Improved campaign output",
    ],
    link: "/contact",
  },
  {
    title: "YouTube Growth & Channel Optimization",
    category: "YouTube Management",
    description:
      "Strategic YouTube content planning and SEO optimization focused on audience growth, discoverability, and retention.",
    results: [
      "Improved YouTube SEO",
      "Better publishing consistency",
      "Audience growth optimization",
    ],
    link: "/contact",
  },
]

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Framebeat Labs"
        description="Explore how Framebeat Labs helps brands grow through AI video production, influencer marketing, YouTube management, social media strategy, and content systems."
        keywords="marketing case studies, influencer marketing campaigns, YouTube growth case study, AI video production agency"
        url="https://www.framebeatlabs.com/case-studies"
      />

      <div className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />

          <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-800 opacity-20 blur-3xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">
              Growth & Production Case Studies
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Strategic Creative Work
              <span className="block text-neutral-300">
                Built For Modern Brands
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              Explore how Framebeat Labs helps brands scale visibility,
              engagement, audience growth, and digital presence through
              cinematic storytelling, AI-powered content systems, influencer
              marketing, and platform-focused strategies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Start Your Project
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-900">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "50+",
                label: "Creative Campaigns",
              },
              {
                number: "100+",
                label: "Content Deliverables",
              },
              {
                number: "10+",
                label: "Industries Served",
              },
              {
                number: "Global",
                label: "Audience Reach",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
              >
                <h3 className="text-4xl font-semibold tracking-tight">
                  {item.number}
                </h3>

                <p className="mt-3 text-neutral-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Real Growth Through Strategic Content Systems
            </h2>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From influencer campaigns and AI-generated video systems to
              YouTube growth and social media strategy, our work is designed
              around visibility, audience engagement, and long-term brand
              positioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-neutral-700 opacity-5 blur-3xl rounded-full" />

                  <div className="relative z-10">
                    <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.15em] text-neutral-400">
                      {study.category}
                    </span>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight leading-tight">
                      {study.title}
                    </h3>

                    <p className="mt-6 text-neutral-400 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mt-8 space-y-3">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-neutral-300"
                        >
                          <span className="mt-1 text-sm">✦</span>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 mt-10 text-sm text-white group-hover:gap-3 transition-all"
                    >
                      Discuss Similar Project →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              How We Build Modern Growth Systems
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              "Strategy & Positioning",
              "Creative Production",
              "Platform Distribution",
              "Optimization & Scaling",
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
              >
                <span className="text-sm text-neutral-500">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-20">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Build Your Next Growth Campaign?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create cinematic content systems, influencer campaigns,
                YouTube strategies, and AI-powered creative workflows tailored
                for modern digital growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
                >
                  Contact Us
                </Link>

                <Link
                  to="/services"
                  className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
