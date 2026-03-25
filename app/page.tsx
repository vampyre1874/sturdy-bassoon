"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ViewCounter } from "@/components/view-counter"
import { MusicPlayer } from "@/components/music-player"
import { HomePage } from "@/components/pages/home-page"
import { ProjectsPage } from "@/components/pages/projects-page"
import { BiolinksPage } from "@/components/pages/biolinks-page"
import { SocialsPage } from "@/components/pages/socials-page"
import { Starfield } from "@/components/starfield"

export default function Page() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Starfield Background */}
      <Starfield />

      {/* Centered Content Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[500px] bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-lg p-6">
          {/* Header with Navigation and View Counter */}
          <header className="flex items-center justify-between mb-8">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            <ViewCounter count={10645} />
          </header>

          {/* Main Content */}
          <main className="min-h-[200px]">
            {activeTab === "home" && <HomePage />}
            {activeTab === "projects" && <ProjectsPage />}
            {activeTab === "biolinks" && <BiolinksPage />}
            {activeTab === "socials" && <SocialsPage />}
          </main>

          {/* Music Player inside card */}
          <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  )
}
