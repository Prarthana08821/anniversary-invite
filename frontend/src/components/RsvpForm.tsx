import { useState } from "react"
import axios from "axios"
import confetti from "canvas-confetti"

export default function RsvpForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [attending, setAttending] = useState(true)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const submitRsvp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post(
  import.meta.env.VITE_API_URL + "/api/rsvp/",
  {
    name,
    phone,
    attending,
    message,
  }
)


      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.65 },
        colors: ["#C9A24D", "#E6C97A", "#FFF8E1"],
      })

      setSuccess(true)
      onSuccess()
    } catch {
      alert("Unable to send wishes. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/rsvp.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        {success ? (
          <div className="mt-20 text-center">
            <h2 className="text-3xl text-[#C9A24D] mb-3 font-serif">
              Thank you for your wishes ✨
            </h2>
            <p className="text-gray-200">
              Your love has been added to our golden memories 💛
            </p>
          </div>
        ) : (
          <form
            onSubmit={submitRsvp}
            className="
              max-w-xl mx-auto mt-20 p-10 rounded-3xl
              bg-white/80
              backdrop-blur-lg
              border border-[#C9A24D]/40
              shadow-[0_0_50px_rgba(0,0,0,0.25)]
            "
          >
            <h2 className="text-center text-4xl text-[#C9A24D] mb-10 font-serif">
              Celebrate With Us
            </h2>

            {/* Name */}
            <input
              required
              placeholder="Your Name"
              className="
                w-full mb-4 px-4 py-3 rounded-xl
                bg-white/70 text-gray-900
                border border-[#C9A24D]/30
                placeholder:text-gray-500
                focus:border-[#C9A24D]
                outline-none
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Phone */}
            <input
              placeholder="Phone Number"
              className="
                w-full mb-4 px-4 py-3 rounded-xl
                bg-white/70 text-gray-900
                border border-[#C9A24D]/30
                placeholder:text-gray-500
                focus:border-[#C9A24D]
                outline-none
              "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* Attending */}
            <select
              className="
                w-full mb-4 px-4 py-3 rounded-xl
                bg-white/70 text-gray-900
                border border-[#C9A24D]/30
                focus:border-[#C9A24D]
                outline-none
              "
              value={attending ? "yes" : "no"}
              onChange={(e) => setAttending(e.target.value === "yes")}
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">Sorry, I can’t attend</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Write your heartfelt wishes 💛"
              rows={4}
              className="
                w-full mb-8 px-4 py-3 rounded-xl
                bg-white/70 text-gray-900
                border border-[#C9A24D]/30
                placeholder:text-gray-500
                focus:border-[#C9A24D]
                outline-none
              "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-4 rounded-full text-lg font-semibold
                bg-[#C9A24D] text-black
                hover:bg-[#D8B35A]
                transition
              "
            >
              {loading ? "Sending…" : "Send Wishes"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
