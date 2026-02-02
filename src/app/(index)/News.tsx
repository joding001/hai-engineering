"use client";
import React, { useLayoutEffect, useRef } from 'react'
import { motion } from "motion/react"

const News = () => {
  const ref = useRef<HTMLDivElement[]>([]);
  
  return (
    <div className="w-full h-245 bg-gray-100 pt-9.5 -z-10">
      <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5 }}
      className="text-center text-[48px] font-medium">뉴스</motion.h1>
    </div>
  )
}

export default News