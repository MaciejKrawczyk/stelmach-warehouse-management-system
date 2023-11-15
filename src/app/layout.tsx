import type {Metadata} from 'next'
import { Merriweather_Sans } from 'next/font/google'
import './globals.css'
import Provider from "@/src/backend/trpc/Provider";
import React from 'react'

const font = Merriweather_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Stelmach app',
  description: 'stelmach utility apps for PZ Stelmach by Maciej Krawczyk',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
