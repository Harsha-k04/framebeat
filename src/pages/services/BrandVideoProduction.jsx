import SEO from "../../components/SEO"

export default function BrandVideoProduction() {
  return (
    <>
      <SEO
        title="Brand Video Production Services | Framebeat Labs & Media LLP"
        description="Professional brand video production services including commercials, corporate films, explainer videos, and brand storytelling."
        keywords="brand video production, corporate videos, commercial video production India"
        url="https://framebeat.vercel.app/services/brand-video-production"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Brand Video Production
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We craft high-impact brand videos that communicate your story, values,
          and vision through cinematic visuals and compelling narratives.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">What We Create</h2>
        <ul className="mt-6 list-disc list-inside space-y-3 text-neutral-300">
          <li>Brand films & commercials</li>
          <li>Corporate & company profile videos</li>
          <li>Explainer & product videos</li>
          <li>Campaign & launch videos</li>
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">Why It Works</h2>
        <p className="mt-6 text-neutral-400 max-w-3xl">
          Video builds trust faster than any other medium. Our videos are designed
          to engage, convert, and leave a lasting brand impression.
        </p>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Start a Video Project
        </a>
      </div>
    </>
  )
}
