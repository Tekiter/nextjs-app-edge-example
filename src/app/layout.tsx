import "@/app/global.css";

import Header from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Edge SSR",
  description: "App Edge SSR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
