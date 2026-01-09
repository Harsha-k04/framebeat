import SEO from "../../components/SEO"

export default function YouTubeChannelManagement() {
  return (
    <>
      <SEO
        title="YouTube Channel Management | Framebeat Labs & Media LLP"
        description="YouTube channel strategy, content management, and growth optimization."
        keywords="YouTube channel management, YouTube growth agency"
        url="https://framebeat.vercel.app/services/youtube-management"
      />
      

      <div className="max-w-7xl mx-auto px-6 py-24">
        <a
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
        >
          ← Back to Services
        </a>
        <h1 className="text-4xl md:text-5xl font-semibold">
          YouTube Channel Management
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          We help brands and creators grow YouTube channels with consistent content,
          SEO optimization, and audience engagement strategies.
        </p>
        <p className="mt-4 text-neutral-400 max-w-3xl">
          We work with brands across India and globally, delivering AI-driven video solutions tailored to each market.
        </p>

        <ul className="mt-16 list-disc list-inside space-y-3 text-neutral-300">
          <li>Channel strategy & positioning</li>
          <li>Content planning & publishing</li>
          <li>Thumbnail & title optimization</li>
          <li>Analytics & growth tracking</li>
        </ul>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Grow Your YouTube Channel
        </a>
      </div>
    </>
  )
}
