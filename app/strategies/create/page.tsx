"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Info, Zap } from 'lucide-react'

export default function CreateStrategyPage() {
  const [pools, setPools] = useState([{ id: 1, chain: '', protocol: '', pair: '', weight: 50 }])
  const [depositMethod, setDepositMethod] = useState('zap')

  const addPool = () => {
    if (pools.length < 10) {
      setPools([...pools, { id: pools.length + 1, chain: '', protocol: '', pair: '', weight: 50 }])
    }
  }

  const removePool = (id: number) => {
    if (pools.length > 1) {
      setPools(pools.filter(pool => pool.id !== id))
    }
  }

  const updatePool = (id: number, field: string, value: string | number) => {
    setPools(pools.map(pool => pool.id === id ? { ...pool, [field]: value } : pool))
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Button variant="ghost" className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Strategies
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Create Strategy</h1>

      <Card>
        <CardHeader>
          <CardTitle>Strategy Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="strategy-name">Strategy Name</Label>
            <Input id="strategy-name" placeholder="Enter strategy name" />
          </div>
          <div>
            <Label htmlFor="strategy-description">Description</Label>
            <Input id="strategy-description" placeholder="Enter strategy description" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pool Selection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {pools.map((pool, index) => (
            <Card key={pool.id}>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label>Chain</Label>
                    <Select onValueChange={(value) => updatePool(pool.id, 'chain', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select chain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stellar">Stellar</SelectItem>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Protocol</Label>
                    <Select onValueChange={(value) => updatePool(pool.id, 'protocol', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select protocol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aquarius">Aquarius</SelectItem>
                        <SelectItem value="soroswap">Soroswap</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Pair</Label>
                    <Select onValueChange={(value) => updatePool(pool.id, 'pair', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pair" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xlm-usdc">XLM/USDC</SelectItem>
                        <SelectItem value="eth-usdc">ETH/USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Weight (%)</Label>
                    <Slider
                      value={[pool.weight]}
                      onValueChange={(value) => updatePool(pool.id, 'weight', value[0])}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
                {pools.length > 1 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    className="mt-4"
                    onClick={() => removePool(pool.id)}
                  >
                    Remove Pool
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          {pools.length < 10 && (
            <Button onClick={addPool}>Add Pool</Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-rebalance">Automatic Rebalancing</Label>
              <p className="text-sm text-muted-foreground">Automatically rebalance your strategy (Pro feature)</p>
            </div>
            <Switch id="auto-rebalance" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-compound">Auto-compound Rewards</Label>
              <p className="text-sm text-muted-foreground">Automatically reinvest earned rewards</p>
            </div>
            <Switch id="auto-compound" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deposit Method</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={depositMethod} onValueChange={setDepositMethod}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="zap">
                <Zap className="mr-2 h-4 w-4" />
                Zap In
              </TabsTrigger>
              <TabsTrigger value="manual">
                Manual
              </TabsTrigger>
            </TabsList>
            <TabsContent value="zap">
              <p className="text-sm text-muted-foreground mb-4">
                Zap in with a single token. We'll automatically convert and distribute your funds according to the strategy.
              </p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="zap-token">Select Token</Label>
                  <Select>
                    <SelectTrigger id="zap-token">
                      <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xlm">XLM</SelectItem>
                      <SelectItem value="usdc">USDC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="zap-amount">Amount</Label>
                  <Input id="zap-amount" type="number" placeholder="Enter amount" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="manual">
              <p className="text-sm text-muted-foreground mb-4">
                Manually add liquidity for each pool in the strategy.
              </p>
              {pools.map((pool) => (
                <div key={pool.id} className="mb-4">
                  <h4 className="font-medium mb-2">{pool.pair}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Token 1 Amount</Label>
                      <Input type="number" placeholder="Enter amount" />
                    </div>
                    <div>
                      <Label>Token 2 Amount</Label>
                      <Input type="number" placeholder="Enter amount" />
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>
          Create Strategy
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

