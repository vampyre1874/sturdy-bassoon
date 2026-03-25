import Image from "next/image"

export function HomePage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-[0.3em] mb-2 text-white lowercase">
          cosmin
        </h1>
        <p className="text-[#666] text-sm">
          full stack developer specializing in modern web technologies
        </p>
      </div>

      {/* Twitter Embed Card */}
      <div className="bg-[#111] rounded-lg p-3 border border-[#1a1a1a] relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1a1a1a] flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mZlBDUsU1K2ntndBDboPsnXdU96N2m.png"
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-medium text-sm text-white">cosmin kirk</span>
              {/* Verified badge */}
              <svg className="w-4 h-4 text-[#1d9bf0]" viewBox="0 0 22 22" fill="currentColor">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.691-.13.635-.08 1.293.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.603-.274 1.26-.144 1.896.13.636.433 1.221.878 1.69.47.447 1.055.752 1.69.883.635.13 1.294.084 1.902-.139.272.587.702 1.087 1.24 1.44s1.167.551 1.813.568c.646-.017 1.272-.213 1.812-.568s.97-.853 1.244-1.44c.608.223 1.267.272 1.902.14.635-.131 1.22-.436 1.691-.883.445-.47.749-1.054.878-1.69.13-.635.08-1.293-.139-1.896.587-.274 1.084-.705 1.439-1.246.355-.54.553-1.17.57-1.817z"/>
                <path fill="#000" d="M9.64 15.166l-3.846-4.107 1.52-1.422 2.218 2.369 4.592-5.478 1.603 1.345z"/>
              </svg>
              {/* Gold star badge */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#FFD700" d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
              </svg>
              {/* Purple badge */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#9c27b0" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              {/* Monitor icon */}
              <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <p className="text-[#666] text-sm">@yungchristvampyre</p>
          </div>
        </div>
        {/* Gradient overlay on the right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111] via-[#111]/80 to-transparent" />
      </div>
    </div>
  )
}
