import SEO from "../../components/SEO"

export default function PodcastProduction() {
  return (
    <>
      <SEO
        title="Podcast Production Services | Framebeat Labs & Media LLP"
        description="Professional podcast production including recording, editing, and distribution."
        keywords="podcast production, audio podcast services"
        url="https://framebeat.vercel.app/services/podcast-production"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Podcast Production
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We help brands and creators launch high-quality podcasts with professional
          audio, structure, and branding.
        </p>

        <ul className="mt-16 list-disc list-inside space-y-3 text-neutral-300">
          <li>Podcast strategy & format planning</li>
          <li>Recording & editing</li>
          <li>Intro/outro & audio branding</li>
          <li>Distribution support</li>
        </ul>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Start a Podcast
        </a>
      </div>
    </>
  )
}
