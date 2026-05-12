import { motion } from "framer-motion"
import SEO from "../../components/SEO"

const offerings = [
  "Custom AI-generated background music",
  "Audio branding & sonic identities",
  "Podcast intros, outros & soundtracks",
  "Sound effects for ads & reels",
]

const useCases = [
  "Brand Videos & Commercials",
  "Social Media & Reels",
  "Podcasts & Video Podcasts",
  "YouTube Channels & Creators",
  "Digital Ads & Campaigns",
  "Corporate & Explainer Videos",
]

const process = [
  "Creative Strategy",
  "Sound Design & Composition",
  "AI Audio Enhancement",
  "Mixing & Mastering",
  "Delivery & Optimization",
]

const faqs = [
  {
    question: "What is AI music production?",
    answer:
      "AI music production combines artificial intelligence tools with creative direction to generate scalable, original, and high-quality music and audio assets.",
  },
  {
    question: "Are AI-generated audio assets copyright safe?",
    answer:
      "Yes. We focus on creating original and commercially usable audio assets suitable for marketing, podcasts, videos, and digital campaigns.",
  },
  {
    question: "Can you create custom audio branding?",
    answer:
      "Absolutely. We create sonic logos, branded sound identities, jingles, and audio systems tailored to your brand personality.",
  },
  {
    question: "Who benefits from AI audio production?",
    answer:
      "Creators, brands, startups, agencies, YouTube channels, podcasters, and businesses looking for scalable and modern audio solutions.",
  },
]

export default function AIMusicAudioProduction() {
  return (
    <>
      <SEO
        title="AI Music & Audio Production Agency | Framebeat Labs"
        description="Framebeat Labs provides AI-powered music and audio production services including sound design, audio branding, jingles, podcast audio, and cinematic soundtracks."
        keywords="AI music production, AI audio production, audio branding, sound design services, AI generated music"
        url="https://www.framebeatlabs.com/services/ai-music-audio"
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
              AI-Powered Audio & Music Production
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              Scalable AI Music &
              <span className="block text-neutral-300">
                Audio Production For Modern Brands
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              Create cinematic soundtracks, AI-generated music, podcast audio,
              sonic branding, and scalable sound design systems designed for
              modern media, advertising, and digital platforms.
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
              AI Audio Solutions
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Audio That Strengthens Brand Identity
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              Framebeat Labs helps brands and creators scale audio production
              using AI-assisted workflows combined with human creativity and
              professional sound design expertise.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From background scores and branded soundtracks to podcast audio
              systems and social media sound design, we create modern audio
              experiences tailored for digital-first brands.
            </p>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              AI-Enhanced Music & Sound Design Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-neutral-700 flex items-center justify-center text-xl">
                  ♫
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item}</h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Designed to help brands create immersive and scalable audio
                  experiences across digital platforms and campaigns.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IDEAL FOR */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Ideal For
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Built For Modern Digital Media
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
              Strategic Audio Production Workflow
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
              AI Efficiency Combined With Creative Sound Design
            </h2>

            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              We combine AI-powered workflows with professional creative
              direction to ensure your audio feels premium, original, and
              aligned with your visual identity.
            </p>

            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              From startups to growing brands, we help businesses across India
              and globally create scalable audio systems designed for modern
              platforms and audiences.
            </p>

            <div className="mt-10 space-y-4 text-neutral-300">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                ✔ 100% original & copyright-safe audio
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                ✔ Fast turnaround with AI-assisted workflows
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                ✔ Brand-consistent sound identity systems
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                ✔ Creative strategy + technical expertise
              </div>
            </div>
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
                Need Custom Music Or Audio For Your Brand?
              </h2>

              <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
                Let’s create cinematic sound systems, branded audio identities,
                and scalable AI-powered music designed for modern media and
                digital experiences.
              </p>

              <a
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
