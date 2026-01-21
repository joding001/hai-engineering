import MOWRLogo from '@/components/MOWRLogo'
import SDLogo from '@/components/SDLogo'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

const Business = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);
  const sdlText = "효율적 구조 안전성과 시공성을 확보하기 위해 구조 계획과 설계를 체계적으로 수행하며, 다양한 하중과 위험 요소를 고려해 장기적 안정성과 내구성을 갖춘 구조 시스템을 제시하고 현장에서 구현 가능한 실질적 해결책을 도출합니다."
  const mowrText = "효율적 관리와 개발을 위한 세부 계획 수립 및 설계를 체계적으로 수행하며, 수원 확보와 물 이용 방안을 종합적으로 고려해, 장기적 지속 가능성을 목표로 한 수자원 관리 방안을 제시하고 실현할 수 있는 구체적인 해결책을 도출합니다."



  return (
    <div className="-mt-25 w-full h-245 bg-white -z-10">

        <h1 className="text-center mt-5 text-[48px] font-medium">사업분야</h1>

        <div className="flex justify-center my-10">
          <div className="flex flex-row gap-20">
            <div onClick={() => {
              setSelectedIndex(0);
              (swiperRef.current?.realIndex === 1 || swiperRef.current?.realIndex === 3) && swiperRef.current?.slideToLoop((swiperRef.current?.realIndex + 3) % 4, 500);
              }} className="w-22.5  flex flex-col items-center">
              <SDLogo scale={90} color={(selectedIndex === 0 || selectedIndex === 2) ? "#227ff8" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 0 || selectedIndex === 2 ? "text-[#227ff8]" : "text-black"}`}>구조부</p>
            </div>
            <div onClick={() => {
              setSelectedIndex(1);
              (swiperRef.current?.realIndex === 0 || swiperRef.current?.realIndex === 2) && swiperRef.current?.slideToLoop((swiperRef.current?.realIndex + 1) % 4, 500);
              }} className="w-22.5  flex flex-col items-center">
              <MOWRLogo scale={90} color={(selectedIndex === 1 || selectedIndex === 3) ? "#227ff8" : "#A1A1A1"} />
              <p className={`mt-1 text-center text-xl ${selectedIndex === 1 || selectedIndex === 3 ? "text-[#227ff8]" : "text-black"}`}>수자원부</p>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            style={{ height: '560px', width: 'full' }}
            slidesPerView={1.2}
            // spaceBetween={}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChangeTransitionStart={() => {
              setSelectedIndex(swiperRef.current?.realIndex ?? 0); console.log(swiperRef.current?.realIndex)
            }}
          >
            <SwiperSlide className="flex! bg-transparent! justify-end! items-start! w-full h-140 bg-[url('/SDBackground.png')]! bg-no-repeat! bg-size-[auto_132%]! bg-position-[right_112px_top]!">
              <div className="flex flex-col p-6.25 w-81 h-115 bg-[linear-gradient(130deg,rgba(81,214,255,1)_0%,rgba(34,127,248,1)_100%)]">
                <div className="w-25 h-25 self-end mb-6">
                  <MOWRLogo color={"rgba(255,255,255,0.2)"} scale={100} />
                </div>
                <p className="text-white text-5xl font-medium self-start mb-4">구조부</p>
                <div className="w-11.25 h-0.75 shrink-0 bg-white/30 mb-2" />
                <p className="text-white text-2xl font-medium self-start mb-2">구조 설계 및 안전 확인</p>
                <p className="w-55 text-white text-base font-normal self-start text-left mb-4">{sdlText}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex! bg-transparent! justify-end! items-start! w-full h-140 bg-[url('/SDBackground.png')]! bg-no-repeat! bg-size-[auto_132%]! bg-position-[right_112px_top]!">
              <div className="flex flex-col p-6.25 w-81 h-115 bg-[linear-gradient(130deg,rgba(81,214,255,1)_0%,rgba(34,127,248,1)_100%)]">
                <div className="w-25 h-25 self-end mb-6">
                  <MOWRLogo color={"rgba(255,255,255,0.2)"} scale={100} />
                </div>
                <p className="text-white text-5xl font-medium self-start mb-4">수자원부</p>
                <div className="w-11.25 h-0.75 shrink-0 bg-white/30 mb-2" />
                <p className="text-white text-2xl font-medium self-start mb-2">물 관리 및 설계</p>
                <p className="w-55 text-white text-base font-normal self-start text-left mb-4">{mowrText}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex! bg-transparent! justify-end! items-start! w-full h-140 bg-[url('/SDBackground.png')]! bg-no-repeat! bg-size-[auto_132%]! bg-position-[right_112px_top]!">
              <div className="flex flex-col p-6.25 w-81 h-115 bg-[linear-gradient(130deg,rgba(81,214,255,1)_0%,rgba(34,127,248,1)_100%)]">
                <div className="w-25 h-25 self-end mb-6">
                  <MOWRLogo color={"rgba(255,255,255,0.2)"} scale={100} />
                </div>
                <p className="text-white text-5xl font-medium self-start mb-4">구조부</p>
                <div className="w-11.25 h-0.75 shrink-0 bg-white/30 mb-2" />
                <p className="text-white text-2xl font-medium self-start mb-2">구조 설계 및 안전 확인</p>
                <p className="w-55 text-white text-base font-normal self-start text-left mb-4">{sdlText}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex! bg-transparent! justify-end! items-start! w-full h-140 bg-[url('/SDBackground.png')]! bg-no-repeat! bg-size-[auto_132%]! bg-position-[right_112px_top]!">
              <div className="flex flex-col p-6.25 w-81 h-115 bg-[linear-gradient(130deg,rgba(81,214,255,1)_0%,rgba(34,127,248,1)_100%)]">
                <div className="w-25 h-25 self-end mb-6">
                  <MOWRLogo color={"rgba(255,255,255,0.2)"} scale={100} />
                </div>
                <p className="text-white text-5xl font-medium self-start mb-4">수자원부</p>
                <div className="w-11.25 h-0.75 shrink-0 bg-white/30 mb-2" />
                <p className="text-white text-2xl font-medium self-start mb-2">물 관리 및 설계</p>
                <p className="w-55 text-white text-base font-normal self-start text-left mb-4">{mowrText}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
  )
}

export default Business