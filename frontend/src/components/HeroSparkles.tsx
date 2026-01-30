import { motion } from "framer-motion"

export default function HeroCeremonyReveal() {
  return (
    <>
      {/* 🌕 CEREMONIAL GOLDEN BLOOM */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.5, opacity: [0, 0.45, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-20
          flex items-center justify-center
        "
      >
        <div
          className="
            w-[75vmin] h-[75vmin]
            rounded-full
            bg-[radial-gradient(circle_at_center,rgba(212,175,90,0.65),transparent_70%)]
            blur-2xl
          "
        />
      </motion.div>

      {/* ✨ SOFT GOLD REVEAL SWEEP */}
      <motion.div
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "120%", opacity: [0, 0.25, 0] }}
        transition={{
          duration: 1.8,
          delay: 0.4,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-30
        "
      >
        <div
          className="
            absolute inset-y-0
            w-[55%]
            bg-gradient-to-r
            from-transparent
            via-[#D4AF5A]/35
            to-transparent
            blur-2xl
            rotate-12
          "
        />
      </motion.div>
    </>
  )
}
