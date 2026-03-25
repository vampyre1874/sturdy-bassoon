"use client"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "home", label: "home" },
  { id: "projects", label: "projects" },
  { id: "biolinks", label: "biolinks" },
  { id: "socials", label: "socials" },
]

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex items-center gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`text-sm transition-colors ${
            activeTab === tab.id
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
