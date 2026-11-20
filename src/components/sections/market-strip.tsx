import { ArrowUpRight, ChartCandlestick } from "@/components/icons";
import { marketIndices } from "@/data/site-content";

export function MarketStrip() {
  return (
    <section
      className="market-strip"
      aria-label="Illustrative market index values"
    >
      <div className="market-strip__inner page-shell">
        {marketIndices.map((index) => (
          <div className="index-item" key={index.name}>
            <span className="index-icon">
              <ChartCandlestick size={20} />
            </span>
            <span className="index-data">
              <small>{index.name}</small>
              <strong>{index.value}</strong>
            </span>
            <span className="index-change">
              <ArrowUpRight size={14} />
              {index.change}
            </span>
          </div>
        ))}
        <div className="market-strip__note">
          <span className="pulse-dot" />
          <span>
            <b>Learn with context</b>
            <small>Illustrative sample values · not live data</small>
          </span>
        </div>
      </div>
    </section>
  );
}
