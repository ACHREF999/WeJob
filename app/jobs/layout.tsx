import React from 'react'

function JobsLayout({
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

export default JobsLayout;