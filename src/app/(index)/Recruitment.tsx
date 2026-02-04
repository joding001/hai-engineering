"use client";

import React, { useLayoutEffect, useRef } from 'react'
import { motion } from "motion/react"
import Link from 'next/link';

const Recruitment = () => {

  return (
    <div className="w-full flex flex-col items-center h-245 pt-9.5 bg-[url('/recruitmentBackgroundIamge.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[48px] font-medium mb-80">인재채용</motion.h1>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-70">
            <p className="text-4xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                미래를 설계하는 곳<br />
                하이엔지니어링과<br />
                함께 하세요.<br />
            </p>
            <div>
                <p className="text-base mb-4 text-white drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                    하이엔지니어링의 인재상은 책임감을 가지고 맡은 일을 꾸준히 해내며,<br />
                    타인을 배려하고 선한 마음으로 행동하는 따뜻한 사람입니다.<br />
                    당신이 꿈꾸는 대한민국과 더 넓은 미래를 위해 하이엔지니어링에서<br />
                    당신의 능력을 마음껏 펼치십시오.
                </p>
                <Link href="/support/02" className="border-3 inline-flex flex-row items-center border-white px-6 py-4 drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                    <p className="text-white inline mr-8">더보기</p>
                    <div className="w-5 h-0.5 inline-block bg-white"></div>
                </Link>
            </div>
        </motion.div>
    </div>
  );
};

export default Recruitment;