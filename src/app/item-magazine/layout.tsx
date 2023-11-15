import React from 'react'
import Navbar from "@/frontend/components/Navbar";

export default function ItemMagazineLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}