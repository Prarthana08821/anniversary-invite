import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  { src: "/gallery/photo1.jpeg", caption: "Where it all quietly began." },
  { src: "/gallery/photo2.jpeg", caption: "Learning life together, one step at a time." },
  { src: "/gallery/photo3.jpeg", caption: "Little hands, big hearts." },
  { src: "/gallery/photo4.jpeg", caption: "Celebrations that became traditions." },
  { src: "/gallery/photo5.jpeg", caption: "Love growing along with laughter." },
  { src: "/gallery/photo6.jpeg", caption: "Every year, a new memory added." },
  { src: "/gallery/photo7.jpeg", caption: "Together, even in the simplest moments." },
  { src: "/gallery/photo8.jpeg", caption: "Smiles shaped by time." },
  { src: "/gallery/photo9.jpeg", caption: "Journeys that mattered more because they were shared." },
  { src: "/gallery/photo10.jpeg", caption: "Family — the truest celebration." },
  { src: "/gallery/photo11.jpeg", caption: "Standing strong through seasons of life." },
  { src: "/gallery/photo13.jpeg", caption: "Grace in togetherness." },
  { src: "/gallery/photo14.jpeg", caption: "Love that aged beautifully." },
  { src: "/gallery/photo15.jpeg", caption: "Every smile tells a story." },
  { src: "/gallery/photo16.jpeg", caption: "Years passed, bond deepened." },
  { src: "/gallery/photo17.jpeg", caption: "Side by side, always." },
  { src: "/gallery/photo18.jpeg", caption: "A lifetime of shared dreams." },
  { src: "/gallery/photo19.jpeg", caption: "Moments framed by love." },
  { src: "/gallery/photo20.jpeg", caption: "Still choosing each other." },
  { src: "/gallery/photo21.jpeg", caption: "Love that never rushed." },
  { src: "/gallery/photo22.jpeg", caption: "Together feels like home." },
  { src: "/gallery/photo23.jpeg", caption: "Time tested. Heart approved." },
  { src: "/gallery/photo24.jpeg", caption: "A story still unfolding." },
]

export default function PhotoGallery() {
  const [index, setIndex] = useState(0)

  const prev = images[(index - 1 + images.length) % images.length]
  const current = images[index]
  const next = images[(index + 1) % images.length]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-black py-32 overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-24">
        <div className="w-28 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <h2
          className="
            text-4xl md:text-6xl
            font-serif
            tracking-wider
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-[#F5E3A1]
            via-[#C9A24D]
            to-[#A67C00]
            drop-shadow-[0_2px_6px_rgba(201,162,77,0.6)]
          "
          style={{ fontVariant: "small-caps" }}
        >
          Moments Through The Years
        </h2>

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-gray-400">
          With Love & Blessings
        </p>
      </div>

      {/* SLIDESHOW */}
      <div className="relative max-w-7xl mx-auto h-[70vh] flex items-center justify-center">
        {/* LEFT BLUR */}
        <div
          className="absolute left-0 w-1/3 h-full bg-center bg-cover blur-3xl opacity-30"
          style={{ backgroundImage: `url(${prev.src})` }}
        />

        {/* RIGHT BLUR */}
        <div
          className="absolute right-0 w-1/3 h-full bg-center bg-cover blur-3xl opacity-30"
          style={{ backgroundImage: `url(${next.src})` }}
        />

        {/* CENTER IMAGE WITH FRAME */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* GOLD FRAME */}
            <div className="p-[10px] rounded-[22px] bg-gradient-to-br from-[#F5E3A1] via-[#C9A24D] to-[#8B6B1E] shadow-[0_30px_120px_rgba(201,162,77,0.4)]">
              <div className="p-[6px] rounded-[16px] bg-black">
                <img
                  src={current.src}
                  alt=""
                  className="max-h-[68vh] rounded-xl object-contain"
                />
              </div>
            </div>

            {/* CAPTION */}
            <p className="mt-8 text-center text-sm md:text-base text-gray-300 tracking-wide italic">
              {current.caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS */}
        <button
          onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-6 text-[#C9A24D] text-5xl z-20 hover:scale-110 transition"
        >
          ‹
        </button>

        <button
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          className="absolute right-6 text-[#C9A24D] text-5xl z-20 hover:scale-110 transition"
        >
          ›
        </button>
      </div>
    </section>
  )
}
