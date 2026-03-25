import { Eye } from "lucide-react"

interface ViewCounterProps {
  count: number
}

export function ViewCounter({ count }: ViewCounterProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Eye className="w-4 h-4" />
        <span>{count.toLocaleString()}</span>
      </div>
      <span className="text-muted-foreground text-sm">[?]</span>
    </div>
  )
}
