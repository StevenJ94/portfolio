import { ejes, statsIntro } from "@/lib/data";

const CX = 150;
const CY = 150;
const RO = 120; // radio exterior
const ANGLES = [-90, -30, 30, 90, 150, 210].map((d) => (d * Math.PI) / 180);

const vtx = (r: number, i: number): [number, number] => [
  CX + r * Math.cos(ANGLES[i]),
  CY + r * Math.sin(ANGLES[i]),
];
const pts = (r: number) =>
  ANGLES.map((_, i) => vtx(r, i).map((n) => n.toFixed(1)).join(",")).join(" ");

// Posiciones fijas de las etiquetas alrededor del hexágono.
const LABELS: { x: number; y: number; anchor: "start" | "middle" | "end" }[] = [
  { x: 150, y: 10, anchor: "middle" },
  { x: 272, y: 80, anchor: "start" },
  { x: 272, y: 222, anchor: "start" },
  { x: 150, y: 294, anchor: "middle" },
  { x: 28, y: 222, anchor: "end" },
  { x: 28, y: 80, anchor: "end" },
];

export default function Stats() {
  const rings = [120, 90, 60, 30];
  const dataPoints = ejes
    .map((e, i) => vtx((RO * e.v) / 100, i).map((n) => n.toFixed(1)).join(","))
    .join(" ");

  return (
    <section id="stats" className="section s-stats" data-reveal>
      <div>
        <div
          className="kicker"
          style={{ color: "#9b84ff", textShadow: "0 0 16px rgba(124,92,255,.7)" }}
        >
          Estadísticas de combate
        </div>
        <h2 className="h2">Atributos</h2>
        <p className="stats-intro">{statsIntro}</p>
        <div className="ejes">
          {ejes.map((a) => (
            <div key={a.k} className="eje" data-reveal-item>
              <span className="eje-k">{a.k}</span>
              <span className="eje-v" data-count style={{ ["--c"]: a.color } as React.CSSProperties}>
                {a.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="radar-wrap">
        <div className="radar-tilt" data-tilt="14">
          <svg viewBox="-46 -24 392 348" style={{ width: "100%", height: "auto", overflow: "visible" }}>
            <defs>
              <linearGradient id="radarSweep" gradientUnits="userSpaceOnUse" x1="150" y1="150" x2="150" y2="26">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
                <stop offset="100%" stopColor="#7CF7FF" stopOpacity=".9" />
              </linearGradient>
              <radialGradient id="radarCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity=".35" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="150" cy="150" r="120" fill="url(#radarCore)" />

            {rings.map((r, i) => (
              <polygon
                key={r}
                points={pts(r)}
                fill={i === 0 ? "rgba(188,108,255,.05)" : "none"}
                stroke={i === 0 ? "rgba(188,108,255,.25)" : "rgba(188,108,255,.18)"}
                strokeWidth="1"
              />
            ))}

            <g stroke="rgba(188,108,255,.16)" strokeWidth="1">
              {ANGLES.map((_, i) => {
                const [x, y] = vtx(RO, i);
                return <line key={i} x1="150" y1="150" x2={x.toFixed(1)} y2={y.toFixed(1)} />;
              })}
            </g>

            <g className="radar-data">
              <polygon
                points={dataPoints}
                fill="rgba(255,92,168,.24)"
                stroke="#FF5CA8"
                strokeWidth="2"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,92,168,.8))" }}
              />
              <g className="radar-verts" fill="#7CF7FF">
                {ejes.map((e, i) => {
                  const [x, y] = vtx((RO * e.v) / 100, i);
                  return <circle key={e.k} cx={x.toFixed(1)} cy={y.toFixed(1)} r="3.6" />;
                })}
              </g>
            </g>

            <polygon points={pts(120)} fill="none" stroke="rgba(0,240,255,.22)" strokeWidth="1.5" />

            <g fontFamily="var(--mono)" fontSize="11" letterSpacing="1.6" fill="rgba(237,231,255,.68)">
              {ejes.map((e, i) => (
                <text key={e.k} x={LABELS[i].x} y={LABELS[i].y} textAnchor={LABELS[i].anchor}>
                  {e.k.toUpperCase()}
                </text>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
