import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const photos = [
  {
    src: "/gallery/photo1.jpeg",
    caption: "Together through every season",
  },
  {
    src: "/gallery/photo2.jpeg",
    caption: "Moments that became memories",
  },
  {
    src: "/gallery/photo3.jpeg",
    caption: "25 years of love & laughter",
  },
]

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0)

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-blacklux py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-luxury text-gold mb-4">
          Golden Memories
        </h2>

        <p className="text-offwhite/70 italic mb-12">
          A glimpse into a beautiful journey together
        </p>

        {/* Cinematic Frame */}
        <div
          className="
            relative
            mx-auto
            max-w-3xl
            rounded-3xl
            overflow-hidden
            border-4 border-gold
            shadow-2xl
          "
        >
          {/* Blurred Background */}
          <img
            src={photos[current].src}
            aria-hidden
            className="
              absolute inset-0
              w-full h-full
              object-cover
              blur-xl
              scale-110
              opacity-50
            "
          />

          {/* Soft Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Foreground Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={photos[current].src}
              alt={photos[current].caption}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                relative z-10
                mx-auto
                max-h-[520px]
                object-contain
              "
            />
          </AnimatePresence>
        </div>

        {/* Caption */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <p className="font-luxury text-gold text-xl md:text-2xl">
            {photos[current].caption}
          </p>

          <div className="w-20 h-[2px] bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}
