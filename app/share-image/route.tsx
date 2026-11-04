import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const photo = await readFile(
    join(process.cwd(), "public/images/redesign/tekglove-hero-picture.jpeg"),
  );
  const icon = await readFile(join(process.cwd(), "public/tekglove_icon.png"));
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f7f6f2",
        color: "#202620",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={"data:image/jpeg;base64," + photo.toString("base64")}
        width={1200}
        height={670}
        style={{ position: "absolute", right: -145, top: 0 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #f7f6f2 0%, #f7f6f2 32%, rgba(247,246,242,0) 65%)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "48px 56px",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          {/* ImageResponse requires an embedded or absolute image source. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"data:image/png;base64," + icon.toString("base64")}
            alt="TekGlove"
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 62,
            fontSize: 74,
            letterSpacing: -4,
            lineHeight: 1.06,
            fontWeight: 700,
          }}
        >
          <span>The AI Smart</span>
          <span>Glove,</span>
          <span style={{ color: "#556052" }}>Reinvented.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            maxWidth: 410,
            fontSize: 21,
            lineHeight: 1.5,
          }}
        >
          Turning movement, grip and gesture into useful insight.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 18,
            borderTop: "1px solid #20262030",
            fontSize: 17,
          }}
        >
          <span>The hand is the starting point.</span>
          <span>tekglove.com</span>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
