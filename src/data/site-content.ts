export const courses = [
  {
    number: "01",
    title: "Fundamental & Technical Insights",
    subtitle: "Build a stronger investing foundation",
    duration: "45 days",
    price: "₹9,999",
    theme: "blue",
    modules: [
      "Introduction to the stock market",
      "Trading mechanism & terminology",
      "Market factors and indices",
      "Fundamental analysis basics",
    ],
  },
  {
    number: "02",
    title: "A Complete Guide to Stock Market",
    subtitle: "From your first chart to a clear process",
    duration: "60 days",
    price: "₹14,999",
    theme: "cyan",
    modules: [
      "How markets work",
      "Factors that move stock prices",
      "Fundamental analysis & valuation",
      "Chart reading essentials",
    ],
  },
  {
    number: "03",
    title: "Advanced Equity, Commodity & Forex",
    subtitle: "Expand your market knowledge",
    duration: "70 days",
    price: "₹19,999",
    theme: "gold",
    modules: [
      "Equity and commodity foundations",
      "Derivatives and risk concepts",
      "Options terminology",
      "Portfolio construction principles",
    ],
  },
] as const;

export type Course = (typeof courses)[number];

export const marketIndices = [
  { name: "NIFTY 50", value: "24,415.25", change: "+0.59%" },
  { name: "SENSEX", value: "80,220.12", change: "+0.63%" },
  { name: "BANK NIFTY", value: "52,376.40", change: "+0.62%" },
] as const;

export const navigationLinks = [
  ["Home", "#home"],
  ["About us", "#about"],
  ["Courses", "#courses"],
  ["Our approach", "#approach"],
  ["Stories", "#stories"],
  ["Contact", "#enquire"],
] as const;

export const contactDetails = {
  primaryPhone: "+91 91555 18117",
  primaryPhoneHref: "tel:+919155518117",
  secondaryPhone: "+91 91555 28117",
  secondaryPhoneHref: "tel:+919155528117",
  email: "marketmantrawealthorbit@gmail.com",
  emailHref: "mailto:marketmantrawealthorbit@gmail.com",
  location: "Ranchi, Jharkhand, India",
} as const;
