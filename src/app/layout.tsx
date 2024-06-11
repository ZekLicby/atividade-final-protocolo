import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StyledComponentsRegistry from "../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universidade Católica",
  description: "Aplicação web do setor de protocolos da UNICAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
