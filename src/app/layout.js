export const metadata = {
  title: "Reality Without Belief - A Radical New Philosophy",
  description:
    "Stop believing. Stop disbelieving. Start dealing with what is. A complete exit from the belief-disbelief game.",
  keywords:
    "philosophy, belief, reality, critical thinking, self-help, Ketan Shukla",
  authors: [{ name: "Ketan Shukla" }],
  openGraph: {
    title: "Reality Without Belief",
    description:
      "Stop believing. Stop disbelieving. Start dealing with what is.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
