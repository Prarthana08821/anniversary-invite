import { motion } from "framer-motion"

const nameVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blacklux px-4">

      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/gallery/photo1.jpeg')] bg-cover bg-center scale-110 blur-md opacity-30" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_60%)]" />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative z-10
          w-full max-w-2xl
          border-4 border-gold
          rounded-[2.5rem]
          bg-black/70
          backdrop-blur-md
          px-8 py-14 md:px-14 md:py-20
          text-center
          shadow-2xl
        "
      >
        {/* ✨ MODERN GLOW ACCENTS (NO LINES) */}
        <span className="absolute top-6 left-6 w-2 h-2 rounded-full bg-gold opacity-70" />
        <span className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gold opacity-70" />
        <span className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gold opacity-70" />
        <span className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-gold opacity-70" />

        {/* Subtitle */}
        <p className="tracking-[0.35em] text-gold text-xs md:text-sm mb-6">
          CELEBRATING 25 YEARS OF TOGETHERNESS
        </p>

        {/* Names */}
        <h1 className="mx-auto max-w-xl font-luxury text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          <div>
            {"Jithendra Kumar R".split("").map((char, i) => (
              <motion.span
                key={`j-${i}`}
                custom={i}
                variants={nameVariant}
                initial="hidden"
                animate="visible"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="text-offwhite text-2xl md:text-3xl my-2">&</div>

          <div>
            {"Mamatha".split("").map((char, i) => (
              <motion.span
                key={`m-${i}`}
                custom={i + 20}
                variants={nameVariant}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Tagline */}
        <p className="italic text-offwhite/85 text-base md:text-lg mb-10">
          Silver moments • Golden memories
        </p>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-gold mx-auto mb-10 rounded-full" />

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  )
}
