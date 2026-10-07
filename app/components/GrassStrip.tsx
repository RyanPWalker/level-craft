import { grassBlock } from "./sprites";

/** A full-width row of repeating grass blocks. `id` must be unique per page. */
export default function GrassStrip({ id, className }: { id: string; className?: string }) {
  const { art, palette } = grassBlock;
  const size = art.length;

  return (
    <svg className={className} width="100%" height={size * 2} shapeRendering="crispEdges" aria-hidden="true">
      <defs>
        <pattern id={id} width={size * 2} height={size * 2} patternUnits="userSpaceOnUse">
          <g transform="scale(2)">
            {art.flatMap((row, y) =>
              [...row].map((ch, x) => <rect key={`${x},${y}`} x={x} y={y} width={1} height={1} fill={palette[ch]} />),
            )}
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
