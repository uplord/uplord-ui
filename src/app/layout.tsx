import { Inter, Nunito } from 'next/font/google'

import NiceModalProvider from '@/context/NiceModalProvider'
import { ThemeProvider } from '@/context/ThemeProvider'
import '@/styles/globals.scss'
import '@/styles/index.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Uplord',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className={`${inter.className} ${nunito.className}`}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NiceModalProvider>{children}</NiceModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
