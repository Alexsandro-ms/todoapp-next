import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import BottomBar from "@/components/ui/bottom-bar";
import { AuthProvider } from "@/provider/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoAPP",
  description: "Seu aplicativo de tarefas para o dia a dia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <div className="md:hidden">
            <BottomBar />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
