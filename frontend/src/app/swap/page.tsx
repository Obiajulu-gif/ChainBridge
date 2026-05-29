"use client";

import { useState } from "react";
import { Button, Card, ChainAssetSelector, type Chain } from "@/components/ui";
import { ArrowRightLeft } from "lucide-react";

const CHAINS: Chain[] = [
  {
    id: "stellar",
    name: "Stellar",
    assets: [
      { symbol: "XLM", name: "Lumens", chain: "stellar" },
      { symbol: "USDC", name: "USD Coin", chain: "stellar" },
    ],
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    assets: [{ symbol: "BTC", name: "Bitcoin", chain: "bitcoin" }],
  },
  {
    id: "ethereum",
    name: "Ethereum",
    assets: [
      { symbol: "ETH", name: "Ether", chain: "ethereum" },
      { symbol: "USDC", name: "USD Coin", chain: "ethereum" },
    ],
  },
];

export default function SwapPage() {
  const [from, setFrom] = useState({ chain: "stellar", asset: "XLM" });
  const [to, setTo] = useState({ chain: "bitcoin", asset: "BTC" });

  return (
    <main className="container mx-auto max-w-2xl px-4 py-16">
      <Card variant="raised" className="overflow-visible p-6 shadow-glow-sm">
        <div className="mb-6 flex items-center gap-3">
          <ArrowRightLeft className="h-5 w-5 text-brand-500" />
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Create Swap</h1>
            <p className="text-sm text-text-secondary">
              Choose source and destination assets using the shared selector.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <ChainAssetSelector
            chains={CHAINS}
            selectedChain={from.chain}
            selectedAsset={from.asset}
            onSelect={(chain, asset) => setFrom({ chain, asset })}
            label="From"
            placeholder="Select source chain and asset"
            showBalance={false}
          />

          <div className="flex justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-overlay">
              <ArrowRightLeft className="h-4 w-4 text-brand-500" />
            </div>
          </div>

          <ChainAssetSelector
            chains={CHAINS}
            selectedChain={to.chain}
            selectedAsset={to.asset}
            onSelect={(chain, asset) => setTo({ chain, asset })}
            label="To"
            placeholder="Select destination chain and asset"
            showBalance={false}
          />

          <Button className="w-full rounded-xl" size="lg">
            Continue with {from.asset} to {to.asset}
          </Button>
        </div>
      </Card>
    </main>
  );
}
