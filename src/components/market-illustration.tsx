import { ArrowUpRight, BarChart3, CandlestickChart, CircleDollarSign, GraduationCap } from "@/components/icons";

const candleBars = [
  { left: 8, top: 62, height: 40, up: true },
  { left: 16, top: 48, height: 54, up: true },
  { left: 24, top: 55, height: 38, up: false },
  { left: 32, top: 37, height: 58, up: true },
  { left: 40, top: 43, height: 41, up: true },
  { left: 48, top: 29, height: 55, up: true },
  { left: 56, top: 34, height: 39, up: false },
  { left: 64, top: 19, height: 51, up: true },
  { left: 72, top: 25, height: 38, up: true },
  { left: 80, top: 9, height: 53, up: true },
  { left: 88, top: 16, height: 34, up: false },
];

export function MarketIllustration() {
  return (
    <div className="market-visual" role="img" aria-label="Illustration of an Indian market learning dashboard">
      <div className="market-visual__glow" />
      <div className="market-visual__orbit market-visual__orbit--one" />
      <div className="market-visual__orbit market-visual__orbit--two" />
      <div className="market-visual__topline">
        <span className="market-visual__live"><i /> Market learning lab</span>
        <span className="market-visual__period">NSE · BSE</span>
      </div>
      <div className="market-visual__main-card">
        <div className="chart-card__head">
          <div>
            <span className="eyebrow eyebrow--muted">MARKET PULSE</span>
            <strong>NIFTY 50</strong>
          </div>
          <span className="chart-card__change">+0.59% <ArrowUpRight size={15} /></span>
        </div>
        <div className="chart-card__price">24,415<span>.25</span></div>
        <div className="chart-card__chart">
          <div className="chart-card__grid" />
          <svg className="chart-card__line" viewBox="0 0 500 150" preserveAspectRatio="none" role="presentation">
            <defs>
              <linearGradient id="lineFade" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#31c7ff" stopOpacity=".34" />
                <stop offset="1" stopColor="#31c7ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 128 C32 124 40 105 70 112 S110 90 138 101 S178 91 207 80 S240 92 267 68 S310 65 335 74 S365 38 394 47 S430 28 457 34 S480 17 500 20 V150 H0Z" fill="url(#lineFade)" />
            <path d="M0 128 C32 124 40 105 70 112 S110 90 138 101 S178 91 207 80 S240 92 267 68 S310 65 335 74 S365 38 394 47 S430 28 457 34 S480 17 500 20" fill="none" stroke="#38c9ff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            <circle cx="500" cy="20" r="5" fill="#77e0ff" />
          </svg>
          <div className="chart-card__axis"><span>09:15</span><span>11:00</span><span>13:00</span><span>15:30</span></div>
        </div>
        <div className="chart-card__footer"><span>Reading the market, step by step</span><span><CandlestickChart size={15} /> Live practice</span></div>
      </div>
      <div className="floating-chip floating-chip--top"><span className="floating-chip__icon"><BarChart3 size={17} /></span><span><small>Learn with</small><b>Real market context</b></span></div>
      <div className="floating-chip floating-chip--bottom"><span className="floating-chip__icon floating-chip__icon--gold"><GraduationCap size={18} /></span><span><small>Build a process</small><b>Before you trade</b></span></div>
      <div className="market-visual__vertical-label"><CircleDollarSign size={16} /> EDUCATION FIRST</div>
      <div className="market-visual__candles" aria-hidden="true">
        {candleBars.map((candle, index) => (
          <span key={index} className={candle.up ? "candle candle--up" : "candle candle--down"} style={{ left: `${candle.left}%`, top: `${candle.top}%`, height: `${candle.height}px` }} />
        ))}
      </div>
    </div>
  );
}
