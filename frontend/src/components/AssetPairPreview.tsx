"use client";

import { useState } from "react";
import { ChainAssetSelector, type Chain } from "@/components/ui";

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

export function AssetPairPreview() {
  const [from, setFrom] = useState({ chain: "stellar", asset: "XLM" });
  const [to, setTo] = useState({ chain: "bitcoin", asset: "BTC" });

  return (
    <div className="space-y-3">
      <ChainAssetSelector
        chains={CHAINS}
        selectedChain={from.chain}
        selectedAsset={from.asset}
        onSelect={(chain, asset) => setFrom({ chain, asset })}
        label="From"
        showBalance={false}
      />
      <ChainAssetSelector
        chains={CHAINS}
        selectedChain={to.chain}
        selectedAsset={to.asset}
        onSelect={(chain, asset) => setTo({ chain, asset })}
        label="To"
        showBalance={false}
      />
    </div>
  );
}
