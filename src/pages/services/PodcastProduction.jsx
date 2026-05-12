import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const services = [
  "Podcast Strategy & Planning",
  "Professional Recording & Editing",
  "Audio Branding & Sound Design",
  "Distribution & Platform Support",
]

const benefits = [
  "Professional Podcast Production",
  "Platform-Optimized Audio Content",
  "Strong Audio Branding",
  "Scalable Content Systems",
]

const process = [
  "Podcast Strategy",
  "Recording & Production",
  "Editing & Sound Design",
  "Distribution Setup",
  "Growth & Optimization",
]

const useCases = [
  "Business & Brand Podcasts",
  "Creator & Influencer Podcasts",
  "Video Podcast Production",
  "Educational Podcasts",
  "Interview-Based Shows",
  "Marketing & Thought Leadership Content",
]

const faqs = [
  {
    question: "What does your podcast production service include?",
    answer:
      "We provide strategy, recording support, editing, sound design, intro/outro creation, audio branding, publishing support, and distribution setup.",
  },
  {
    question: "Do you help with podcast branding?",
    answer:
      "Yes. We help create podcast identities including intros, outros, sound design, visual direction, and branded assets.",
  },
  {
    question: "Can you produce video podcasts?",
    answer:
      "Absolutely. We support both audio and video podcast production optimized for YouTube, Spotify, and social media platforms.",
  },
  {
    question: "Who is this service ideal for?",
    answer:
      "Brands, creators, founders, educators, agencies, and businesses looking to build authority and audience engagement through podcast content.",
  },
]

export default function PodcastProduction() {
  return (
    <>
      <SEO
        title="Podcast Production Services | Framebeat Labs"
        description="Framebeat Labs provides professional podcast production services including recording, editing, audio branding, video podcasts, and distribution support."
        keywords="podcast production, podcast editing services, video podcast production, audio podcast services, branded podcasts"
        url="https://www.framebeatlabs.com/services/podcast-production"
      />

      <div className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />

          <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-800 opacity-20 blur-3xl rounded-full" />

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
              Professional Podcast Production
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Podcast Production
              <span className="block text-neutral-300">
                Built For Modern Creators & Brands
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              We help brands, creators, founders, and businesses launch
              high-quality podcasts with professional production, strategic
              storytelling, premium audio, and scalable distribution systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Start a Podcast
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
              Modern Podcast Production
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Build Authority Through Podcast Content
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              At Framebeat Labs, we create professionally produced podcasts
              designed to help brands and creators strengthen authority, build
              audience trust, and create scalable long-form content systems.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From strategy and recording to editing, sound design, branding,
              and distribution, we manage the complete podcast production
              workflow for modern digital platforms.
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
              Podcast Production Services
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
                  🎙
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item}</h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Professional podcast workflows designed to create premium
                  listening experiences and scalable content ecosystems.
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
                Podcast Content Built For Long-Term Growth
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
              Podcasts Designed For Modern Audiences
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
              Strategic Podcast Production Workflow
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
              Strategic Podcast Production For Modern Brands
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We combine storytelling strategy, professional production, audio
              branding, and modern content systems to help brands create
              podcasts that feel premium and build long-term audience
              engagement.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We work with brands across India and globally, delivering podcast
              production solutions tailored for creators, businesses, and modern
              digital audiences.
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Launch A Professional Podcast?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create premium podcast content designed to build audience
                trust, authority, and long-term digital growth.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Start a Podcast
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
