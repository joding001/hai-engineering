import DropDownMenu from '@/components/nevMenu'
import Logo from '@/components/logo'
import MoreBtn from '@/components/moreBtn'
import NevMenu from '@/components/nevMenu'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useAnimation } from "motion/react"
import RightNevMenu from '@/components/rightNevMenu'

const Nev = () => {
  const [nevMenuHovered, setNevMenuHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const hasTriggeredRef = useRef(false);
  const [rightNevOpened, setrightNevOpened] = useState(false);

    const menuItems : { title: string; sub: string[]; href: string; subHref: string[]; }[] = [
    {
      title: "회사소개",
      sub: ["인사말", "오시는길"],
      href: "/company/01",
      subHref: ["/company/01", "/company/02"]
    },
    {
      title: "사업분야",
      sub: ["수자원부", "구조부"],
      href: "/business/01",
      subHref: ["/business/01", "/business/02"]
    },
    {
      title: "홍보센터",
      sub: ["뉴스"],
      href: "/promotion/01",
      subHref: ["/promotion/01", ""]
    },
    {
      title: "고객지원",
      sub: ["Q&A", "인재채용"],
      href: "/support/01",
      subHref: ["/support/01", "/support/02"]
    },
  ];

  useEffect(() => {
    controls.set({ y: -100 });
    controls.start({
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    });
  }, [controls]);


  useEffect(() => {
    const runEnterAnimation = () => {
      controls.set({ y: -100 });
      controls.start({
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
      });
    };

    const handleScroll = () => {
      const isNowScrolled = window.scrollY >= 100;

      if (isNowScrolled && !hasTriggeredRef.current) {
        setIsScrolled(true);
        runEnterAnimation();
        hasTriggeredRef.current = true;
      }

      if (!isNowScrolled && hasTriggeredRef.current) {
        setIsScrolled(false);
        hasTriggeredRef.current = false;
      }
    };

    if (window.scrollY >= 100) {
      setIsScrolled(true);
      runEnterAnimation();
      hasTriggeredRef.current = true;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);




  return (
    <motion.div
    initial={{ y: 0 }}
    animate={controls}
    className={`${isScrolled ? "fixed" : "absolute"} top-0 left-0 w-full z-50`}>
      {/****** 상단 네비게이션 *******/}
      <div className={`relative h-25 w-full flex items-center px-8 bg-transparent
      border-b border-transparent
      transition-[color] duration-200
      ${nevMenuHovered ? "border-b-gray-200 bg-white" : ""} ${isScrolled ? "bg-white" : ""}`}>

        <Logo />
        <NevMenu menuItems={menuItems} setNevMenuHovered={setNevMenuHovered}/>
        <MoreBtn rightNevOpened={rightNevOpened} setRightNevOpened={setrightNevOpened} />
        <div className={`w-screen h-0 absolute left-1/2 -translate-x-1/2 bg-white top-25 -z-10 transition-[height] duration-300 ease-in-out ${nevMenuHovered ? "h-30" : ""}`} />
      </div>

      <RightNevMenu menuItems={menuItems} rightNevOpened={rightNevOpened} />
      <div className={`-z-50 top-0 fixed w-full h-full ${nevMenuHovered ? "bg-black/40" : "hidden"}`} />
      <div onClick={() => setrightNevOpened(!rightNevOpened)} className={`z-98 top-0 fixed w-full h-full ${rightNevOpened ? "bg-black/40" : "hidden"}`} />
    </motion.div>
  )
}

export default Nev