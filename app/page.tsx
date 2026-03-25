"use client"

import { useState } from "react"
import { Starfield } from "@/components/starfield"
import { Eye } from "lucide-react"
import Image from "next/image"

type Tab = "home" | "projects" | "biolinks" | "socials"

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [isPlaying, setIsPlaying] = useState(false)

  const tabs: Tab[] = ["home", "projects", "biolinks", "socials"]

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <Starfield />
      
      {/* Main Card */}
      <div className="relative z-10 w-full max-w-[480px] mx-4">
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a]">
            <nav className="flex items-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm transition-colors ${
                    activeTab === tab 
                      ? "text-white font-medium" 
                      : "text-[#666] hover:text-[#999]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-[#666] text-sm">
                <Eye className="w-4 h-4" />
                <span>10,645</span>
              </div>
              <button className="text-[#666] hover:text-white text-sm border border-[#333] rounded px-1.5 py-0.5">
                [?]
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {activeTab === "home" && <HomeContent />}
            {activeTab === "projects" && <ProjectsContent />}
            {activeTab === "biolinks" && <BiolinksContent />}
            {activeTab === "socials" && <SocialsContent />}
          </div>

          {/* Music Player */}
          <div className="border-t border-[#1a1a1a] p-3">
            <div className="flex items-center gap-3">
              <Image
                src="https://i.scdn.co/image/ab67616d0000b273d1e326547f4c8d4a9d5c5d5a"
                alt="Angels"
                width={48}
                height={48}
                className="rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">Angels</p>
                <p className="text-xs text-[#666] truncate">A$AP Rocky</p>
              </div>
              <div className="flex items-center gap-1 text-[#666]">
                <span className="text-xs">01/09</span>
                <button className="p-1 hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:text-white"
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                <button className="p-1 hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zm2 0V6l8.5 6L8 18zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
                <button className="p-1 hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] text-[#666]">0:00 / 3:47</span>
              <div className="flex-1 h-1 bg-[#333] rounded-full overflow-hidden">
                <div className="h-full w-0 bg-white rounded-full" />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-[#333]"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 ml-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#666">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <div className="w-12 h-1 bg-[#333] rounded-full">
                  <div className="h-full w-3/4 bg-[#666] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function HomeContent() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl tracking-[0.3em] font-normal mb-1">cosmin</h1>
        <p className="text-sm text-[#666]">full stack developer specializing in modern web technologies</p>
      </div>
      
      {/* Twitter/X Embed Card */}
      <div className="relative bg-[#111] rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60"
          style={{
            backgroundImage: "url('https://pbs.twimg.com/profile_banners/1234567890/1234567890/1500x500')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3
          }}
        />
        <div className="relative p-3 flex items-center gap-3">
          <Image
            src="https://pbs.twimg.com/profile_images/1784693667871100928/eeZaYhyL_400x400.jpg"
            alt="cosmin kirk"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-white">cosmin kirk</span>
              <svg viewBox="0 0 22 22" className="w-4 h-4 text-blue-400" fill="currentColor">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/>
              </svg>
              <span className="text-yellow-500">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </span>
              <span className="text-purple-400">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M21 6H3V18H21V6Z"/>
                </svg>
              </span>
            </div>
            <p className="text-xs text-[#666]">@yungchristvampyre</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">projects</h2>
      
      {/* Heist Project Card */}
      <div className="bg-[#111] rounded-lg border border-[#1a1a1a] overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#222] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-white">Heist</h3>
                  <span className="text-[10px] bg-[#1a1a1a] text-[#888] px-2 py-0.5 rounded">540k+ users</span>
                </div>
                <p className="text-xs text-[#666] mt-0.5">Discord App focused on enhancing your chats.</p>
              </div>
            </div>
            <a href="#" className="text-[#666] hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-[#1a3a1a] text-green-400 px-2 py-1 rounded flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              Python
            </span>
            <span className="text-xs bg-[#1a1a2a] text-white px-2 py-1 rounded flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Next.js
            </span>
          </div>
          
          <div className="flex items-center gap-3 pt-3 border-t border-[#1a1a1a]">
            <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-white">Heist App</p>
              <div className="flex items-center gap-2 text-xs text-[#666]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  1,937 online
                </span>
                <span>8,506 members</span>
              </div>
            </div>
            <button className="ml-auto text-xs bg-[#222] hover:bg-[#333] text-white px-4 py-1.5 rounded transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BiolinksContent() {
  const links = [
    { icon: "discord", name: "@yungchristvampyre", url: "#" },
    { icon: "telegram", name: "@perver7", url: "#" },
    { icon: "discord", name: "@cosminbleh", url: "#", extra: "+" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">biolinks</h2>
      <div className="space-y-2">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="flex items-center gap-3 p-2 rounded hover:bg-[#111] transition-colors"
          >
            {link.icon === "discord" ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#5865F2]" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#26A5E4]" fill="currentColor">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            )}
            <span className="text-sm text-[#999]">{link.name}</span>
            {link.extra && <span className="text-[#666] text-sm">{link.extra}</span>}
          </a>
        ))}
      </div>
    </div>
  )
}

function SocialsContent() {
  const socials = [
    { icon: "discord", handle: "@yungchristvampyre" },
    { icon: "telegram", handle: "@perver7" },
    { icon: "discord", handle: "@cosminbleh", extra: "+" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">socials</h2>
      <div className="space-y-1">
        {socials.map((social, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-[#999]">
            {social.icon === "discord" ? (
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#5865F2]" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#26A5E4]" fill="currentColor">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            )}
            <span>{social.handle}</span>
            {social.extra && <span className="text-[#666]">{social.extra}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
