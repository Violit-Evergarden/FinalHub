import type { Metadata } from "next";
import '@/src/styles/tailwind.css';
import '@/src/styles/variables.css';
import '@/src/styles/global.scss';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
