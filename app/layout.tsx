import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export const metadata: Metadata = {
  title: "Dialogue Works • Peace through Perspective",
  description:
    "An organization committed to building safe, peaceful and resilient communities through inclusive dialogue.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <PageTransitionWrapper />
        
        
        <main>{children}</main>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('keydown', function(event) {
                if (event.ctrlKey === true || event.metaKey) {
                  if (event.code === 'Minus' || event.code === 'Equal' || event.code === 'NumpadSubtract' || event.code === 'NumpadAdd') {
                    event.preventDefault();
                  }
                }
              }, { passive: false });
              document.addEventListener('wheel', function(event) {
                if (event.ctrlKey === true || event.metaKey) {
                  event.preventDefault();
                }
              }, { passive: false });
            `,
          }}
        />
      </body>
    </html>
  );
}