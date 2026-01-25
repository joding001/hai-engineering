"use client";
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const ref = useRef<HTMLDivElement[]>([]);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      ref.current.forEach((el) => {
        if (!el) return;
        
        gsap.fromTo(el, 
          { 
            y: 50, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
              onEnter: () => console.log("애니메이션 시작!"),
            },
            onComplete: () => {
              gsap.set(el, { clearProps: "y" }); 
            }
          }
        );
      });

    });

    return () => ctx.revert(); 
  }, []);
  
  return (
    <div className="w-full h-245 bg-gray-100 pt-9.5 -z-10">
      <h1 ref={(el) => { if (el) ref.current[0] = el; }} className="text-center text-[48px] font-medium">뉴스</h1>

    </div>
  )
}

export default News