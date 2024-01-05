import React from 'react'

function GigsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-[5%]">
        {children}
    </div>
  )
}

export default GigsLayout