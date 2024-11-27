import BalanceSummary from '@/components/balance-summary'
import ProfitPeriodSelector from '@/components/profit-period-selector'
import PerformanceGraph from '@/components/performance-graph'
import FinancialPlaylistList from '@/components/financial-playlist-list'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Hoops Finance Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BalanceSummary />
            <ProfitPeriodSelector />
          </div>
          <PerformanceGraph />
        </div>
        <div className="lg:col-span-1">
          <FinancialPlaylistList />
        </div>
      </div>
    </div>
  )
}

