import React from 'react'
import Navbar from "@/src/frontend/components/itemsMagazine/Navbar"


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