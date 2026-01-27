import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type IntroScreenProps = {
  onOpen: () => void
  onEnter: () => void
}

export default function IntroScreen({ onOpen, onEnter }: IntroScreenProps) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    if (!opened) {
      setOpened(true)
      onOpen()
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/intro-bg.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* ENVELOPE */}
        <motion.div
          animate={{ y: opened ? 0 : [0, -18, 0] }}
          transition={{
            duration: opened ? 0.6 : 6,
            repeat: opened ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            w-[360px] h-[260px]
            sm:w-[460px] sm:h-[320px]
            md:w-[560px] md:h-[360px]
          "
        >
          {/* Shadow */}
          <div className="absolute inset-0 rounded-[2.75rem] shadow-[0_60px_140px_rgba(0,0,0,0.75)]" />

          {/* Envelope base */}
          <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-b from-[#3A332E] to-[#2A2420] border border-[#C9A24D]/25" />

          {/* Flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: opened ? -180 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[2.75rem] bg-gradient-to-b from-[#4A423C] to-[#332C27] z-20"
          />

          {/* CARD */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: opened ? -30 : 40,
              opacity: opened ? 1 : 0,
            }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="
              absolute inset-6
              bg-[#FAF7F2]
              rounded-2xl
              flex flex-col items-center justify-center
              text-center
              px-10
              z-10
              border border-[#C9A24D]/45
              shadow-[0_35px_90px_rgba(0,0,0,0.35)]
            "
          >
            <div className="w-16 h-px bg-[#C9A24D]/80 mb-6" />

            {/* TITLE */}
            <h1 className="font-serif text-3xl md:text-4xl text-[#C9A24D] mb-4 tracking-wide">
              Silver Jubilee
            </h1>

            {/* NEW LINE */}
            <p className="font-serif text-base md:text-lg text-gray-600 leading-relaxed">
              Still choosing each other.
            </p>
          </motion.div>

          {/* GOLD DUST */}
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none z-30"
              >
                {[...Array(18)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                      x: Math.random() * 300 - 150,
                    }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      y: -120,
                    }}
                    transition={{
                      duration: 2.8,
                      delay: Math.random() * 0.6,
                      ease: "easeOut",
                    }}
                    className="
                      absolute left-1/2 top-1/2
                      w-1 h-1
                      rounded-full
                      bg-[#D4AF5A]
                      shadow-[0_0_12px_rgba(212,175,90,0.8)]
                    "
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        {!opened && (
          <motion.button
            onClick={handleOpen}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="
              font-sans
              mt-12
              px-14 py-4
              rounded-full
              bg-[#D4AF5A]
              text-black
              text-sm
              tracking-widest
              uppercase
              shadow-[0_0_45px_rgba(212,175,90,0.6)]
            "
          >
            Open Invitation
          </motion.button>
        )}

        {opened && (
          <motion.button
            onClick={onEnter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              font-sans
              mt-10
              text-sm
              tracking-widest
              uppercase
              text-[#D4AF5A]
              border-b border-[#D4AF5A]
              pb-1
            "
          >
            Enter Celebration
          </motion.button>
        )}
      </div>
    </div>
  )
}
