import { useParams, Link } from "react-router-dom"
import SEO from "../components/SEO"

const blogPosts = {
  "grow-youtube-channel-2026": {
    title: "How to Grow a YouTube Channel in 2026",
    category: "YouTube Growth",
    description:
      "Learn modern YouTube growth strategies including Shorts, SEO optimization, audience retention, and scalable content systems.",
    content: `
      YouTube continues to be one of the most powerful platforms for creators,
      brands, and businesses looking to build long-term audience engagement.

      In 2026, successful YouTube growth is no longer just about uploading
      videos consistently. Modern creators focus on strategy, audience
      retention, discoverability, and platform-specific optimization.

      ## Focus on Search & Discoverability

      YouTube functions like a search engine. Optimizing titles,
      descriptions, thumbnails, and keywords is essential for long-term
      visibility.

      ## Build Around Short-Form Content

      YouTube Shorts continue to dominate audience reach and discovery.
      Brands using Shorts strategically are able to grow subscribers much
      faster.

      ## Improve Audience Retention

      Strong hooks, pacing, storytelling, and editing quality significantly
      improve watch time and engagement.

      ## Create Consistent Content Systems

      Successful channels rely on scalable workflows including content
      planning, production systems, and publishing schedules.

      ## Final Thoughts

      YouTube growth in 2026 is driven by consistency, SEO optimization,
      audience understanding, and modern content systems.
    `,
  },

  "ai-video-production-vs-traditional": {
    title: "AI Video Production vs Traditional Video Production",
    category: "AI Video Production",
    description:
      "Explore the differences between AI-powered video workflows and traditional production systems.",
    content: `
      AI video production is rapidly changing how brands create content.

      Traditional production workflows often require larger teams,
      expensive equipment, and longer turnaround times.

      AI-powered production systems allow brands to scale content faster,
      especially for social media marketing and short-form campaigns.

      ## Traditional Video Production

      Traditional workflows are ideal for high-end cinematic campaigns,
      commercials, and complex productions.

      ## AI Video Production

      AI-powered systems improve efficiency, automation, scalability,
      and production speed.

      ## Which Is Better?

      The best approach often combines AI efficiency with human creativity.

      ## Final Thoughts

      Modern brands increasingly use hybrid production systems combining
      cinematic storytelling with AI-powered workflows.
    `,
  },

  "short-form-content-social-media": {
    title: "Why Short-Form Content Dominates Social Media",
    category: "Content Creation",
    description:
      "Understand why short-form videos dominate audience engagement across modern platforms.",
    content: `
      Short-form content has transformed modern digital marketing.

      Platforms like Instagram Reels, TikTok, and YouTube Shorts prioritize
      fast, engaging, and highly consumable video content.

      ## Why Short-Form Content Works

      Modern audiences consume content faster than ever.

      Short-form videos capture attention quickly and increase retention.

      ## Platform Algorithms Favor It

      Most social platforms actively prioritize short-form content because
      it improves user engagement and session duration.

      ## Stronger Brand Visibility

      Brands using short-form storytelling consistently achieve better
      reach and audience interaction.

      ## Final Thoughts

      Short-form content is no longer optional for modern digital growth.
      It has become one of the most powerful marketing formats available.
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams()

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Article Not Found</h1>

          <Link
            to="/blog"
            className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-xl hover:bg-neutral-200 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        keywords={`${post.category}, Framebeat Labs blog`}
        url={`https://www.framebeatlabs.com/blog/${slug}`}
      />

      <div className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-4xl mx-auto px-6 pt-28 pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
          >
            ← Back to Blog
          </Link>

          <span className="inline-block mt-10 rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300">
            {post.category}
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            {post.title}
          </h1>

          <p className="mt-8 text-xl text-neutral-400 leading-relaxed max-w-3xl">
            {post.description}
          </p>

          <div className="mt-10 flex items-center gap-4 text-sm text-neutral-500">
            <span>Framebeat Labs</span>
            <span>•</span>
            <span>2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-14">
            <div className="prose prose-invert prose-neutral max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-p:leading-relaxed prose-h2:mt-12 prose-h2:text-3xl prose-h2:font-semibold prose-h3:text-2xl">
              {post.content
                .split("\n")
                .filter(Boolean)
                .map((line, index) => {
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={index}>
                        {line.replace("## ", "")}
                      </h2>
                    )
                  }

                  return <p key={index}>{line}</p>
                })}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              FAQs
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-6">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7">
                <h3 className="text-xl font-medium">
                  Why are blogs important for SEO?
                </h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Blogs help websites rank for informational keywords,
                  increase topical authority, and improve long-term organic
                  traffic through internal linking and search visibility.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7">
                <h3 className="text-xl font-medium">
                  How often should brands publish blogs?
                </h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Publishing high-quality articles consistently is more
                  important than publishing frequently. Even 2–4 strong
                  articles per month can improve SEO significantly.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7">
                <h3 className="text-xl font-medium">
                  What type of blogs perform best?
                </h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Educational content, industry trends, comparisons,
                  tutorials, and strategy-focused articles tend to perform
                  best for long-term SEO and audience engagement.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 md:p-16">
            <h2 className="text-4xl font-semibold tracking-tight max-w-3xl leading-tight">
              Need Help Building High-Impact Content Systems?
            </h2>

            <p className="mt-6 text-neutral-400 text-lg max-w-2xl leading-relaxed">
              Framebeat Labs helps brands scale through AI-powered content,
              YouTube growth, influencer marketing, and strategic digital
              storytelling.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Contact Us
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-neutral-400 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
