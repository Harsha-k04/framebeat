import SEO from "../../components/SEO"

export default function BrandVideoProduction() {
  return (
    <>
      <SEO
        title="Brand Video Production Services | Framebeat Labs & Media LLP"
        description="High-quality brand video production including commercials, corporate films, explainer videos, and campaign visuals."
        keywords="brand video production, corporate videos, commercial filmmaking India"
        url="https://framebeat.vercel.app/services/brand-video-production"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Brand Video Production
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We produce cinematic brand videos that communicate your story, values,
          and offerings with clarity and emotional impact. Every video is crafted
          with a strategic objective — awareness, trust, or conversion.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">Who This Is For</h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          Ideal for startups, growing brands, and enterprises looking to establish
          credibility, showcase products, or strengthen brand positioning.
        </p>

        <h2 className="mt-16 text-2xl font-semibold">Our Approach</h2>
        <ul className="mt-6 list-disc list-inside space-y-3 text-neutral-300">
          <li>Concept development aligned with brand strategy</li>
          <li>Professional filming and direction</li>
          <li>High-end editing, sound design, and color grading</li>
          <li>Platform-optimized video outputs</li>
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">What You Get</h2>
        <ul className="mt-6 list-disc list-inside space-y-3 text-neutral-300">
          <li>Brand films & commercials</li>
          <li>Corporate profile videos</li>
          <li>Explainer & product videos</li>
          <li>Campaign & launch visuals</li>
        </ul>

        <h2 className="mt-16 text-2xl font-semibold">Why Framebeat</h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          We blend storytelling with execution excellence to create videos that
          don’t just look good — they perform.
        </p>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Start a Video Project
        </a>
      </div>
    </>
  )
}
