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
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          {/* subtle background depth */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight max-w-4xl"
          >
            Media, AI & Marketing Solutions
            <span className="block mt-2 text-neutral-300 font-medium">
              for Modern Brands
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-lg text-neutral-300 max-w-2xl leading-relaxed"
          >
            We help brands grow through cinematic video production, AI-powered
            content, influencer marketing, and strategic digital storytelling —
            designed to drive visibility, engagement, and long-term growth.
          </motion.p>

          {/* quick clarity bullets */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300">
            <li>• Brand & AI Video Production</li>
            <li>• Influencer Marketing Campaigns</li>
            <li>• Social Media & Content Strategy</li>
            <li>• Podcast & YouTube Management</li>
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="px-7 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              Start a Project
            </a>

            <a
              href="/services"
              className="px-7 py-3 border border-neutral-700 text-white rounded-lg hover:border-neutral-500 transition"
            >
              View Services
            </a>
          </motion.div>
        </section>

        {/* What We Do */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What We Do
            </h2>

            <p className="mt-6 text-neutral-300 leading-relaxed">
              Framebeat Labs & Media LLP delivers end-to-end media, AI, and digital
              marketing solutions designed to help brands increase visibility,
              build trust, and drive measurable growth across platforms.
            </p>

            <p className="mt-4 text-neutral-400">
              From cinematic brand films to scalable AI-driven content and
              influencer-led campaigns, we combine creativity with strategy to
              deliver real business impact.
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-neutral-300 max-w-2xl">
            Brands trust Framebeat Labs & Media LLP for high-quality media,
            AI-driven creativity, and results-focused marketing execution.
          </p>

          <div className="mt-12">
            <ReviewsCarousel />
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            Reviews sourced from Google
          </p>

          <a
            href="https://www.google.co.in/search?sca_esv=07b6421d581a57bc&sxsrf=AE3TifNq6KkxTtMjqzSqyH-bS3hpqA2gqg:1767804447530&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3o7P_y15QT6ncjmf_1KuPtd1HfdzR42PMnMt38RbGOmJ9G6cY_MRbS7S_LlsIs6mSM2TP-AR6R8rSBICQjiySpvz0oLI2r6Pef5nhRikLvXxqy0rA%3D%3D&q=Framebeat+Labs+%26+Media+LLP+Reviews&sa=X&ved=2ahUKEwjvkoLh8PmRAxWD8zgGHZl2JPkQ0bkNegQIHRAE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm underline text-neutral-400 hover:text-neutral-200"
          >
            View on Google →
          </a>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="bg-gradient-to-br from-black to-neutral-900 text-white rounded-3xl p-12 md:p-20">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
              Ready to build content that actually grows your brand?
            </h3>

            <p className="mt-4 text-neutral-300 max-w-xl">
              Let’s collaborate to create impactful media, AI-powered content,
              and marketing strategies tailored to your goals.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-7 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
