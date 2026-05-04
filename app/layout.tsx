import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Attention Heatmap – Track Where Students Lose Focus",
  description: "Analyze video engagement data to create heatmaps showing exactly when students zone out, with AI-powered suggestions for content improvements."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9c3c79f4-8064-4ebd-9128-59c078d613dc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
