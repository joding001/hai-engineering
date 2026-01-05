import MOWRLogo from '@/components/MOWRLogo'
import SDLogo from '@/components/SDLogo'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

const Business = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);


  return (
    <div className="-mt-25 w-full h-[980px] bg-white -z-10">

        <h1 className="text-center mt-5 text-[48px] font-medium">사업분야</h1>

        <div className="flex justify-center mt-10">
          <div className="flex flex-row gap-[80px]">
            <div onClick={() => {setSelectedIndex(0); swiperRef.current?.slideTo(0, 500);}} className="w-[90px]  flex flex-col items-center">
              <SDLogo scale={90} color={selectedIndex === 0 ? "#2159B7" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 0 ? "text-[#2159B7]" : "text-black"}`}>구조부</p>
            </div>
            <div onClick={() => {setSelectedIndex(1); swiperRef.current?.slideTo(1, 500);}} className="w-[90px]  flex flex-col items-center">
              <MOWRLogo scale={90} color={selectedIndex === 1 ? "#2159B7" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 1 ? "text-[#2159B7]" : "text-black"}`}>수자원부</p>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            style={{ height: '400px' }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChangeTransitionStart={() => setSelectedIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <SwiperSlide className="h-full">Slide 1</SwiperSlide>
            <SwiperSlide className="h-full">Slide 2</SwiperSlide>
          </Swiper>
        </div>

        <div className="h-[980px]">

        </div>
      </div>
  )
}

export default Business