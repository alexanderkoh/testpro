import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketMetrics } from "@/components/market-metrics"
import { TokensTable } from "@/components/tokens-table"

export default function TokensPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <MarketMetrics />
      
      <Card className="border rounded-lg bg-card">
        <div className="p-4">
          <Tabs defaultValue="hot" className="w-full">
            <TabsList>
              <TabsTrigger value="hot">Hot Tokens</TabsTrigger>
              <TabsTrigger value="rwa">Real World Assets</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="p-4">
          <TokensTable />
        </div>
      </Card>
    </div>
  )
}

