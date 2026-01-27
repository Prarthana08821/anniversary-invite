import { useEffect, useRef, useState } from "react"

type MusicPlayerProps = {
  play: boolean
}

export default function MusicPlayer({ play }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  // Fade IN function
  const fadeIn = (audio: HTMLAudioElement, target = 0.6) => {
    audio.volume = 0
    audio.play().then(() => {
      let vol = 0
      const fade = setInterval(() => {
        vol += 0.05
        if (vol >= target) {
          audio.volume = target
          clearInterval(fade)
        } else {
          audio.volume = vol
        }
      }, 100)
    }).catch(() => {
      setPlaying(false)
    })
  }

  // Fade OUT function
  const fadeOut = (audio: HTMLAudioElement) => {
    let vol = audio.volume
    const fade = setInterval(() => {
      vol -= 0.05
      if (vol <= 0) {
        audio.volume = 0
        audio.pause()
        clearInterval(fade)
      } else {
        audio.volume = vol
      }
    }, 100)
  }

  // Start music AFTER clicking ENTER invitation
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !play) return

    fadeIn(audio)
    setPlaying(true)
  }, [play])

  // Toggle play / mute
  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      fadeOut(audio)
      setPlaying(false)
    } else {
      fadeIn(audio)
      setPlaying(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        preload="auto"
      />

      {/* Floating Play / Mute Button */}
      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="
          fixed bottom-6 right-6 z-50
          bg-blacklux text-gold
          border border-gold
          px-5 py-3 rounded-full
          shadow-lg backdrop-blur
          hover:scale-105 active:scale-95
          transition
        "
      >
        {playing ? "🔇 Mute Music" : "🎵 Play Music"}
      </button>
    </>
  )
}
