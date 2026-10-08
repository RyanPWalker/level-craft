import { ImageResponse } from "next/og";
import { grassBlock } from "../components/sprites";
import { site } from "../site";

// Social share image (Facebook, iMessage, LinkedIn, X), written to out/og.png at build time.
// A route handler rather than the `opengraph-image` convention, which exports a file with no
// extension that GitHub Pages wouldn't serve as image/png. Referenced from `pageMetadata`.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

const PIXEL = 12;

/** The grass-block sprite as absolutely positioned divs (Satori has no SVG rect support for this). */
function GrassBlock() {
  const { art, palette } = grassBlock;
  return (
    <div style={{ display: "flex", position: "relative", width: art[0].length * PIXEL, height: art.length * PIXEL }}>
      {art.flatMap((row, y) =>
        [...row].map((ch, x) =>
          palette[ch] ? (
            <div
              key={`${x},${y}`}
              style={{ position: "absolute", left: x * PIXEL, top: y * PIXEL, width: PIXEL, height: PIXEL, background: palette[ch] }}
            />
          ) : null,
        ),
      )}
    </div>
  );
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a212b",
          color: "#ffffff",
          padding: 72,
          borderBottom: "24px solid #3f7a26",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <GrassBlock />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72 }}>{site.name}</div>
            <div style={{ fontSize: 36, color: "#8fd05f" }}>
              {`General Contractor · ${site.city}, ${site.state}`}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 36 }}>
          <div>Remodels · Additions · Commercial Tenant Improvements</div>
          <div style={{ color: "#f0b43c" }}>
            {`Licensed & insured · Serving all of ${site.serviceArea}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
