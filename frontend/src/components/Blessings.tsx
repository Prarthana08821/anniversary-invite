import { motion } from "framer-motion"

export default function Blessings() {
  return (
    <div className="bg-blacklux py-20 px-6 text-offwhite">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center border-2 border-gold rounded-3xl p-10"
      >
        <h2 className="text-3xl font-luxury text-gold mb-6">
          With Love & Blessings
        </h2>

        <p className="italic text-offwhite/90 leading-relaxed">
          As we celebrate 25 beautiful years of togetherness,  
          we seek your blessings and warm presence on this joyous occasion.
        </p>

        <p className="mt-6 text-gold font-semibold">
          — Family & Well-Wishers
        </p>
      </motion.div>
    </div>
  )
}
