export default function RiskDataLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-9xl font-bold">Risk Level Index</div>
      <div>
        <p className="text-light-subtitle dark:text-dark-subtitle text-4xl">
          The Risk Level Index compares lending markets’ economic risk levels (<em>r</em>) over time as they are being
          calculated by the{' '}
          <a
            href="https://medium.com/risk-dao/a-smart-contract-formula-for-ltv-ratio-a60a8373d54d"
            target="_blank"
            rel="noreferrer"
          >
            SmartLTV formula.
          </a>{' '}
          Higher index values reflect a higher risk exposure which results from changes in market conditions without
          adjustments of LTV ratios of the market.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/risk-dao/announcing-the-risk-level-index-ca5dcef95303"
        >
          <div>
            <button>Read More</button>
          </div>
        </a>
      </div>
      {children}
    </section>
  );
}
