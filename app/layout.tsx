import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applicator",
  description:
    "Applicator, Society in Seoul National University of Science and Technology, Dept. of Applied Artifical Intelligence",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="assets/favicon.svg" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
