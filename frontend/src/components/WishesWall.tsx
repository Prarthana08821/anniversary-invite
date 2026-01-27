import { useEffect, useState } from "react"
import axios from "axios"

interface Wish {
  id: number
  name: string
  message: string
  created_at: string
}

export default function WishesWall({ refresh }: { refresh: number }) {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get(
              import.meta.env.VITE_API_URL + "/api/rsvp/"
  )

        const validWishes = response.data.filter(
          (w: Wish) => w.message && w.message.trim() !== ""
        )

        setWishes(validWishes)
      } catch (err) {
        console.error("Failed to fetch wishes", err)
      } finally {
        setLoading(false)
      }
    }

    fetchWishes()
  }, [refresh])

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <section className="mt-48 px-6 py-28 bg-[#FAF7F2] text-center">
        <p className="text-[#C9A24D] font-playfair text-lg tracking-wide">
          Loading wishes…
        </p>
      </section>
    )
  }

  /* ---------------- EMPTY STATE (AESTHETIC & COMPACT) ---------------- */
  if (!wishes.length) {
    return (
      <section className="mt-48 px-6 py-28 bg-[#FAF7F2] text-center">
        {/* Top divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="w-20 h-px bg-[#C9A24D]/40"></span>
          <span className="w-1 h-1 rounded-full bg-[#C9A24D]/50"></span>
          <span className="w-20 h-px bg-[#C9A24D]/40"></span>
        </div>

        {/* Main text */}
        <p className="font-playfair text-xl md:text-2xl text-gray-600 tracking-wide mb-6">
        This space is waiting for love to be shared
      </p>

      {/* Secondary text */}
      <p className="font-playfair text-sm md:text-base text-gray-500 tracking-widest uppercase">
        Be the first to leave a heartfelt wish
      </p>

        {/* Bottom divider */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <span className="w-14 h-px bg-[#C9A24D]/30"></span>
          <span className="w-1 h-1 rounded-full bg-[#C9A24D]/40"></span>
          <span className="w-14 h-px bg-[#C9A24D]/30"></span>
        </div>
      </section>
    )
  }

  /* ---------------- WISHES LIST ---------------- */
  return (
    <section className="mt-48 px-6 py-24 bg-[#FAF7F2]">
      {/* Section divider */}
      <div className="flex justify-center mb-16">
        <span className="w-28 h-px bg-[#C9A24D]/40"></span>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-playfair text-[#C9A24D] mb-16 tracking-wide">
        Wishes from Loved Ones
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="
              break-inside-avoid
              bg-white rounded-3xl p-6
              border-l-4 border-[#C9A24D]
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_45px_rgba(201,162,77,0.25)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Message */}
            <p className="text-gray-700 italic leading-relaxed text-base mb-6 font-playfair">
              “{wish.message}”
            </p>

            {/* Footer */}
            <div className="flex justify-between items-end">
              <span className="text-[#C9A24D] font-semibold font-playfair">
                ~ {wish.name}
              </span>

              <span className="text-xs text-gray-400">
                {new Date(wish.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}






















