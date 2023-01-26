import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'

const LightThemeBtn = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-1 text-xs text-light-theme-btn ${className}`}>
      <LightModeIcon className="!h-4 !w-4" />
      <i>Light Mode</i>
    </div>
  )
}

export default LightThemeBtn
