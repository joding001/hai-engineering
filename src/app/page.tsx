import Image from "next/image";
import Logo from "@/components/logo";
import NevUl from "@/components/nevUl";
import MoreBtn from "@/components/moreBtn";
import DropDownMenu from "@/components/dropDownMenu";
import HeaderTitle from "@/components/headerTitle";
import SDLogo from "@/components/SDLogo";



export default function Home() {
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
      <div className="relative flex flex-col justify-center items-center -top-25 w-full h-[980px] bg-gray-400 -z-10">
        <HeaderTitle />
      </div>

      {/******** 사업분야 *******/}
      <div className="-mt-25 w-full h-[980px] bg-white -z-10">
        <SDLogo w={100} h={100} />
      </div>
    </>
  );
}
