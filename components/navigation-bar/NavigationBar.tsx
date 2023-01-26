import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import useMediaQuery from '@mui/material/useMediaQuery'
import Drawer from 'antd/lib/drawer'
import NavbarLinks from './NavbarLinks'
import LightThemeBtn from '../buttons/light-theme-btn/LightThemeBtn'

const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleSetIsDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen)

  //detect the browser width to make the navbar responsive
  const smallWidth = useMediaQuery('(max-width:1200px)')

  return (
    <>
      <header
        className={`flex h-20 w-full items-center justify-around px-12 py-6 leading-[80px]`}>
        <h2 className="text-2xl font-bold text-primary">CHAIN GOATS</h2>
        {/*---Navigation---*/}
        {!smallWidth ? (
          <>
            <ul className="flex list-none items-center gap-11">
              <NavbarLinks />
            </ul>
            <LightThemeBtn />
          </>
        ) : (
          <div className="flex-1"></div>
        )}
        {/**Hamburger Icon */}
        {smallWidth && !isDrawerOpen && (
          <MenuIcon
            className="cursor-pointer text-white"
            onClick={handleSetIsDrawerOpen}
          />
        )}
      </header>
      {/**The sidebar that opens in mobile size windows */}
      <Drawer
        onClose={handleSetIsDrawerOpen}
        closable={false}
        className="!bg-body-bg"
        open={isDrawerOpen && smallWidth}
        title={
          <div className="flex justify-end py-[9px]">
            <MenuOpenIcon
              className="cursor-pointer text-white"
              onClick={handleSetIsDrawerOpen}
            />
          </div>
        }>
        <>
          <LightThemeBtn className="mb-10" />
          <ul className="flex flex-col gap-9">
            <NavbarLinks />
          </ul>
        </>
      </Drawer>
    </>
  )
}

export default NavigationBar
