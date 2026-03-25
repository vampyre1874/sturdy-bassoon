"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, SkipBack, SkipForward, Maximize2, Volume2 } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress] = useState(0)
  const totalTime = "3:47"
  const currentTime = "0:00"

  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        {/* Album Art */}
        <div className="w-12 h-12 bg-[#1a1a1a] rounded overflow-hidden flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mZlBDUsU1K2ntndBDboPsnXdU96N2m.png"
            alt="Album art"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate text-white">Angels</p>
          <p className="text-xs text-[#666] truncate">A$AP Rocky</p>
        </div>

        {/* Track Number */}
        <span className="text-xs text-[#666]">01/09</span>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-[#1a1a1a] rounded transition-colors text-[#666] hover:text-white">
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white text-black rounded-full hover:opacity-90 transition-opacity"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3 ml-0.5" />
            )}
          </button>
          <button className="p-1.5 hover:bg-[#1a1a1a] rounded transition-colors text-[#666] hover:text-white">
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Expand Button */}
        <button className="p-1.5 hover:bg-[#1a1a1a] rounded transition-colors text-[#666] hover:text-white">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar Row */}
      <div className="flex items-center gap-3 mt-3">
        <span className="text-[10px] text-[#666] w-8">{currentTime} / {totalTime}</span>
        
        {/* Progress Dots */}
        <div className="flex-1 flex justify-center gap-1">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i === 0 ? "bg-white" : "bg-[#333]"
              }`}
            />
          ))}
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-3 h-3 text-[#666]" />
          <div className="w-12 h-0.5 bg-[#333] rounded-full">
            <div className="w-1/2 h-full bg-[#666] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
