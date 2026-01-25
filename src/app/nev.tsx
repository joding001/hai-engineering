import DropDownMenu from '@/components/nevMenu'
import Logo from '@/components/logo'
import MoreBtn from '@/components/moreBtn'
import NevMenu from '@/components/nevMenu'
import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Nev = () => {
  const [nevMenuHovered, setNevMenuHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { top: -100 },
        { top: 0, duration: 0.6, ease: "power3.out" }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="absolute top-0 left-0 w-full z-50">
        {/****** 상단 네비게이션 *******/}
        <div className={`relative h-25 w-full flex items-center px-8 bg-transparent
          border-b border-transparent border-black
          transition-[color] duration-200
          ${nevMenuHovered ? "border-b-gray-200 bg-white" : ""}`}>

          <Logo />
          <NevMenu setNevMenuHovered={setNevMenuHovered}/>
          <MoreBtn />
          <div className={`w-screen h-0 absolute left-1/2 -translate-x-1/2 bg-white top-25 -z-10 transition-[height] duration-250 ease-in-out ${nevMenuHovered ? "h-27.5" : ""}`} />
        </div>

    </div>
  )
}

export default Nev