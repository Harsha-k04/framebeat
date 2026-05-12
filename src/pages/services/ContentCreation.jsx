import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const services = [
  "Short-Form Video Content",
  "Instagram Reels & TikTok Content",
  "Branded Visual Campaigns",
  "Creative Storytelling & Scripting",
]

const benefits = [
  "Platform-Optimized Content Strategy",
  "Modern Short-Form Creative Direction",
  "Scalable Content Production",
  "Audience-Focused Storytelling",
]

const process = [
  "Content Strategy",
  "Creative Planning",
  "Production & Editing",
  "Optimization & Delivery",
  "Scaling & Performance",
]

const useCases = [
  "Instagram & TikTok Reels",
  "YouTube Shorts",
  "Paid Advertising Creatives",
  "Brand Awareness Campaigns",
  "Product Launch Content",
  "Social Media Marketing",
]

const faqs = [
  {
    question: "What type of content do you create?",
    answer:
      "We create short-form videos, reels, branded campaigns, social media visuals, ad creatives, storytelling content, and platform-optimized digital media.",
  },
  {
    question: "Is the content optimized for social media platforms?",
    answer:
      "Yes. Every piece of content is designed and optimized specifically for platforms like Instagram, TikTok, YouTube, LinkedIn, and modern digital channels.",
  },
  {
    question: "Do you help with content strategy?",
    answer:
      "Absolutely. We help brands with creative direction, content planning, storytelling strategy, and scalable content systems.",
  },
  {
    question: "Who is this service ideal for?",
    answer:
      "Startups, creators, ecommerce brands, agencies, businesses, and modern brands looking to strengthen their digital presence through content.",
  },
]

export default function ContentCreation() {
  return (
    <>
      <SEO
        title="Content Creation Agency | Framebeat Labs"
        description="Framebeat Labs creates short-form videos, branded content, reels, visual campaigns, and digital storytelling content designed for modern platforms and audience engagement."
        keywords="content creation agency, short form video production, reels content creation, branded content agency, social media content"
        url="https://www.framebeatlabs.com/services/content-creation"
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
              Creative Content Production
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Content That
              <span className="block text-neutral-300">
                Captures Attention & Drives Growth
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              We create platform-optimized content, short-form videos,
              storytelling campaigns, and branded visuals designed to increase
              engagement, strengthen identity, and scale modern brands online.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Create Content With Us
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
              Modern Content Strategy
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Digital Content Designed For Modern Platforms
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              At Framebeat Labs, we create scalable content systems tailored for
              social media, digital campaigns, creator brands, startups, and
              modern businesses looking to stand out online.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From cinematic short-form videos to branded storytelling
              campaigns, every piece of content is crafted to maximize
              engagement, visibility, and audience connection.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              What We Create
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Creative Content Services
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
                  ✦
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item}</h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Professionally crafted content designed to strengthen digital
                  presence and audience engagement across platforms.
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
                Content Built For Engagement
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
              Content Designed For Every Modern Platform
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
              Strategic Content Production Workflow
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
              Creative Storytelling Combined With Modern Strategy
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We combine storytelling, creative direction, AI-enhanced
              production workflows, and platform-specific strategies to create
              content that feels premium and performs effectively online.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We work with brands across India and globally, delivering scalable
              content systems tailored for modern audiences and digital
              platforms.
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
                Ready To Create Content That Actually Performs?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create short-form videos, branded storytelling campaigns,
                and platform-focused content designed for modern digital growth.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Create Content With Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
