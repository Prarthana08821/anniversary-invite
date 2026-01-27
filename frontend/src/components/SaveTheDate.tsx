import { motion } from "framer-motion"

type SaveTheDateProps = {
  onContinue: () => void
}

export default function SaveTheDate({ onContinue }: SaveTheDateProps) {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">

      <div className="relative flex flex-col items-center">

        {/* CIRCULAR CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="
            relative
            w-[320px] h-[320px]
            sm:w-[400px] sm:h-[400px]
            md:w-[480px] md:h-[480px]
            rounded-full
            overflow-hidden
            flex items-center justify-center
          "
        >
          {/* RAYS */}
          <motion.img
            src="/images/save-bg.jpg"
            alt="Golden Rays"
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ rotate: 360 }}
            transition={{
              duration: 160,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* INNER CIRCLE */}
          <div className="absolute w-[72%] h-[72%] rounded-full bg-black flex items-center justify-center">
            <div className="text-center px-6">

              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#D4AF5A] mb-4">
                Save the Date
              </p>

              <h1 className="font-heading text-2xl sm:text-3xl text-[#D4AF5A] mb-4">
                Silver Jubilee
              </h1>

              <p className="font-body text-sm sm:text-base text-white/85 mb-6 leading-relaxed">
                Celebrating 25 years<br />
                of togetherness
              </p>

              <p className="font-body text-lg sm:text-xl font-semibold text-[#D4AF5A]">
                13 Febrauary 2026
              </p>

              <p className="font-body text-sm text-white/70 mt-1">
                HASSAN
              </p>

            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.button
          onClick={onContinue}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="
            mt-12
            px-16 py-4
            rounded-full
            bg-[#D4AF5A]
            text-black
            text-sm
            tracking-[0.3em]
            uppercase
            shadow-[0_0_35px_rgba(212,175,90,0.6)]
            hover:scale-105
            transition
          "
        >
          View Invitation
        </motion.button>
      </div>
    </div>
  )
}
