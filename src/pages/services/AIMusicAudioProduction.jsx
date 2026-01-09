import SEO from "../../components/SEO"

export default function AIMusicAudioProduction() {
  return (
    <>
      <SEO
        title="AI Music & Audio Production Services | Framebeat Labs & Media LLP"
        description="AI-powered music and audio production services including background scores, audio branding, jingles, and sound design for brands, ads, podcasts, and digital media."
        keywords="AI music production, audio branding, background music, sound design services India"
        url="https://framebeat.vercel.app/services/ai-music-audio"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          AI Music & Audio Production
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl leading-relaxed">
          Framebeat Labs & Media LLP provides AI-powered music and audio production
          services designed for modern brands, creators, and digital platforms.
          We create original, scalable, and copyright-safe audio assets that
          enhance brand identity and storytelling.
        </p>

        {/* Why it matters */}
        <p className="mt-4 text-neutral-400 max-w-3xl">
          From background scores for videos to complete audio branding systems,
          our AI-driven workflows allow faster turnaround, consistency, and
          creative flexibility — without compromising originality or quality.
        </p>

        {/* Services list */}
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">
          What We Offer
        </h2>

        <ul className="mt-6 space-y-3 text-neutral-300 list-disc list-inside">
          <li>Custom AI-generated background music & soundtracks</li>
          <li>Audio branding, jingles & sonic logos</li>
          <li>Podcast intro, outro & background scores</li>
          <li>Sound effects for ads, reels & digital campaigns</li>
          <li>Music for YouTube videos & social media content</li>
        </ul>

        {/* Use cases */}
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">
          Ideal For
        </h2>

        <ul className="mt-6 grid md:grid-cols-2 gap-4 text-neutral-300">
          <li>• Brand videos & commercials</li>
          <li>• Social media & short-form content</li>
          <li>• Podcasts & video podcasts</li>
          <li>• YouTube channels & creators</li>
          <li>• Digital ads & marketing campaigns</li>
          <li>• Corporate & explainer videos</li>
        </ul>

        {/* Why choose */}
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">
          Why Choose Framebeat Labs & Media LLP
        </h2>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          We work with brands across India and globally, delivering AI-driven video solutions tailored to each market.
        </p>


        <ul className="mt-6 space-y-3 text-neutral-300">
          <li>✔ 100% original & copyright-safe audio</li>
          <li>✔ Fast turnaround with AI-assisted workflows</li>
          <li>✔ Brand-consistent sound identity</li>
          <li>✔ Scalable solutions for startups & enterprises</li>
          <li>✔ Creative direction + technical expertise</li>
        </ul>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-neutral-800 p-8 md:p-12">
          <h3 className="text-2xl font-semibold tracking-tight">
            Need custom music or audio for your brand?
          </h3>

          <p className="mt-4 text-neutral-400 max-w-xl">
            Let’s create a sound identity that complements your visuals and
            strengthens your brand presence across platforms.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  )
}
