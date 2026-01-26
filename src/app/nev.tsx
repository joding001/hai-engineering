import DropDownMenu from '@/components/nevMenu'
import Logo from '@/components/logo'
import MoreBtn from '@/components/moreBtn'
import NevMenu from '@/components/nevMenu'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from "motion/react"

const Nev = () => {
  const [nevMenuHovered, setNevMenuHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
    initial={{ y: isScrolled ? -100 : -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={`${isScrolled ? "fixed" : "absolute"} top-0 left-0 w-full z-50`}>
        {/****** 상단 네비게이션 *******/}
        <div className={`relative h-25 w-full flex items-center px-8 bg-transparent
          border-b border-transparent
          transition-[color] duration-200
          ${nevMenuHovered ? "border-b-gray-200 bg-white" : ""} ${isScrolled ? "bg-white" : ""}`}>

          <Logo />
          <NevMenu setNevMenuHovered={setNevMenuHovered}/>
          <MoreBtn />
          <div className={`w-screen h-0 absolute left-1/2 -translate-x-1/2 bg-white top-25 -z-10 transition-[height] duration-300 ease-in-out ${nevMenuHovered ? "h-30" : ""}`} />
        </div>

    </motion.div>
  )
}

export default Nev