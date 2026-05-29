"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ChainAssetSelector, type Chain } from "@/components/ui/ChainAssetSelector";

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
  const [fromChain, setFromChain] = useState("stellar");
  const [fromAsset, setFromAsset] = useState("XLM");
  const [toChain, setToChain] = useState("bitcoin");
  const [toAsset, setToAsset] = useState("BTC");

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Card variant="raised" className="p-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
            <ArrowRightLeft className="h-5 w-5 text-brand-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Create Swap</h1>
            <p className="text-sm text-text-secondary">
              Select the source and destination chain assets for an atomic swap.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <ChainAssetSelector
            label="From"
            chains={CHAINS}
            selectedChain={fromChain}
            selectedAsset={fromAsset}
            onSelect={(chain, asset) => {
              setFromChain(chain);
              setFromAsset(asset);
            }}
            placeholder="Select source chain and asset"
          />

          <div className="flex justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-overlay">
              <ArrowRightLeft className="h-4 w-4 text-brand-500" />
            </div>
          </div>

          <ChainAssetSelector
            label="To"
            chains={CHAINS}
            selectedChain={toChain}
            selectedAsset={toAsset}
            onSelect={(chain, asset) => {
              setToChain(chain);
              setToAsset(asset);
            }}
            placeholder="Select destination chain and asset"
          />

          <div className="rounded-xl border border-border bg-surface-overlay/40 p-4 text-sm text-text-secondary">
            <span className="font-medium text-text-primary">Selected route:</span>{" "}
            {fromAsset} on {fromChain} → {toAsset} on {toChain}
          </div>

          <Button className="w-full rounded-xl" size="lg">
            Continue
          </Button>
        </div>
      </Card>
    </main>
  );
}
