"use client"

import { Starfield } from "@/components/starfield"
import { Github, Send, Moon } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Starfield />

      {/* Theme Toggle */}
      <button className="fixed top-6 right-6 z-20 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors">
        <Moon className="w-5 h-5 text-white" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-4 py-16 max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-5xl font-bold italic mb-2">{"hey, I'm hiffs"}</h1>
            <p className="text-zinc-500 mb-4">discord ; @hiffs</p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Avatar with glow effect */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 animate-pulse opacity-60 blur-md" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dbNCiMUpGaloz8vAhCybm9yQpgnxIH.png"
                  alt="Avatar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Red notification dot */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-black" />
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">about</h2>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Listening to </span>
              <span className="text-white">Wish (feat. Trippie Redd) - Trippie Mix</span>
              <span>by</span>
              <span className="text-white">Diplo</span>
            </div>
          </div>

          {/* Spotify Embed Card */}
          <div className="bg-zinc-900/80 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
                  alt="Album Art"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Wish (feat. Trippie Redd) - Trippie Mix</h3>
                    <p className="text-sm text-zinc-400">Diplo, Trippie Redd</p>
                  </div>
                  <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full text-sm transition-colors">
                    <span className="text-white">&#9654;</span>
                    <span>preview</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Lyrics */}
            <div className="text-sm mb-4 space-y-1">
              <p className="text-zinc-500">{"I can't feel my face"}</p>
              <p className="text-white font-medium">{"I can't feel my face"}</p>
              <p className="text-zinc-500">I wish you will find your chill</p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-green-500">0:51</span>
              <div className="flex-1 h-1 bg-zinc-700 rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-green-500 rounded-full" />
                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-zinc-400">2:56</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-zinc-300 leading-relaxed">
            roblox developer since 2022, skilled in Lua and Python, i create games and tools while exploring programming and automation.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">experience</h2>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 bg-purple-600">
              <Image
                src="https://tr.rbxcdn.com/180DAY-0d9e567eca1cdec2efa4c8f6a90a8bbb/150/150/Image/Webp/noFilter"
                alt="Da Hood"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">Da Hood</h3>
                <span className="text-sm text-zinc-500">July 2024 - December 2025</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                An action-based game focused on fast movement and intense combat. Players must react quickly, stay alert, and adapt to constant fights, keeping the gameplay exciting and high-paced.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">skills</h2>

          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm">
              <Github className="w-4 h-4" />
              GitHub
            </span>
            <span className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm">
              <span className="text-blue-400">&#9790;</span>
              LUA
            </span>
            <span className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm">
              <span className="text-red-500">&#9881;</span>
              Roblox Scripting
            </span>
            <span className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm">
              <span className="text-yellow-500">&#9830;</span>
              Python
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}
