import { useState } from "react"

import IntroScreen from "../components/IntroScreen"
import SaveTheDate from "../components/SaveTheDate"

import Hero from "../components/Hero"
import EventDetails from "../components/EventDetails"
import PhotoGallery from "../components/gallery/PhotoGallery"
import HeroSparkles from "../components/HeroSparkles"
import MusicPlayer from "../components/MusicPlayer"
import RsvpForm from "../components/RsvpForm"
import WishesWall from "../components/WishesWall"
import Blessings from "../components/Blessings"
import VenueMap from "../components/VenueMap"

export default function Home() {
  // 🎯 Controls the screen flow
  const [stage, setStage] = useState<"intro" | "date" | "main">("intro")

  // 🔁 Refresh wishes after RSVP
  const [refreshWishes, setRefreshWishes] = useState(0)

  return (
    <>
      {/* 🎵 Music starts after intro */}
      <MusicPlayer play={stage !== "intro"} />

      
      {/* 🎬 INTRO SCREEN */}
      {stage === "intro" && (
        <IntroScreen onOpen={() => {}} onEnter={() => setStage("date")} />
      )}


      {/* 📅 SAVE THE DATE */}
      {stage === "date" && (
        <SaveTheDate onContinue={() => setStage("main")} />
      )}

      {/* 🎉 MAIN INVITATION */}
      {stage === "main" && (
        <>
          
          <HeroSparkles />
          <Hero />

          <EventDetails />
          <PhotoGallery />

          {/* RSVP + Wishes */}
          <RsvpForm onSuccess={() => setRefreshWishes((r) => r + 1)} />
          <WishesWall refresh={refreshWishes} />

          {/* Blessings & Venue */}
          <Blessings />
          <VenueMap />
        </>
      )}
    </>
  )
}
