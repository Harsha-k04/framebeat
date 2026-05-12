import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const benefits = [
  "Faster Content Production",
  "AI-Enhanced Editing Workflows",
  "Scalable Short Form Content",
  "Multi-Platform Video Optimization",
]

const process = [
  "Strategy & Planning",
  "Script & Creative Direction",
  "AI Video Production",
  "Editing & Optimization",
  "Delivery & Scaling",
]

const faqs = [
  {
    question: "What is AI video production?",
    answer:
      "AI video production combines artificial intelligence tools with creative direction to create scalable, high-quality videos faster and more efficiently.",
  },
  {
    question: "Can AI videos be used for marketing?",
    answer:
      "Yes. AI-generated videos are widely used for social media marketing, ads, explainers, product showcases, and short-form content campaigns.",
  },
  {
    question: "Do you provide human creative oversight?",
    answer:
      "Absolutely. Every AI-powered workflow at Framebeat Labs includes creative strategy, editing, and quality control from our team.",
  },
  {
    question: "What types of brands benefit from AI videos?",
    answer:
      "Startups, ecommerce brands, creators, SaaS companies, agencies, and modern businesses looking to scale content production efficiently.",
  },
]

export default function AIVideoProduction() {
  return (
    <>
      <SEO
        title="AI Video Production Agency | Framebeat Labs"
        description="Framebeat Labs helps brands scale through AI video production, short-form content, AI-generated marketing videos, and cinematic visual storytelling."
        keywords="AI video production, AI video agency, AI generated videos, AI marketing videos, short form video production"
        url="https://www.framebeatlabs.com/services/ai-video-production"
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
              AI-Powered Video Production
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Scale Faster With
              <span className="block text-neutral-300">
                AI-Powered Video Production
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              Create cinematic AI-generated videos, short-form content,
              marketing creatives, and scalable branded media designed for
              modern platforms, ads, and social growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Start Your Project
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

        {/* WHO THIS IS FOR */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Who This Is For
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Built For Modern Brands & Fast Content Scaling
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              Our AI video production services are designed for brands,
              startups, creators, agencies, and businesses that need consistent
              high-quality video output for ads, social media, product
              marketing, YouTube, and digital campaigns.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Benefits
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Why Brands Are Moving Towards AI Video Workflows
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {benefits.map((item, index) => (
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
                  Designed to help brands produce more content faster while
                  maintaining strong visual quality and brand consistency.
                </p>
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
              Strategic AI Video Production Workflow
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

        {/* WHAT YOU GET */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                What You Get
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                High-Impact Video Content Designed For Growth
              </h2>
            </div>

            <div className="space-y-5 text-neutral-300 text-lg">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                Short-form marketing videos
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                AI-generated ad creatives
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                Product & explainer videos
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                Multi-platform optimized content
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                Faster turnaround at scale
              </div>
            </div>
          </div>
        </section>

        {/* WHY FRAMEBEAT */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Why Framebeat Labs
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              AI Efficiency Meets Creative Direction
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We combine advanced AI-powered workflows with human creativity,
              storytelling, editing, and strategic thinking to ensure your
              content feels premium, engaging, and aligned with your brand.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From startups to growing brands, we help businesses across India
              and globally create scalable AI-driven content systems built for
              modern audiences.
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

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
                Ready To Create AI-Powered Videos For Your Brand?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s build scalable, cinematic, and high-performing AI video
                content tailored for your audience and growth goals.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Explore AI Video Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
