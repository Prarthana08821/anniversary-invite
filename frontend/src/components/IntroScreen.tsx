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

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* ENVELOPE */}
        <motion.div
          animate={{ y: opened ? 0 : [0, -14, 0] }}
          transition={{
            duration: opened ? 0.6 : 6,
            repeat: opened ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            w-[380px] h-[280px]
            sm:w-[500px] sm:h-[340px]
            md:w-[620px] md:h-[390px]
          "
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-br from-[#D4AF5A]/20 to-transparent blur-xl" />

          {/* Shadow */}
          <div className="absolute inset-0 rounded-[3rem] shadow-[0_70px_160px_rgba(0,0,0,0.8)]" />

          {/* Envelope base */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#3E3732] to-[#26211E] border border-[#C9A24D]/30" />

          {/* Inner lining */}
          <div className="absolute inset-3 rounded-[2.5rem] border border-[#C9A24D]/25" />

          {/* Flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: opened ? -180 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[3rem] bg-gradient-to-b from-[#4E463F] to-[#322C27] z-20"
          />

          {/* INNER GLOW */}
          <div className="
            absolute inset-8
            rounded-2xl
            bg-[radial-gradient(circle_at_center,rgba(212,175,90,0.18),transparent_70%)]
            pointer-events-none
            z-5
          " />

          {/* CARD */}
          <motion.div
            initial={{ y: 36, opacity: 0 }}
            animate={{
              y: opened ? -26 : 36,
              opacity: opened ? 1 : 0,
            }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="
              absolute inset-6
              bg-[#FAF7F2]
              bg-[linear-gradient(transparent,rgba(0,0,0,0.015))]
              rounded-2xl
              flex flex-col items-center justify-center
              text-center
              px-10 py-9
              z-10
              border border-[#C9A24D]/45
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              overflow-hidden
            "
          >
            {/* Monogram watermark */}
            <div className="
              absolute inset-0
              flex items-center justify-center
              text-[120px] md:text-[160px]
              font-serif
              text-[#C9A24D]/10
              tracking-widest
              select-none
              pointer-events-none
            ">
              J&nbsp;&amp;&nbsp;M
            </div>

            {/* Top divider */}
            <div className="w-14 h-px bg-[#C9A24D]/80 mb-4 relative z-10" />

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl text-[#C9A24D] mb-4 tracking-wide relative z-10">
              Silver Jubilee
            </h1>

            {/* Pickup line */}
            <p className="font-serif text-[15px] md:text-[16px] text-gray-600 leading-relaxed max-w-sm relative z-10">
              Years have passed, seasons have changed,<br />
              yet the promise remains—<br />
              to walk side by side,<br />
              finding home in the same place every day.
            </p>

            {/* Bottom divider */}
            <div className="w-6 h-px bg-[#C9A24D]/60 mt-5 relative z-10" />
          </motion.div>

          {/* Corner highlights */}
          <div className="absolute inset-6 rounded-2xl pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#C9A24D]/30 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C9A24D]/30 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C9A24D]/30 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#C9A24D]/30 rounded-br-xl" />
          </div>

          {/* GOLD DUST */}
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none z-30"
              >
                {[...Array(22)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                      x: Math.random() * 360 - 180,
                    }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      y: -140,
                    }}
                    transition={{
                      duration: 3,
                      delay: Math.random() * 0.6,
                      ease: "easeOut",
                    }}
                    className="
                      absolute left-1/2 top-1/2
                      w-1 h-1
                      rounded-full
                      bg-[#D4AF5A]
                      shadow-[0_0_14px_rgba(212,175,90,0.9)]
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
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="
              mt-10
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mt-6
              px-10 py-3
              rounded-full
              bg-[#D4AF5A]/90
              text-black
              text-sm
              tracking-widest
              uppercase
              shadow-[0_0_35px_rgba(212,175,90,0.5)]
            "
          >
            Enter Celebration
          </motion.button>
        )}
      </div>
    </div>
  )
}
