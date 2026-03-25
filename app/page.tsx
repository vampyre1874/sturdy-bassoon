"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ViewCounter } from "@/components/view-counter"
import { MusicPlayer } from "@/components/music-player"
import { HomePage } from "@/components/pages/home-page"
import { ProjectsPage } from "@/components/pages/projects-page"
import { BiolinksPage } from "@/components/pages/biolinks-page"
import { SocialsPage } from "@/components/pages/socials-page"

export default function Page() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-xl mx-auto px-4 py-8">
        {/* Header with Navigation and View Counter */}
        <header className="flex items-center justify-between mb-12">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          <ViewCounter count={10645} />
        </header>

        {/* Main Content */}
        <main className="mb-32">
          {activeTab === "home" && <HomePage />}
          {activeTab === "projects" && <ProjectsPage />}
          {activeTab === "biolinks" && <BiolinksPage />}
          {activeTab === "socials" && <SocialsPage />}
        </main>

        {/* Fixed Music Player */}
        <MusicPlayer />
      </div>
    </div>
  )
}
