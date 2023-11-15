import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Provider from "@/backend/trpc/Provider";
import React from 'react'

const inter = Inter({subsets: ['latin']})

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
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
