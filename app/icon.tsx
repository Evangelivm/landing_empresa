import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#ddb9e4",
            fontFamily: "serif",
          }}
        >
          C
        </div>
        <div
          style={{
            position: "absolute",
            top: 7,
            right: 7,
            width: 4,
            height: 4,
            borderRadius: 999,
            background: "#7c4088",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
