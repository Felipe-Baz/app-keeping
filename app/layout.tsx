import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'App Keeping',
  description: 'The best way to manage your apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
