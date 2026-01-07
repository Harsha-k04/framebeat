import SEO from "../../components/SEO"

export default function InfluencerMarketing() {
  return (
    <>
      <SEO
        title="Influencer Marketing Agency | Framebeat Labs & Media LLP"
        description="Authentic influencer marketing campaigns driven by strategy and performance."
        keywords="influencer marketing agency India, creator marketing"
        url="https://framebeat.vercel.app/services/influencer-marketing"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Influencer Marketing
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We help brands collaborate with the right creators to drive authentic
          engagement and measurable impact.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">Who This Is For</h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          Brands looking to increase reach, trust, and conversions through
          creator-led storytelling.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">Our Approach</h2>
        <ul className="mt-6 list-disc list-inside space-y-3 text-neutral-300">
          <li>Influencer discovery & vetting</li>
          <li>Campaign planning & briefs</li>
          <li>Content coordination</li>
          <li>Performance tracking</li>
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">What You Get</h2>
        <ul className="mt-6 list-disc list-inside space-y-3 text-neutral-300">
          <li>Creator collaborations</li>
          <li>Platform-native content</li>
          <li>Campaign reporting</li>
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">Why Framebeat</h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          We prioritize authenticity over vanity metrics.
        </p>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Launch an Influencer Campaign
        </a>
      </div>
    </>
  )
}
