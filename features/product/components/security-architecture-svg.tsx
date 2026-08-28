import { useId } from "react";

export function SecurityArchitectureSVG() {
  const rawId = useId();
  const uid = rawId.replace(/:/g, ""); // Clean ID string for SVG/CSS safety

  const arrowId = `sa-arrow-${uid}`;
  const arrowInactiveId = `sa-arrow-inactive-${uid}`;
  const titleId = `sa-title-${uid}`;
  const descId = `sa-desc-${uid}`;

  return (
    <svg
      viewBox="0 0 680 500"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className="block h-auto w-full drop-shadow-2xl"
    >
      <title id={titleId}>Kovert personal security architecture</title>
      <desc id={descId}>
        Diagram showing four connected devices: a Drone Unit sending video and
        telemetry to AR Smart Glasses and the Kovert Smart Sensor glove; the
        Kovert Smart Sensor sending control and recording data to Connected
        Systems (floor robot camera and 360° body camera); and Connected Systems
        sending alerts and live data back to the AR Smart Glasses.
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
          @keyframes sa-desktop-dash { to { stroke-dashoffset: -24; } }
          .sa-desktop-line { stroke-dasharray: 4 8; animation: sa-desktop-dash 1.8s linear infinite; }
          @media (prefers-reduced-motion: reduce) { .sa-desktop-line { animation: none; } }
          .sa-desktop-label { font-family: var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; font-weight: 600; fill: #71717A; }
          .sa-desktop-node-title { font-family: var(--font-heading), system-ui, sans-serif; font-size: 17px; font-weight: 800; letter-spacing: 1.1px; fill: #ffffff; }
          .sa-desktop-node-title-wide { font-size: 15px; letter-spacing: 0.7px; }
          .sa-desktop-node-title-dark { font-family: var(--font-heading), system-ui, sans-serif; font-size: 14px; font-weight: 800; letter-spacing: 0.65px; fill: #050505; }
          .sa-desktop-node-subtitle-dark { font-family: var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; font-weight: 600; letter-spacing: 1px; fill: rgba(5, 5, 5, 0.65); }
        `}</style>
      </defs>

      <rect x={0} y={0} width={680} height={500} fill="#050505" rx={8} />

      {/* DRONE UNIT */}
      <rect
        x={40}
        y={40}
        width={200}
        height={100}
        rx={6}
        fill="#0A0A0A"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth={1}
      />
      <g transform="translate(120 55) scale(0.9)">
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
        x1={60}
        y1={100}
        x2={220}
        y2={100}
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={1}
      />
      <text
        x={140}
        y={115}
        textAnchor="middle"
        className="sa-desktop-node-title"
      >
        DRONE UNIT
      </text>

      {/* AR SMART GLASSES */}
      <rect
        x={440}
        y={40}
        width={200}
        height={100}
        rx={6}
        fill="#0A0A0A"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth={1}
      />
      <g transform="translate(520 55) scale(0.9)">
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
        x1={460}
        y1={100}
        x2={620}
        y2={100}
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={1}
      />
      <text
        x={540}
        y={115}
        textAnchor="middle"
        className="sa-desktop-node-title sa-desktop-node-title-wide"
      >
        AR SMART GLASSES
      </text>

      {/* KOVERT SMART SENSOR */}
      <rect x={40} y={360} width={200} height={100} rx={6} fill="#B6A36A" />
      <g transform="translate(120 368) scale(0.85)">
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
        x={140}
        y={424}
        textAnchor="middle"
        className="sa-desktop-node-title-dark"
      >
        KOVERT SMART SENSOR
      </text>
      <text
        x={140}
        y={442}
        textAnchor="middle"
        className="sa-desktop-node-subtitle-dark"
      >
        DORSAL COMMAND UNIT
      </text>

      {/* CONNECTED SYSTEMS */}
      <rect
        x={440}
        y={360}
        width={200}
        height={100}
        rx={6}
        fill="#0A0A0A"
        stroke="rgba(255, 255, 255, 0.14)"
        strokeWidth={1}
      />
      <g transform="translate(505 380) scale(0.85)">
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
      <g transform="translate(555 378) scale(0.85)">
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
        x1={460}
        y1={420}
        x2={620}
        y2={420}
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={1}
      />
      <text
        x={540}
        y={435}
        textAnchor="middle"
        className="sa-desktop-node-title sa-desktop-node-title-wide"
      >
        CONNECTED SYSTEMS
      </text>

      {/* ARROWS AND DATA FLOWS */}
      <path
        d="M240 70 H440"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-desktop-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={340} y={60} textAnchor="middle" className="sa-desktop-label">
        VIDEO &amp; TELEMETRY
      </text>

      <path
        d="M90 140 V360"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-desktop-line"
        markerEnd={`url(#${arrowId})`}
      />
      <path
        d="M140 140 V360"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-desktop-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text
        x={75}
        y={250}
        textAnchor="middle"
        className="sa-desktop-label"
        transform="rotate(-90 75 250)"
      >
        VIDEO
      </text>
      <text
        x={158}
        y={250}
        textAnchor="middle"
        className="sa-desktop-label"
        transform="rotate(-90 158 250)"
      >
        TELEMETRY
      </text>

      <path
        d="M210 140 L450 360"
        stroke="rgba(182, 163, 106, 0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        markerEnd={`url(#${arrowInactiveId})`}
      />
      <text
        x={315}
        y={240}
        textAnchor="middle"
        className="sa-desktop-label"
        transform="rotate(42 315 240)"
      >
        SYNC RECORDING
      </text>

      <path
        d="M240 410 H440"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-desktop-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text x={340} y={400} textAnchor="middle" className="sa-desktop-label">
        CONTROL &amp; RECORDING
      </text>

      <path
        d="M510 360 V140"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-desktop-line"
        markerEnd={`url(#${arrowId})`}
      />
      <path
        d="M570 140 V360"
        stroke="#B6A36A"
        strokeWidth="1.5"
        className="sa-desktop-line"
        markerEnd={`url(#${arrowId})`}
      />
      <text
        x={495}
        y={250}
        textAnchor="middle"
        className="sa-desktop-label"
        transform="rotate(-90 495 250)"
      >
        ALERTS
      </text>
      <text
        x={588}
        y={250}
        textAnchor="middle"
        className="sa-desktop-label"
        transform="rotate(-90 588 250)"
      >
        LIVE DATA
      </text>

      {/* CORNER ACCENTS */}
      <path
        d="M8 8 L8 32 M8 8 L32 8"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
      <path
        d="M672 8 L672 32 M672 8 L648 8"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
      <path
        d="M8 492 L8 468 M8 492 L32 492"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
      <path
        d="M672 492 L672 468 M672 492 L648 492"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth={1.2}
      />
    </svg>
  );
}
