export type Sprite = {
  /** One string per row; each character is a pixel. Characters missing from the palette are transparent. */
  art: string[];
  palette: Record<string, string>;
};

type PixelArtProps = {
  sprite: Sprite;
  className?: string;
  /** Rendered size in CSS pixels per art pixel. Override with CSS for responsive sizing. */
  scale?: number;
};

/** Renders a pixel-art sprite as a crisp SVG, merging horizontal runs of the same color. */
export default function PixelArt({ sprite, className, scale = 4 }: PixelArtProps) {
  const { art, palette } = sprite;
  const height = art.length;
  const width = Math.max(...art.map((row) => row.length));
  const rects: React.ReactElement[] = [];

  art.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === ch) end++;
      const fill = palette[ch];
      if (fill) {
        rects.push(<rect key={`${x},${y}`} x={x} y={y} width={end - x} height={1} fill={fill} />);
      }
      x = end;
    }
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {rects}
    </svg>
  );
}
