import { Eye } from "lucide-react"

interface ViewCounterProps {
  count: number
}

export function ViewCounter({ count }: ViewCounterProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 text-xs text-[#555]">
        <Eye className="w-3.5 h-3.5" />
        <span>{count.toLocaleString()}</span>
      </div>
      <span className="text-[#555] text-xs">[?]</span>
    </div>
  )
}
