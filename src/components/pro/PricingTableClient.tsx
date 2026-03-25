"use client";

import { PricingTable } from "@clerk/nextjs";
import React from "react";
import { AlertCircleIcon } from "lucide-react";

class PricingTableErrorBoundary extends React.Component<
  React.PropsWithChildren,
  { hasError: boolean }
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Pricing table failed to render", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-2xl rounded-2xl border border-amber-300/60 bg-amber-50/70 p-6 text-center dark:bg-amber-950/20">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
            <AlertCircleIcon className="h-4 w-4" />
            Billing temporarily unavailable
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            We could not load subscription plans right now. Please try again in a moment.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

function PricingTableClient() {
  return (
    <PricingTableErrorBoundary>
      <PricingTable />
    </PricingTableErrorBoundary>
  );
}

export default PricingTableClient;
