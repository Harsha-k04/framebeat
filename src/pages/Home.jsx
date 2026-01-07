import { motion } from "framer-motion"
import SEO from "../components/SEO"
import ReviewsCarousel from "../components/ReviewsCarousel"

export default function Home() {
  return (
    <>
      <SEO
        title="Framebeat Labs & Media LLP | Media, AI & Marketing Solutions"
        description="Framebeat Labs & Media LLP is a media, AI, and digital marketing company helping brands grow through video production, influencer marketing, and content strategy."
        keywords="media company, video production, AI content, influencer marketing, digital marketing agency India"
        url="https://framebeat.vercel.app/"
      />

      <div className="px-6 md:px-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-28 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight max-w-4xl"
          >
            Media, AI & Marketing Solutions
            <span className="block text-gray-500">for Modern Brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-lg text-gray-600 max-w-2xl"
          >
            We help brands grow through cinematic video production, AI-powered
            content, influencer marketing, and strategic digital storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              Start a Project
            </a>

            <a
              href="/services"
              className="px-6 py-3 border rounded-lg"
            >
              View Services
            </a>
          </motion.div>
        </section>

        {/* What We Do */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What We Do
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Framebeat Labs & Media LLP delivers end-to-end media, AI, and digital
              marketing solutions designed to build visibility, engagement, and
              long-term brand value.
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Brands trust Framebeat Labs & Media LLP for high-quality media,
            AI-driven creativity, and strategic marketing execution.
          </p>

          <div className="mt-12">
            <ReviewsCarousel />
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            Reviews sourced from Google
          </p>

          <a
            href="https://www.google.com/maps/place/Framebeat+Labs+%26+Media+LLP"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm underline"
          >
            View on Google →
          </a>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="bg-black text-white rounded-3xl p-12 md:p-20">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
              Ready to build content that actually grows your brand?
            </h3>

            <a
              href="/contact"
              className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
