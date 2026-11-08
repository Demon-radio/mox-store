import './globals.css'

export const metadata = {
  title: 'Mox Store | Game Top-Up, Subscriptions & Digital Services',
  description: 'Mox Store - Everything you need in one place. Game top-up, subscriptions, and digital services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}