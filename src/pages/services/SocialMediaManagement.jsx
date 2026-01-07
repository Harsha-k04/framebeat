import SEO from "../../components/SEO"

export default function SocialMediaManagement() {
  return (
    <>
      <SEO
        title="Social Media Management Services | Framebeat Labs & Media LLP"
        description="Strategic social media management to grow brand visibility and engagement."
        keywords="social media management agency, Instagram marketing"
        url="https://framebeat.vercel.app/services/social-media-management"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Social Media Management
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We manage your social media presence with strategy, consistency, and
          creative execution.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">Who This Is For</h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          Brands looking to build long-term digital presence and audience trust.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">Our Approach</h2>
        <ul className="mt-6 list-disc list-inside space-y-3 text-neutral-300">
          <li>Content planning & calendars</li>
          <li>Reels & short-form strategy</li>
          <li>Community engagement</li>
          <li>Analytics & optimization</li>
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">Why Framebeat</h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          We focus on growth, not just posting.
        </p>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Grow Your Social Presence
        </a>
      </div>
    </>
  )
}
