import React from 'react'
import DropDownMenu from "@/components/dropDownMenu";
import Logo from "@/components/logo";
import MoreBtn from "@/components/moreBtn";

const Header = () => {
  return (
    <>
      <div className="group relative">
        {/****** 상단 네비게이션 *******/}
        <div className="relative h-[100px] w-full flex items-center px-8
          border-b border-transparent
          transition-colors duration-200
          group-hover:bg-white group-hover:border-gray-200">

          <Logo />
          <DropDownMenu />
          <MoreBtn></MoreBtn>
        </div>

      </div>

      {/******* 헤더 ********/}
      <div className="relative flex flex-col justify-center items-center -top-25 w-full h-[980px] bg-[url('/hanbando.png')] bg-cover bg-center bg-no-repeat overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay -z-30"></div>
            <div className="text-base pb-10 font-normal text-center text-white drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                “Hi Engineering - Pioneering 21st-Century Innovation.”
            </div>
            <div>
                <div className="text-[3rem] text-b font-bold pb-30 text-center text-white drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                    21세기 엔지니어링의 선두주자, 기술혁신의 중심. <br />
                    기술로 인정받는 하이엔지니어링
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;