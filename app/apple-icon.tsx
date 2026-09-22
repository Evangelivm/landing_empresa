import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0e13",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#afccff",
            fontFamily: "sans-serif",
          }}
        >
          D
        </div>
        <div
          style={{
            position: "absolute",
            top: 34,
            right: 34,
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "#7c3fe0",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
