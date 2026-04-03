import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  
  title: "Mike Andorful — Frontend Engineer ",
  description:
    "Frontend Engineer specialising in React, Next.js and TypeScript. Based in Accra, Ghana.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Ghana"],
  authors: [{ name: "Mike Andorful" }],
  openGraph: {
    title: "Mike Andorful — Frontend Engineer",
    description:
      "Frontend Engineer specialising in React, Next.js and TypeScript. Based in Accra, Ghana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    
        {children}</body>
    </html>
  );
}
