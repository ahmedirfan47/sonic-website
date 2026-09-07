/**
 * Abstract "operational signal" graphic -- nodes connected by lines, with a
 * subtle animated pulse along the paths. Pure SVG + CSS, no image assets,
 * no chart/animation library. Represents data flowing through a system
 * without resorting to generic robot/AI stock imagery.
 */
export function SignalGraphic({ className }: { className?: string }) {
  const nodes = [
    { x: 40, y: 60 },
    { x: 140, y: 30 },
    { x: 140, y: 110 },
    { x: 240, y: 60 },
    { x: 240, y: 150 },
    { x: 330, y: 100 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
  ];

  return (
    <svg
      viewBox="0 0 370 190"
      fill="none"
      className={className}
      aria-hidden
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--color-border-strong)"
          strokeWidth="1"
        />
      ))}
      {edges.map(([a, b], i) => (
        <line
          key={`pulse-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="4 220"
          className="signal-pulse"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === nodes.length - 1 ? 5 : 3.5}
          fill={i === nodes.length - 1 ? "var(--color-accent)" : "var(--color-text-dim)"}
        />
      ))}
    </svg>
  );
}