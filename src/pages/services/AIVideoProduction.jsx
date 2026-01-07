import SEO from "../../components/SEO"

export default function AIVideoProduction() {
  return (
    <>
      <SEO
        title="AI Video Production Services | Framebeat Labs & Media LLP"
        description="AI-powered video production services for scalable, fast, and high-quality content creation."
        keywords="AI video production, automated video content, AI media services"
        url="https://framebeat.vercel.app/services/ai-video-production"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold">
          AI Video Production
        </h1>

        <p className="mt-6 text-neutral-300 max-w-3xl">
          Our AI-driven video workflows allow brands to produce high-quality
          content faster, smarter, and at scale.
        </p>

        <ul className="mt-16 list-disc list-inside space-y-3 text-neutral-300">
          <li>AI-generated promotional videos</li>
          <li>Short-form social media videos</li>
          <li>Automated content variations</li>
          <li>Multilingual video production</li>
        </ul>

        <p className="mt-12 text-neutral-400 max-w-3xl">
          Perfect for brands that need speed, consistency, and innovation without
          compromising creative quality.
        </p>

        <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
          Explore AI Video Solutions
        </a>
      </div>
    </>
  )
}
