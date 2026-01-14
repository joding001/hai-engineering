import DropDownMenu from '@/components/dropDownMenu'
import Logo from '@/components/logo'
import MoreBtn from '@/components/moreBtn'
import React from 'react'

const Nev = () => {
  return (
    <div className="relative">
        {/****** 상단 네비게이션 *******/}
        <div className="relative h-25 w-full flex items-center px-8
          border-b border-transparent
          transition-colors duration-200
          group-hover:border-gray-200">

          <Logo />
          <DropDownMenu />
          <MoreBtn />
          <div className="w-screen h-27.5 absolute left-1/2 -translate-x-1/2 bg-white top-25 -z-10" />
        </div>

    </div>
  )
}

export default Nev