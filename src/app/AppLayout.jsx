import React from 'react'

function AppLayout({ children }) {
  return (
    <div className="container py-2 px-2 md:px-none md:mx-auto text-black">
      {children}
    </div>
  )
}

export default AppLayout
