import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import SEO from "../components/SEO"

const blogs = [
  {
    title: "How to Grow a YouTube Channel in 2026",
    slug: "grow-youtube-channel-2026",
    category: "YouTube Growth",
    description:
      "Discover modern YouTube growth strategies including Shorts, SEO optimization, audience retention, and scalable content systems.",
    date: "May 2026",
  },
  {
    title: "AI Video Production vs Traditional Video Production",
    slug: "ai-video-production-vs-traditional",
    category: "AI Video Production",
    description:
      "Explore the differences between AI-powered video workflows and traditional production methods for modern brands.",
    date: "May 2026",
  },
  {
    title: "Why Short-Form Content Dominates Social Media",
    slug: "short-form-content-social-media",
    category: "Content Creation",
    description:
      "Learn why short-form videos are transforming audience engagement across Instagram Reels, TikTok, and YouTube Shorts.",
    date: "May 2026",
  },
]

export default function Blog() {
  return (
    <>
      <SEO
        title="Marketing & AI Content Blog | Framebeat Labs"
        description="Explore insights on AI video production, influencer marketing, YouTube growth, social media strategy, and modern content creation."
        keywords="AI video production blog, YouTube growth tips, influencer marketing insights, content strategy"
        url="https://www.framebeatlabs.com/blog"
      />

      <div className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800 opacity-20 blur-3xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">
              Insights, Trends & Strategies
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
              The Framebeat Labs
              <span className="block text-neutral-300">
                Marketing & Content Blog
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              Explore modern strategies for AI video production, YouTube growth,
              influencer marketing, social media management, and digital
              storytelling built for modern brands and creators.
            </p>
          </motion.div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-900">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 md:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-700 opacity-10 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-4xl">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Featured Article
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                How to Grow a YouTube Channel in 2026
              </h2>

              <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-3xl">
                Learn how creators and brands are scaling YouTube channels using
                Shorts, audience retention strategies, SEO optimization, and
                consistent content systems.
              </p>

              <Link
                to="/blog/grow-youtube-channel-2026"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Read Article
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Latest Articles
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Insights For Modern Digital Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="group h-full overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 hover:border-neutral-700 transition duration-300">
                    <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.15em] text-neutral-400">
                      {blog.category}
                    </span>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight leading-tight group-hover:text-white transition">
                      {blog.title}
                    </h3>

                    <p className="mt-5 text-neutral-400 leading-relaxed">
                      {blog.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        {blog.date}
                      </span>

                      <span className="text-sm text-white">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
