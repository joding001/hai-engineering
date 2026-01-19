import MOWRLogo from '@/components/MOWRLogo'
import SDLogo from '@/components/SDLogo'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

const Business = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);


  return (
    <div className="-mt-25 w-full h-245 bg-white -z-10">

        <h1 className="text-center mt-5 text-[48px] font-medium">사업분야</h1>

        <div className="flex justify-center my-10">
          <div className="flex flex-row gap-20">
            <div onClick={() => {setSelectedIndex(0); swiperRef.current?.slideTo(0, 500);}} className="w-22.5  flex flex-col items-center">
              <SDLogo scale={90} color={selectedIndex === 0 ? "#2159B7" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 0 ? "text-[#2159B7]" : "text-black"}`}>구조부</p>
            </div>
            <div onClick={() => {setSelectedIndex(1); swiperRef.current?.slideTo(1, 500);}} className="w-22.5  flex flex-col items-center">
              <MOWRLogo scale={90} color={selectedIndex === 1 ? "#2159B7" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 1 ? "text-[#2159B7]" : "text-black"}`}>수자원부</p>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            style={{ height: '560px' }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChangeTransitionStart={() => setSelectedIndex(swiperRef.current?.realIndex ?? 0)}
          >
            <SwiperSlide className="flex! justify-end! w-full h-140">
              <div className="flex flex-col p-6.25 w-81 h-115 bg-[linear-gradient(130deg,rgba(21,117,183,1)_0%,rgba(53,169,224,1)_100%)]">
                <div className="w-25 h-25 self-end">
                  <MOWRLogo color={"rgba(255,255,255,0.2)"} scale={100} />
                </div>
                <h1 className="text-white text-5xl self-start">수자원부</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">Slide 2</SwiperSlide>
          </Swiper>
        </div>

        <div className="h-245">

        </div>
      </div>
  )
}

export default Business