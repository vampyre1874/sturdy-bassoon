import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">projects</h2>

      {/* Project Card - Heist */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4">
          <div className="flex items-start gap-4">
            {/* Project Icon */}
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">Heist</h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                  540k+ users
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Discord App focused on enhancing your chats.
              </p>

              {/* Tech Tags */}
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs bg-muted px-2.5 py-1 rounded-md">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Python
                </span>
                <span className="flex items-center gap-1.5 text-xs bg-muted px-2.5 py-1 rounded-md">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 19h20L12 2z" />
                  </svg>
                  Next.js
                </span>
              </div>
            </div>
          </div>

          {/* Discord Server Info */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Heist App</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      1,937 online
                    </span>
                    <span>8,506 members</span>
                  </div>
                </div>
              </div>
              <button className="bg-muted hover:bg-muted/80 px-4 py-1.5 rounded text-sm font-medium transition-colors">
                join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
