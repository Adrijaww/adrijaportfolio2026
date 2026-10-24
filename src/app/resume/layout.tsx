import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View Adrija Chatterjee's resume and experience in full-stack development, backend engineering, and AI-integrated applications.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
