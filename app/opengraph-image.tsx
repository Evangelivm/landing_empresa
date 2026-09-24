import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0e13",
          padding: "80px 96px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: 999,
            border: "1px solid rgba(245,241,232,0.14)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#afccff",
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#7c3fe0",
              display: "flex",
            }}
          />
          Dvy-Fact
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            maxWidth: 880,
            fontSize: 64,
            lineHeight: 1.15,
            color: "#f4f0e6",
            fontFamily: "sans-serif",
            fontWeight: 700,
          }}
        >
          El software que por fin entiende cómo opera tu empresa.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "#a7a196",
            fontFamily: "sans-serif",
          }}
        >
          Desarrollo de software y ERP a medida
        </div>
      </div>
    ),
    { ...size }
  );
}
