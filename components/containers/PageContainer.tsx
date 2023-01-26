import React from 'react'

const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-between pb-10 text-white ${className}`}>
      {children}
    </section>
  )
}

export default PageContainer
