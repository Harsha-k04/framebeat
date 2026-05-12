import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const services = [
  "Content Planning & Strategy",
  "Instagram Reels & Short-Form Content",
  "Community Management & Engagement",
  "Analytics & Performance Optimization",
]

const benefits = [
  "Consistent Brand Presence",
  "Platform-Focused Growth Strategy",
  "Audience Engagement & Retention",
  "Scalable Social Media Systems",
]

const process = [
  "Brand & Audience Analysis",
  "Content Calendar Planning",
  "Creative Production",
  "Publishing & Engagement",
  "Analytics & Optimization",
]

const platforms = [
  "Instagram Marketing",
  "TikTok & Short-Form Content",
  "LinkedIn Brand Growth",
  "YouTube Shorts Strategy",
  "Creator & Brand Accounts",
  "Social Media Campaign Management",
]

const faqs = [
  {
    question: "What does your social media management service include?",
    answer:
      "We provide content planning, short-form content strategy, posting schedules, engagement management, analytics tracking, and growth optimization.",
  },
  {
    question: "Do you create content for social media?",
    answer:
      "Yes. We create reels, short-form videos, branded visuals, campaign creatives, and platform-optimized content tailored to your audience.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Instagram, TikTok, LinkedIn, YouTube Shorts, and modern social platforms depending on your brand goals.",
  },
  {
    question: "Who is this service ideal for?",
    answer:
      "Startups, creators, ecommerce brands, agencies, and businesses looking to build long-term digital presence and audience engagement.",
  },
]

export default function SocialMediaManagement() {
  return (
    <>
      <SEO
        title="Social Media Management Agency | Framebeat Labs"
        description="Framebeat Labs helps brands grow through strategic social media management, reels content, short-form video strategy, audience engagement, and platform-focused growth."
        keywords="social media management agency, instagram marketing agency, reels marketing, short form content strategy, social media growth"
        url="https://www.framebeatlabs.com/services/social-media-management"
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
              Social Media Growth Agency
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Strategic Social Media
              <span className="block text-neutral-300">
                Management For Modern Brands
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              We help brands grow through platform-focused social media
              strategies, short-form content systems, audience engagement, and
              modern digital storytelling designed for long-term growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Grow Your Social Presence
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
              Social Media Strategy
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Build A Strong Digital Presence Across Platforms
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              At Framebeat Labs, we help brands build modern social media
              systems designed to increase visibility, strengthen audience
              relationships, and create long-term digital growth.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From strategy and content planning to reels production, audience
              engagement, and analytics optimization, we manage complete
              social media ecosystems tailored for modern platforms.
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
              Social Media Management Services
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
                  Strategic content systems designed to strengthen audience
                  engagement and modern brand visibility.
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
                Social Media Built For Sustainable Growth
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

        {/* PLATFORMS */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Platforms
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Platform-Focused Content & Growth Systems
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {platforms.map((item, index) => (
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
              Strategic Social Media Workflow
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
              Social Media Growth Beyond Just Posting
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We focus on audience engagement, modern storytelling, and
              platform-focused strategies instead of simply posting content
              without direction or optimization.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We work with brands across India and globally, delivering social
              media growth systems tailored for different industries, audiences,
              and modern digital platforms.
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
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Grow Your Social Media Presence?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create strategic content systems and audience-focused
                social media strategies designed for modern digital growth.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Grow Your Social Presence
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
