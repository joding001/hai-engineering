import DropDownMenu from '@/components/nevMenu'
import Logo from '@/components/logo'
import MoreBtn from '@/components/moreBtn'
import NevMenu from '@/components/nevMenu'
import React, { useState } from 'react'

const Nev = () => {
    const [nevMenuHovered, setNevMenuHovered] = useState(false);


  return (
    <div className="relative">
        {/****** 상단 네비게이션 *******/}
        <div className={`relative h-25 w-full flex items-center px-8 bg-transparent
          border-b-1 border-transparent
          transition-[color] duration-200
          ${nevMenuHovered ? "border-gray-200 bg-white" : ""}`}>

          <Logo />
          <NevMenu setNevMenuHovered={setNevMenuHovered}/>
          <MoreBtn />
          <div className="w-screen h-27.5 absolute left-1/2 -translate-x-1/2 bg-white top-25 -z-10" />
        </div>

    </div>
  )
}

export default Nev