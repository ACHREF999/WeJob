import React from 'react'

function ProfileLayout({
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

export default ProfileLayout;