import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const services = [
  "YouTube Channel Strategy",
  "Content Planning & Publishing",
  "Thumbnail & Title Optimization",
  "Analytics & Growth Tracking",
]

const benefits = [
  "SEO-Optimized YouTube Growth",
  "Consistent Content Systems",
  "Audience Retention Strategies",
  "Scalable Channel Management",
]

const process = [
  "Channel Positioning",
  "Content Strategy",
  "Production & Optimization",
  "Publishing & SEO",
  "Analytics & Growth Scaling",
]

const useCases = [
  "Creator & Personal Brand Channels",
  "Business & Startup YouTube Channels",
  "Educational & Podcast Content",
  "YouTube Shorts Growth",
  "Brand Awareness Campaigns",
  "Long-Form Content Strategy",
]

const faqs = [
  {
    question: "What does your YouTube channel management service include?",
    answer:
      "We provide strategy, content planning, publishing workflows, thumbnail optimization, SEO improvements, analytics tracking, and channel growth systems.",
  },
  {
    question: "Do you optimize videos for YouTube SEO?",
    answer:
      "Yes. We optimize titles, descriptions, thumbnails, keywords, publishing schedules, and audience retention strategies for better discoverability.",
  },
  {
    question: "Can you help with YouTube Shorts growth?",
    answer:
      "Absolutely. We create short-form content systems designed to increase reach, engagement, and subscriber growth through YouTube Shorts.",
  },
  {
    question: "Who is this service ideal for?",
    answer:
      "Creators, startups, educators, brands, agencies, and businesses looking to grow their YouTube presence strategically and consistently.",
  },
]

export default function YouTubeChannelManagement() {
  return (
    <>
      <SEO
        title="YouTube Channel Management Agency | Framebeat Labs"
        description="Framebeat Labs helps creators and brands grow through YouTube channel management, SEO optimization, YouTube Shorts strategy, content systems, and audience growth."
        keywords="YouTube channel management, YouTube growth agency, YouTube SEO services, YouTube Shorts strategy, YouTube content management"
        url="https://www.framebeatlabs.com/services/youtube-management"
      />

      <div className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800 opacity-20 blur-3xl rounded-full" />

          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
          >
            ← Back to Services
          </a>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mt-10 px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">
              YouTube Growth & Management
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Strategic YouTube
              <span className="block text-neutral-300">
                Channel Growth For Modern Brands
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              We help creators, startups, and brands grow YouTube channels
              through strategic content systems, SEO optimization, audience
              engagement, and scalable long-form & short-form video workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Grow Your YouTube Channel
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

        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              YouTube Growth Strategy
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Build A Scalable YouTube Presence
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              At Framebeat Labs, we help brands and creators build modern
              YouTube content systems designed to increase visibility, audience
              retention, engagement, and long-term channel growth.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From channel positioning and content planning to SEO optimization,
              publishing workflows, thumbnails, analytics, and Shorts strategy,
              we manage complete YouTube ecosystems tailored for modern
              audiences.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              YouTube Channel Management Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-neutral-700 flex items-center justify-center text-xl">
                  ▶
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item}</h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Strategic YouTube systems designed to improve discoverability,
                  audience engagement, and long-term channel growth.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Why It Works
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                YouTube Growth Built Around Strategy
              </h2>
            </div>

            <div className="space-y-5 text-neutral-300 text-lg">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Ideal For
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              YouTube Systems Designed For Modern Creators & Brands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-neutral-300"
              >
                {item}
              </div>
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
              Strategic YouTube Growth Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mt-16">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
              >
                <span className="text-neutral-500 text-sm">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-medium">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* WHY FRAMEBEAT */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Why Framebeat Labs
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Strategic YouTube Growth Beyond Uploading Videos
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We focus on long-term audience growth, discoverability, content
              positioning, retention strategy, and modern YouTube SEO instead
              of simply uploading videos without optimization.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We work with brands across India and globally, delivering
              YouTube growth systems tailored for creators, businesses, and
              modern digital audiences.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              FAQs
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="mt-14 space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7"
                >
                  <h3 className="text-xl font-medium">{faq.question}</h3>

                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Scale Your YouTube Channel?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s build a strategic YouTube content system designed for
                discoverability, audience engagement, and long-term growth.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Grow Your YouTube Channel
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
