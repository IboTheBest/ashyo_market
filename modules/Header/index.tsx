import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderCenter from './HeaderCenter'
import HeaderMobile from './HeaderMobile'
import HeaderCategory from './HeaderCategory'

const Header = () => {
  return (
    <header className='pb-[29px]'>
      <HeaderTop/>
      <HeaderCenter/>
      <HeaderMobile/>
      <HeaderCategory/>
    </header>
  )
}

export default Header