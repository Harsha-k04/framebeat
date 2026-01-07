import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    text: "Framebeat Labs & Media LLP delivered outstanding video content that elevated our brand presence.",
    name: "Client Name",
    source: "Google Review",
  },
  {
    text: "Professional team with a strong creative vision. Highly recommended for media and marketing work.",
    name: "Client Name",
    source: "Google Review",
  },
  {
    text: "Great experience working with Framebeat Labs. The quality and execution were excellent.",
    name: "Client Name",
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
