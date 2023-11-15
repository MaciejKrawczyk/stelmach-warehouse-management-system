import React from 'react'
import Navbar from "@/src/frontend/components/itemsMagazine/Navbar"
import MenuButton from "@/src/frontend/components/MenuButton";


export default function ItemMagazineLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
      <MenuButton />
    </div>
  )
}