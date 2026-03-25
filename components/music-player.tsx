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
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-border">
      <div className="max-w-xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Album Art */}
          <div className="w-12 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
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
            <p className="text-sm font-medium truncate">Angels</p>
            <p className="text-xs text-muted-foreground truncate">A$AP Rocky</p>
          </div>

          {/* Track Number */}
          <span className="text-xs text-muted-foreground">01/09</span>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-muted rounded transition-colors">
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </button>
            <button className="p-1.5 hover:bg-muted rounded transition-colors">
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Expand Button */}
          <button className="p-1.5 hover:bg-muted rounded transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-muted-foreground w-8">{currentTime}</span>
          <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-foreground rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Progress Dots */}
          <div className="flex gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 0 ? "bg-foreground" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground w-8 text-right">{totalTime}</span>
        </div>

        {/* Volume */}
        <div className="flex items-center justify-end mt-2 gap-2">
          <Volume2 className="w-3 h-3 text-muted-foreground" />
          <div className="w-16 h-0.5 bg-muted rounded-full">
            <div className="w-1/2 h-full bg-muted-foreground rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
