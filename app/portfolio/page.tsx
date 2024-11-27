import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MetricsSummary from '@/components/metrics-summary'
import PerformanceGraph from '@/components/performance-graph'
import FinancialPlaylistList from '@/components/financial-playlist-list'

export default function PortfolioPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$124,500</div>
                <p className="text-xs text-muted-foreground">+$1,200 (2.4%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">2 pending updates</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+18.2%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceGraph />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Financial Playlists</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <FinancialPlaylistList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

