import { motion } from "framer-motion"

export default function ServiceCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group p-8 border rounded-2xl hover:border-black transition"
    >
      <h3 className="text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      <p className="mt-6 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition">
        Learn more →
      </p>
    </motion.div>
  )
}
