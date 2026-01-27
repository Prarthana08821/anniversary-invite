import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function EventDetails() {
  return (
    <div className="bg-offwhite py-16 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative
          max-w-3xl mx-auto
          text-center
          rounded-[2.5rem]
          bg-white
          px-8 py-14 md:px-16 md:py-18
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* Subtle top gold glow */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_55%)] pointer-events-none" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-luxury text-gold text-3xl md:text-4xl mb-4"
        >
          Celebration Details
        </motion.h2>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-[2px] bg-gold mx-auto mb-12 rounded-full"
        />

        {/* Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-blacklux"
        >
          {/* Date */}
          <motion.div
            variants={itemVariants}
            className="group transition hover:-translate-y-1"
          >
            <p className="tracking-[0.25em] text-gold text-xs mb-3">
              DATE
            </p>
            <p className="text-lg md:text-xl font-medium group-hover:text-gold transition">
              13th February
            </p>
          </motion.div>

          {/* Time */}
          <motion.div
            variants={itemVariants}
            className="group transition hover:-translate-y-1"
          >
            <p className="tracking-[0.25em] text-gold text-xs mb-3">
              TIME
            </p>
            <p className="text-lg md:text-xl font-medium group-hover:text-gold transition">
              7:00 PM onwards
            </p>
          </motion.div>

          {/* Venue */}
          <motion.div
            variants={itemVariants}
            className="group transition hover:-translate-y-1"
          >
            <p className="tracking-[0.25em] text-gold text-xs mb-3">
              VENUE
            </p>
            <p className="text-lg md:text-xl font-medium group-hover:text-gold transition">
              Greens Party Hall
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
