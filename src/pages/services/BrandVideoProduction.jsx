import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const services = [
  "Cinematic Brand Films",
  "Commercial & Ad Production",
  "Corporate Profile Videos",
  "Product & Explainer Videos",
]

const process = [
  "Creative Strategy",
  "Concept Development",
  "Production & Filming",
  "Editing & Color Grading",
  "Delivery & Optimization",
]

const benefits = [
  "Premium Cinematic Visuals",
  "Story-Driven Brand Communication",
  "Platform-Optimized Content",
  "High-End Production Workflow",
]

const faqs = [
  {
    question: "What is brand video production?",
    answer:
      "Brand video production involves creating cinematic videos that communicate your brand story, products, values, and messaging to audiences across digital platforms.",
  },
  {
    question: "What types of videos do you create?",
    answer:
      "We create commercials, corporate films, explainer videos, campaign visuals, launch videos, product showcases, and social media content.",
  },
  {
    question: "Who is this service ideal for?",
    answer:
      "Startups, growing brands, creators, ecommerce businesses, and enterprises looking to build trust, awareness, and stronger brand positioning.",
  },
  {
    question: "Do you provide strategy and scripting?",
    answer:
      "Yes. We handle creative strategy, scripting, direction, production, editing, and optimization to ensure your videos align with business goals.",
  },
]

export default function BrandVideoProduction() {
  return (
    <>
      <SEO
        title="Brand Video Production Agency | Framebeat Labs"
        description="Framebeat Labs creates cinematic brand videos, commercials, product films, and campaign visuals designed to strengthen brand identity and audience engagement."
        keywords="brand video production, commercial video production, corporate video production, cinematic brand films, product videos"
        url="https://www.framebeatlabs.com/services/brand-video-production"
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
              Cinematic Brand Video Production
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Cinematic Videos That
              <span className="block text-neutral-300">
                Elevate Modern Brands
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              We create cinematic brand videos, commercials, product films,
              campaign visuals, and high-impact digital content designed to
              build trust, increase engagement, and strengthen brand identity.
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

        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Brand Storytelling
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Premium Visual Storytelling Designed For Growth
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              At Framebeat Labs, we combine cinematic visuals, strategic
              storytelling, and modern production workflows to create brand
              videos that connect emotionally and perform across digital
              platforms.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Every video is crafted with a clear objective — whether it is
              increasing awareness, building trust, showcasing products, or
              driving conversions.
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
              Modern Video Production Services
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
                  Professionally crafted visuals designed to enhance brand
                  perception and audience engagement across platforms.
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
                Video Content Built To Perform
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

        {/* PROCESS */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Strategic Production Workflow
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

        {/* WHO THIS IS FOR */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Ideal For
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Built For Brands Looking To Stand Out
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              Ideal for startups, growing businesses, creators, and enterprises
              looking to establish credibility, showcase products, strengthen
              brand positioning, and create premium visual experiences.
            </p>
          </div>
        </section>

        {/* WHY FRAMEBEAT */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Why Framebeat Labs
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Creative Storytelling Meets Production Excellence
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We blend cinematic storytelling, strategic direction, and modern
              production systems to create videos that not only look visually
              premium but also deliver measurable brand impact.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              We work with brands across India and globally, delivering
              high-quality video production tailored for modern audiences and
              digital platforms.
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
                Ready To Create High-Impact Brand Videos?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s build cinematic brand films, commercials, and visual
                campaigns designed to elevate your brand presence and audience
                engagement.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Start a Video Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
