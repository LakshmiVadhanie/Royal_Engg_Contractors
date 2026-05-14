import "../styles/globals.css";

export const metadata = {
  title: "Royal Engineering Contractors | Industrial Blasting & Painting",
  description:
    "REC provides expert industrial blasting, painting, and surface preparation services across India since 2010. Serving refineries, power plants, ports, and marine infrastructure.",
  keywords:
    "industrial blasting, painting, surface preparation, grit blasting, Surat, Gujarat, marine painting, refinery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        {/* Global building sketch watermark background layer covering the entire document behind all content */}
        <div
          className="fixed inset-0 pointer-events-none z-[-1]"
          style={{
            backgroundImage: "url('/images/bg-industrial-sketch.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />
        {children}
      </body>
    </html>
  );
}
