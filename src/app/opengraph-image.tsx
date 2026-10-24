import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = DATA.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#fafaf9", padding: 80, color: "#292524" }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>{DATA.name}</div>
      <div style={{ fontSize: 30, marginBottom: 24 }}>{DATA.role}</div>
      <div style={{ fontSize: 24, color: "#57534e" }}>{DATA.description}</div>
    </div>, size
  );
}
