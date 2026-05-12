import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const services = [
  "Influencer Discovery & Vetting",
  "Campaign Strategy & Planning",
  "Creator Content Coordination",
  "Performance Tracking & Reporting",
]

const benefits = [
  "Authentic Creator Partnerships",
  "Platform-Native Campaigns",
  "Audience-Focused Brand Growth",
  "Performance-Driven Influencer Strategy",
]

const process = [
  "Brand & Audience Analysis",
  "Influencer Research",
  "Campaign Planning",
  "Content Execution",
  "Performance Optimization",
]

const platforms = [
  "Instagram Influencer Campaigns",
  "YouTube Creator Collaborations",
  "TikTok Marketing Campaigns",
  "Product Launch Promotions",
  "Brand Awareness Campaigns",
  "Short-Form Video Promotions",
]

const faqs = [
  {
    question: "What is influencer marketing?",
    answer:
      "Influencer marketing involves collaborating with creators and influencers to promote products, services, or brands through authentic content and audience engagement.",
  },
  {
    question: "How do you select influencers?",
    answer:
      "We carefully research and vet influencers based on audience quality, engagement, niche relevance, content style, and brand alignment.",
  },
  {
    question: "Do you manage the entire campaign?",
    answer:
      "Yes. We handle campaign strategy, influencer outreach, content coordination, approvals, execution, and performance tracking.",
  },
  {
    question: "Which platforms do you work with?",
    answer:
      "We manage influencer campaigns across Instagram, YouTube, TikTok, and modern social media platforms tailored to your target audience.",
  },
]

export default function InfluencerMarketing() {
  return (
    <>
      <SEO
        title="Influencer Marketing Agency | Framebeat Labs"
        description="Framebeat Labs helps brands grow through influencer marketing campaigns, creator collaborations, social media partnerships, and platform-native content strategies."
        keywords="influencer marketing agency, creator marketing agency, influencer campaigns, influencer marketing india, social media creators"
        url="https://www.framebeatlabs.com/services/influencer-marketing"
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
              Influencer Marketing Agency
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Creator-Led Campaigns That
              <span className="block text-neutral-300">
                Build Reach, Trust & Engagement
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              We help brands collaborate with creators and influencers to
              produce authentic platform-native campaigns designed to increase
              visibility, audience trust, engagement, and conversions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Launch an Influencer Campaign
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
              Influencer Campaign Strategy
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Authentic Marketing Through Creator Partnerships
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              At Framebeat Labs, we help brands build authentic creator
              partnerships that feel natural to audiences while driving real
              business growth across modern social platforms.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From campaign planning and influencer discovery to content
              coordination and reporting, we manage complete influencer
              marketing systems tailored for your brand goals.
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
              Influencer Marketing Services
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
                  Strategic influencer campaign management designed to maximize
                  audience engagement and brand visibility.
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
                Modern Marketing Built Around Authenticity
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
              Ideal For
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Campaigns Designed For Modern Platforms
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
              Strategic Influencer Campaign Workflow
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
              Performance-Driven Influencer Marketing
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We prioritize authentic creator collaborations over vanity
              metrics, helping brands build long-term audience trust and real
              engagement through platform-native storytelling.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We work with brands across India and globally, delivering
              influencer campaigns tailored to different audiences, industries,
              and digital platforms.
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
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Launch High-Impact Influencer Campaigns?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s build authentic creator partnerships and platform-native
                campaigns designed to grow your brand and audience engagement.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Launch an Influencer Campaign
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
