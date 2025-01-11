import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className="navbar bg-neutral shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PhotoGallery</a>
        <Search />
      </div>
    </div>
  )
}

export default Header