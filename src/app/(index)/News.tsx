"use client";
import React, { useLayoutEffect, useRef } from 'react'
import { motion } from "motion/react"
import NewsCard from '@/components/newsCard';
import Link from 'next/link';
import ShowAllButton from '@/components/showAllButton';

const News = () => {
  const ref = useRef<HTMLDivElement[]>([]);

  const newsArray =
  [
    {
      title: "하이엔지니어링 수주 땄다 와",
      date: "2026.02.02",
      link: "#"
    },
    {
      title: "뉴스제목",
      date: "2026.02.03",
      link: "#"
    },
    {
      title: "lorem ipsum",
      date: "2026.02.04",
      link: "#"
    },
    {
      title: "text",
      date: "2026.02.05",
      link: "#"
    },
    {
      title: "title",
      date: "2026.02.06",
      link: "#"
    },
    {
      title: "긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글",
      date: "2026.02.28",
      link: "#"
    },
  ]
  return (
    <div className="w-full h-auto bg-gray-100 pt-9.5 -z-10">
      <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5 }}
      className="text-center text-[48px] font-medium mb-9">뉴스</motion.h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-278">
          <div className="flex justify-center flex-wrap gap-4 w-full">
            {
              newsArray.map((item, index) => {
                return ( <NewsCard key={index} href={item.link} title={item.title} date={item.date} /> )
              })
            }
          </div>
          <ShowAllButton href="/promotion/01" className="flex items-center gap-1 self-end mb-9"/>
        </div>
      </div>
    </div>

  )
}

export default News