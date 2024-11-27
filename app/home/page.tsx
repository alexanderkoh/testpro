import { Card } from "@/components/ui/card"
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      title: "Swap",
      description: "Swap any token to any token at the best rates",
      emoji: "🔄",
      href: "/swap",
      gradient: "from-emerald-500/20 to-emerald-500/0"
    },
    {
      title: "Earn",
      description: "Earn interest from idle assets in real time",
      emoji: "💰",
      href: "/earn",
      gradient: "from-blue-500/20 to-blue-500/0"
    },
    {
      title: "Portfolio",
      description: "Track & manage your digital assets",
      emoji: "📊",
      href: "/portfolio",
      gradient: "from-purple-500/20 to-purple-500/0"
    },
    {
      title: "Get Rewards",
      description: "Earn bonus rewards by participating in Hoops activities",
      emoji: "🎁",
      href: "/rewards",
      gradient: "from-amber-500/20 to-amber-500/0"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold tracking-tight">
            Hoops Finance
          </h1>
          <p className="text-xl text-gray-400">
            Automated Portfolio Management
          </p>
          <button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full transition-colors">
            Connect Wallet
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title}>
              <Card className={`
                relative overflow-hidden
                bg-gradient-to-br ${feature.gradient}
                hover:scale-[1.02] transition-all
                border-gray-800 hover:border-gray-700
                p-6 h-[200px] group
                flex flex-col justify-between
                backdrop-blur-sm
              `}>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="text-2xl">{feature.emoji}</span>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
                
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {feature.emoji}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
