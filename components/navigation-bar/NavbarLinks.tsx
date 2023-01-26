import React from 'react'
import Link from 'next/link'

const navLinks = [
  {
    path: '/',
    title: 'Home',
  },

  {
    path: 'learn',
    title: 'Learn',
  },

  {
    path: 'coaching',
    title: 'Coaching',
  },

  {
    path: 'training',
    title: 'Training',
  },

  {
    path: 'blogs',
    title: 'Blogs',
  },
]

const NavbarLinks = () => {
  return (
    <>
      {navLinks.map(item => (
        <li key={item.path} className="">
          <Link
            href={item.path}
            className="cursor-pointer hover:!text-link-active">
            {item.title}
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavbarLinks
