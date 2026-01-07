import SEO from "../../components/SEO"

export default function ContentCreation() {
  return (
    <>
      <SEO
        title="Content Creation Services | Framebeat Labs & Media LLP"
        description="Creative content creation for brands including video, audio, and digital storytelling."
        keywords="content creation agency, digital content services"
        url="https://framebeat.vercel.app/services/content-creation"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Content Creation
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We create platform-optimized content that connects with audiences and
          strengthens brand identity.
        </p>

        <ul className="mt-16 list-disc list-inside space-y-3 text-neutral-300">
          <li>Video & reel content</li>
          <li>Branded visuals</li>
          <li>Creative storytelling</li>
          <li>Campaign content</li>
        </ul>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Create Content With Us
        </a>
      </div>
    </>
  )
}
