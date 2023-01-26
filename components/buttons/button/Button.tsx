import React from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

const Button = ({ variant = 'primary', className, children }: Props) => {
  const baseStyle =
    'cursor-pointer rounded-3xl p-button text-white outline-none'

  const primaryStyle = `border border-btn-primary-bg bg-btn-secondary-bg`

  const secondaryBtn = `border-none bg-btn-primary-bg`

  const customStyle = variant === 'primary' ? primaryStyle : secondaryBtn

  return (
    <button className={`${baseStyle} ${customStyle} ${className}`}>
      {children}
    </button>
  )
}

export default Button
