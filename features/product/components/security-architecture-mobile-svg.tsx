import { useId } from "react";

export function SecurityArchitectureMobileSVG() {
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");

  const arrowId = `sa-arrow-${uid}`;
  const arrowInactiveId = `sa-arrow-inactive-${uid}`;
  const titleId = `sa-title-${uid}`;
  const descId = `sa-desc-${uid}`;

  return (
    <svg
      viewBox="0 0 360 780"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className="block h-auto w-full drop-shadow-2xl"
    >
      <title id={titleId}>Kovert personal security architecture</title>
      <desc id={descId}>
        Vertical mobile diagram showing four connected devices: Drone Unit, AR
        Smart Glasses, Kovert Smart Sensor glove, and Connected Systems.
      </desc>

      <defs>
        <marker
          id={arrowId}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="#B6A36A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
        <marker
          id={arrowInactiveId}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="rgba(182, 163, 106, 0.35)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
        <style>{`
          @keyframes sa-mobile-dash { to { stroke-dashoffset: -24; } }
          .sa-mobile-line { stroke-dasharray: 4 8; animation: sa-mobile-dash 1.8s linear infinite; }
          @media (prefers-reduced-motion: reduce) { .sa-mobile-line { animation: none; } }
          .sa-mobile-label { font-family: var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; font-weight: 600; fill: #A1A1AA; }
          .sa-mobile-node-title { font-family: var(--font-heading), system-ui, sans-serif; font-size: 14px; font-weight: 800; letter-spacing: 1px; fill: #ffffff; }
          .sa-mobile-node-title-dark { font-family: var(--font-heading), system-ui, sans-serif; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; fill: #050505; }
          .sa-mobile-node-subtitle-dark { font-family: var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9px; font-weight: 600; letter-spacing: 0.8px; fill: rgba(5, 5, 5, 0.7); }
        `}</style>
      </defs>

      <rect x={0} y={0} width={360} height={780} fill="#050505" rx={8} />

      {/* ============================================================ */}
      {/* 1. DRONE UNIT (TOP)                                          */}
      {/* ============================================================ */}
      <rect
        x={60}
        y={30}
        width={240}
        height={85}
        rx={6}
        fill="#0A0A0A"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth={1}
      />
      <g transform="translate(160 40) scale(0.9)">
        <circle
          cx={10}
          cy={10}
          r={3}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <circle
          cx={34}
          cy={10}
          r={3}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <circle
          cx={10}
          cy={34}
          r={3}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <circle
          cx={34}
          cy={34}
          r={3}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <rect
          x={18}
          y={18}
          width={8}
          height={8}
          rx={2}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
      </g>
      <line
        x1={80}
        y1={85}
        x2={280}
        y2={85}
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={1}
      />
      <text
        x={180}
        y={100}
        textAnchor="middle"
        className="sa-mobile-node-title"
      >
        DRONE UNIT
      </text>

      {/* Connectors: Drone -> AR Glasses */}
      <path
        d="M120 115 V190"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={105} y={155} textAnchor="end" className="sa-mobile-label">
        VIDEO
      </text>

      <path
        d="M240 115 V190"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={255} y={155} textAnchor="start" className="sa-mobile-label">
        TELEMETRY
      </text>

      {/* ============================================================ */}
      {/* 2. AR SMART GLASSES                                          */}
      {/* ============================================================ */}
      <rect
        x={60}
        y={190}
        width={240}
        height={85}
        rx={6}
        fill="#0A0A0A"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth={1}
      />
      <g transform="translate(162 202) scale(0.9)">
        <rect
          x={0}
          y={6}
          width={16}
          height={9}
          rx={2}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <rect
          x={20}
          y={6}
          width={16}
          height={9}
          rx={2}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <line
          x1={16}
          y1={10.5}
          x2={20}
          y2={10.5}
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
      </g>
      <line
        x1={80}
        y1={245}
        x2={280}
        y2={245}
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={1}
      />
      <text
        x={180}
        y={260}
        textAnchor="middle"
        className="sa-mobile-node-title"
      >
        AR SMART GLASSES
      </text>

      {/* Bypass Connector: Drone -> Smart Sensor (Curved Outer Left) */}
      <path
        d="M60 72 H24 Q16 72 16 80 V415 Q16 422 24 422 H60"
        fill="none"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text
        x={22}
        y={250}
        textAnchor="middle"
        className="sa-mobile-label"
        transform="rotate(-90 22 250)"
      >
        TELEMETRY FEED
      </text>

      {/* Connectors: AR Glasses <-> Smart Sensor */}
      <path
        d="M140 275 V380"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={130} y={330} textAnchor="end" className="sa-mobile-label">
        ALERTS
      </text>

      <path
        d="M220 380 V275"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={230} y={330} textAnchor="start" className="sa-mobile-label">
        LIVE DATA
      </text>

      {/* ============================================================ */}
      {/* 3. KOVERT SMART SENSOR (CENTRAL HUB)                         */}
      {/* ============================================================ */}
      <rect x={60} y={380} width={240} height={95} rx={6} fill="#B6A36A" />
      <g transform="translate(160 388) scale(0.85)">
        <path
          d="M10 30 L10 14 C10 12.5 11 11.5 12.2 11.5 C13.4 11.5 14.2 12.5 14.2 14 L14.2 22 L16 22 L16 10.5 C16 9 17 8 18.2 8 C19.4 8 20.2 9 20.2 10.5 L20.2 22 L22 22 L22 12 C22 10.7 23 9.8 24.2 9.8 C25.4 9.8 26.2 10.7 26.2 12 L26.2 23 L28 23 L28 15 C28 13.8 28.8 13 30 13 C31.2 13 32 13.8 32 15 L32 26 C32 30 29 33 24 35 L17 37 C13 38 10 35 10 30Z"
          fill="none"
          stroke="#050505"
          strokeWidth={1.5}
        />
        <circle cx={21} cy={19} r={2.4} fill="#050505" />
        <circle
          cx={21}
          cy={19}
          r={4.4}
          fill="none"
          stroke="#050505"
          strokeWidth={1}
          opacity={0.5}
        />
      </g>
      <text
        x={180}
        y={445}
        textAnchor="middle"
        className="sa-mobile-node-title-dark"
      >
        KOVERT SMART SENSOR
      </text>
      <text
        x={180}
        y={462}
        textAnchor="middle"
        className="sa-mobile-node-subtitle-dark"
      >
        DORSAL COMMAND UNIT
      </text>

      {/* Connectors: Smart Sensor <-> Connected Systems */}
      <path
        d="M140 475 V580"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={130} y={530} textAnchor="end" className="sa-mobile-label">
        CONTROL
      </text>

      <path
        d="M220 475 V580"
        stroke="rgba(182, 163, 106, 0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        markerEnd={`url(#${arrowInactiveId})`}
      />
      <text x={230} y={530} textAnchor="start" className="sa-mobile-label">
        SYNC REC
      </text>

      {/* ============================================================ */}
      {/* 4. CONNECTED SYSTEMS (BOTTOM)                                */}
      {/* ============================================================ */}
      <rect
        x={60}
        y={580}
        width={240}
        height={90}
        rx={6}
        fill="#0A0A0A"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth={1}
      />
      <g transform="translate(145 590) scale(0.85)">
        <rect
          x={0}
          y={10}
          width={20}
          height={10}
          rx={2}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <circle
          cx={5}
          cy={22}
          r={2.5}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <circle
          cx={15}
          cy={22}
          r={2.5}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <circle
          cx={10}
          cy={7}
          r={2.2}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <line
          x1={10}
          y1={9.2}
          x2={10}
          y2={10}
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
      </g>
      <g transform="translate(195 588) scale(0.85)">
        <circle
          cx={10}
          cy={12}
          r={6}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1.2}
        />
        <ellipse
          cx={10}
          cy={12}
          rx={11}
          ry={4}
          fill="none"
          stroke="#B6A36A"
          strokeWidth={1}
          opacity={0.7}
        />
        <circle cx={10} cy={12} r={1.6} fill="#B6A36A" />
      </g>
      <line
        x1={80}
        y1={635}
        x2={280}
        y2={635}
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={1}
      />
      <text
        x={180}
        y={652}
        textAnchor="middle"
        className="sa-mobile-node-title"
      >
        CONNECTED SYSTEMS
      </text>

      {/* Bypass Connector: Connected Systems -> AR Glasses (Curved Outer Right) */}
      <path
        d="M300 625 H336 Q344 625 344 617 V240 Q344 232 336 232 H300"
        fill="none"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-mobile-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text
        x={338}
        y={430}
        textAnchor="middle"
        className="sa-mobile-label"
        transform="rotate(90 338 430)"
      >
        ALERTS &amp; FEEDS
      </text>

      {/* Corner Accents */}
      <path
        d="M6 6 L6 24 M6 6 L24 6"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
      <path
        d="M354 6 L354 24 M354 6 L336 6"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
      <path
        d="M6 774 L6 756 M6 774 L24 774"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
      <path
        d="M354 774 L354 756 M354 774 L336 774"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
    </svg>
  );
}
