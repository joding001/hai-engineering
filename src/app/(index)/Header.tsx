import React from 'react'
import DropDownMenu from "@/components/nevMenu";
import Logo from "@/components/logo";
import MoreBtn from "@/components/moreBtn";
import Nev from '../nev';

const Header = () => {
  return (
    <>
      {/*******  ********/}
      <div className="relative flex flex-col justify-center items-center -top-25 w-full h-245 bg-[url('/hanbando.png')] bg-cover bg-center bg-no-repeat overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay -z-30"></div>
            <div className="text-base pb-10 font-normal text-center text-white drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                “Hi Engineering - Pioneering 21st-Century Innovation.”
            </div>
            <div>
                <div className="relative text-[3rem] text-b font-bold pb-30 text-center text-white drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
                    21세기 엔지니어링의 선두주자, 기술혁신의 중심. <br />
                    기술로 인정받는 하이엔지니어링
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;