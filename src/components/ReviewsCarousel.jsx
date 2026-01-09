import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    text: "We were impressed with the quality of brand videos delivered by Framebeat Labs & Media LLP. The visuals, storytelling, and editing were clean and professional. They understood our requirements clearly and delivered exactly what we needed.",
    name: "Bhavik Shah",
    source: "Google Review",
  },
  {
    text: "We collaborated with Framebeat Labs & Media LLP for an influencer campaign, and the process was smooth from start to finish. Influencer selection was spot-on, and the content felt authentic rather than promotional. We saw good engagement and reach from the campaign.",
    name: "Sooraj Suresh",
    source: "Google Review",
  },
  {
    text: "What stands out about Framebeat Labs & Media LLP is their professionalism and reliability. Clear communication, timely delivery, and strong creative execution. They understand both creativity and business requirements very well.",
    name: "Iam",
    source: "Google Review",
  },
]

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-xl">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-neutral-300 leading-relaxed">
              “{reviews[index].text}”
            </p>

            <div className="mt-6">
              <p className="font-medium">
                {reviews[index].name}
              </p>
              <p className="text-sm text-neutral-500">
                {reviews[index].source}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-4 flex gap-2">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
