import ServiceCard from "../components/ServiceCard"

const services = [
  {
    title: "Brand Video Production",
    description: "High-quality commercials, corporate films, ads, reels, and brand videos."
  },
  {
    title: "AI Video Production",
    description: "Scalable, cost-effective AI-powered video content for modern marketing."
  },
  {
    title: "Influencer Marketing",
    description: "Authentic influencer campaigns with measurable impact."
  },
]

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  )
}
