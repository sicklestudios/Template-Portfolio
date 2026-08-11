"use client";

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h;
}

const PALETTES = [
  ["#9b5cff", "#4fe0ff", "#ff5ca0"],
  ["#ff8a5c", "#ffd15c", "#ff5c8a"],
  ["#5cff9b", "#4fe0ff", "#5c7bff"],
  ["#ff5c5c", "#ff5cd1", "#9b5cff"],
];

export function Avatar({
  seed,
  size = 128,
  className = "",
}: {
  seed: string;
  size?: number;
  className?: string;
}) {
  const rand = mulberry32(hashSeed(seed));
  const palette = PALETTES[Math.floor(rand() * PALETTES.length)];
  const rotate = Math.floor(rand() * 360);
  const shapeCount = 4 + Math.floor(rand() * 3);

  const shapes = Array.from({ length: shapeCount }).map((_, i) => {
    const cx = 20 + rand() * 60;
    const cy = 20 + rand() * 60;
    const r = 8 + rand() * 22;
    const kind = rand();
    const color = palette[Math.floor(rand() * palette.length)];
    const opacity = 0.55 + rand() * 0.35;
    return { cx, cy, r, kind, color, opacity, key: i };
  });

  const gradId = `grad-${seed}`;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Generated avatar"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="100%" stopColor={palette[2]} />
        </linearGradient>
        <clipPath id={`clip-${seed}`}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${seed})`}>
        <rect width="100" height="100" fill={`url(#${gradId})`} opacity="0.18" />
        <rect width="100" height="100" fill="#0b0b14" />
        <g transform={`rotate(${rotate} 50 50)`}>
          {shapes.map((s) =>
            s.kind > 0.6 ? (
              <rect
                key={s.key}
                x={s.cx - s.r / 2}
                y={s.cy - s.r / 2}
                width={s.r}
                height={s.r}
                rx={s.r * 0.2}
                fill={s.color}
                opacity={s.opacity}
              />
            ) : s.kind > 0.3 ? (
              <circle
                key={s.key}
                cx={s.cx}
                cy={s.cy}
                r={s.r / 2}
                fill={s.color}
                opacity={s.opacity}
              />
            ) : (
              <polygon
                key={s.key}
                points={`${s.cx},${s.cy - s.r / 2} ${s.cx + s.r / 2},${s.cy + s.r / 2} ${
                  s.cx - s.r / 2
                },${s.cy + s.r / 2}`}
                fill={s.color}
                opacity={s.opacity}
              />
            )
          )}
        </g>
        <circle cx="50" cy="50" r="49" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
      </g>
    </svg>
  );
}
