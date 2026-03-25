import Image from "next/image"

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold tracking-wider mb-2" style={{ letterSpacing: "0.2em" }}>
          cosmin
        </h1>
        <p className="text-muted-foreground text-sm">
          full stack developer specializing in modern web technologies
        </p>
      </div>

      {/* Twitter Embed Card */}
      <div className="bg-card rounded-xl p-4 border border-border">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mZlBDUsU1K2ntndBDboPsnXdU96N2m.png"
              alt="Profile"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-sm">cosmin kirk</span>
              {/* Verified badges */}
              <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
              </svg>
              <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7V12C3 16.97 7.03 21.5 12 22.5C16.97 21.5 21 16.97 21 12V7L12 2Z" />
              </svg>
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm">@yungchristvampyre</p>
          </div>
        </div>
      </div>
    </div>
  )
}
