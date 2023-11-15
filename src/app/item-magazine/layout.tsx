import React from 'react'
import Navbar from "@/frontend/components/itemsMagazine/Navbar";
// import '../globals.css'

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