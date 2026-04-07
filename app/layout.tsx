import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "مدينة مصر | سراي • تاج سيتي • باترفلاي",
  description: "اكتشف مشاريع مدينة مصر — سراي وتاج سيتي في القاهرة الجديدة، وباترفلاي في مدينة المستقبل",
  keywords: "مدينة مصر, سراي, تاج سيتي, باترفلاي, MNHD, القاهرة الجديدة",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
