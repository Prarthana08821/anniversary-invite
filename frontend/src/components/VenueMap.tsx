import { motion } from "framer-motion"

export default function VenueMap() {
  return (
    <div className="bg-offwhite py-16 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-luxury text-gold mb-4">
          Venue & Directions
        </h2>

        <p className="text-blacklux/80 mb-8">
          <span className="font-semibold">Greens Party Hall</span>
        </p>

        {/* Google Map Embed */}
        <div className="border-4 border-gold rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Greens Party Hall Location"
            src="https://www.google.com/maps?q=Greens+Party+Hall&output=embed"
            className="w-full h-[320px] md:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Open in Maps Button */}
        <a
          href="https://maps.app.goo.gl/9JDrADSoyd1Hm1Fx9"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-8
            border border-gold text-gold
            px-8 py-3 rounded-full
            tracking-widest
            hover:bg-gold hover:text-blacklux
            transition
          "
        >
          OPEN IN GOOGLE MAPS
        </a>
      </motion.div>
    </div>
  )
}
