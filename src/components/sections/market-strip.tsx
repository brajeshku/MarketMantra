import { BarChart3, ChartCandlestick } from "@/components/icons";
import { marketIndices } from "@/data/site-content";

export function MarketStrip() {
  return (
    <section
      className="market-strip"
      aria-label="Illustrative sample market index values"
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
              {index.change}
            </span>
          </div>
        ))}
        <div className="market-strip__note">
          <BarChart3 size={27} />
          <span>
            <b>Market Updates</b>
            <small>Illustrative sample values · not live data</small>
          </span>
        </div>
      </div>
    </section>
  );
}
