import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/layout/Header"

export const metadata: Metadata = {
  title: 'Universal Regional Consultants Limited',
  description: 'Universal Regional Consultants Limited 致力為客戶提供專業、可靠的商業諮詢服務。',
  generator: 'v0.dev',
  icons: {
    icon: '/111-1.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
