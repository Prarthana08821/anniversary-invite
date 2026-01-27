import Confetti from "react-confetti"
import { useEffect, useState } from "react"

export default function GoldConfetti() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <Confetti
      numberOfPieces={250}
      colors={["#D4AF37", "#ffffff"]}
      gravity={0.15}
    />
  )
}
