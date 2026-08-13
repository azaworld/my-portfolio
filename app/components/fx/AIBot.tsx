// Animated AI robot mascot — blinking eyes, pulsing antenna, scanning visor.
// Pure SVG + CSS keyframes (see globals.css: eye-blink, bot-bob, antenna-glow, visor-scan).
export default function AIBot({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={`animate-bot-bob ${className}`}
      aria-hidden
    >
      {/* antenna */}
      <line x1="60" y1="14" x2="60" y2="26" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="10" r="4.5" fill="#22D3EE" className="animate-antenna-glow" />

      {/* head */}
      <rect x="22" y="26" width="76" height="62" rx="18" fill="url(#bot-head)" stroke="#7C3AED" strokeWidth="2.5" />

      {/* visor */}
      <rect x="32" y="40" width="56" height="26" rx="13" fill="#0B1026" stroke="#22D3EE" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* scanning beam inside visor */}
      <g clipPath="url(#visor-clip)">
        <rect x="46" y="40" width="8" height="26" fill="#22D3EE" opacity="0.25" className="animate-visor-scan" />
      </g>

      {/* eyes — blink via scaleY */}
      <ellipse cx="46" cy="53" rx="5.5" ry="7" fill="#22D3EE" className="animate-eye-blink" />
      <ellipse cx="74" cy="53" rx="5.5" ry="7" fill="#22D3EE" className="animate-eye-blink" style={{ animationDelay: "0.08s" }} />
      {/* eye glints */}
      <circle cx="48" cy="50" r="1.6" fill="#fff" opacity="0.9" />
      <circle cx="76" cy="50" r="1.6" fill="#fff" opacity="0.9" />

      {/* smile */}
      <path d="M48 74 Q60 82 72 74" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* ears */}
      <rect x="12" y="48" width="10" height="18" rx="5" fill="#7C3AED" opacity="0.85" />
      <rect x="98" y="48" width="10" height="18" rx="5" fill="#7C3AED" opacity="0.85" />

      {/* neck + body hint */}
      <rect x="48" y="88" width="24" height="8" rx="4" fill="#7C3AED" opacity="0.6" />
      <rect x="36" y="96" width="48" height="16" rx="8" fill="url(#bot-body)" stroke="#22D3EE" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="60" cy="104" r="3.5" fill="#F472B6" className="animate-antenna-glow" style={{ animationDelay: "0.6s" }} />

      <defs>
        <linearGradient id="bot-head" x1="22" y1="26" x2="98" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E1B4B" />
          <stop offset="1" stopColor="#312E81" />
        </linearGradient>
        <linearGradient id="bot-body" x1="36" y1="96" x2="84" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E1B4B" />
          <stop offset="1" stopColor="#0B1026" />
        </linearGradient>
        <clipPath id="visor-clip">
          <rect x="32" y="40" width="56" height="26" rx="13" />
        </clipPath>
      </defs>
    </svg>
  );
}
