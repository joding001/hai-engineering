"use client";

import Image from "next/image";
import Logo from "@/components/logo";
import NevUl from "@/components/nevUl";
import MoreBtn from "@/components/moreBtn";
import DropDownMenu from "@/components/dropDownMenu";
import HeaderTitle from "@/components/headerTitle";
import SDLogo from "@/components/SDLogo";
import MOWRLogo from "@/components/MOWRLogo";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';



export default function Home() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="group relative">
        {/******** 상단 네비게이션 ********/}
        <div className="relative h-[100px] w-full flex items-center px-8
          border-b border-transparent
          transition-colors duration-200
          group-hover:bg-white group-hover:border-gray-200">

          <Logo />
          <NevUl />
          <MoreBtn />
        </div>

        <DropDownMenu />
      </div>

      {/******** 헤더 ********/}
      <div className="relative flex flex-col justify-center items-center -top-25 w-full h-[980px] bg-[url('/hanbando.png')] bg-cover bg-center bg-no-repeat overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay -z-30"></div>
        <HeaderTitle />
      </div>

      {/******** 사업분야 *******/}
      <div className="-mt-25 w-full h-[980px] bg-white -z-10">

        <h1 className="text-center mt-5 text-[48px] font-medium">사업분야</h1>

        <div className="flex justify-center mt-10">
          <div className="flex flex-row gap-[80px]">
            <div onClick={() => setSelectedIndex(0)} className="w-[90px]  flex flex-col items-center">
              <SDLogo scale={90} color={selectedIndex === 0 ? "#2159B7" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 0 ? "text-[#2159B7]" : "text-black"}`}>구조부</p>
            </div>
            <div onClick={() => setSelectedIndex(1)} className="w-[90px]  flex flex-col items-center">
              <MOWRLogo scale={90} color={selectedIndex === 1 ? "#2159B7" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 1 ? "text-[#2159B7]" : "text-black"}`}>수자원부</p>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            style={{ height: '400px' }}
            slidesPerView={1.3}
            spaceBetween={30}
            loop={true}
          >
            <SwiperSlide className="h-full">Slide 1</SwiperSlide>
            <SwiperSlide className="h-full">Slide 2</SwiperSlide>
          </Swiper>
        </div>




      </div>
    </>
  );
}
