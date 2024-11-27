import { AIChat } from "@/components/ai-chat"
import { StrategiesSidebar } from "@/components/strategies-sidebar"

export default function HoopsAIPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <StrategiesSidebar />
      <AIChat />
    </div>
  )
}

