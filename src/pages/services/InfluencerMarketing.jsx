import SEO from "../../components/SEO"

export default function InfluencerMarketing() {
  return (
    <>
      <SEO
        title="Influencer Marketing Agency | Framebeat Labs & Media LLP"
        description="Strategic influencer marketing campaigns with creators that align with your brand values."
        keywords="influencer marketing agency, creator marketing India"
        url="https://framebeat.vercel.app/services/influencer-marketing"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Influencer Marketing
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We connect brands with the right creators to build authentic engagement
          and measurable results.
        </p>

        <ul className="mt-16 space-y-3 text-neutral-300 list-disc list-inside">
          <li>Influencer discovery & vetting</li>
          <li>Campaign strategy & execution</li>
          <li>Content coordination</li>
          <li>Performance tracking</li>
        </ul>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Launch an Influencer Campaign
        </a>
      </div>
    </>
  )
}
