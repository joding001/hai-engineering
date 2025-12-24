import Image from "next/image";

export const metadata = {
  title: "하이엔지니어링",
  description: "하이엔지니어링 홈페이지에 오신 것을 환영합니다.",
};

export default function Home() {
  return (
    <>
      <div className="group relative">
        {/******** 상단 네비게이션 ********/}
        <div className="relative h-[100px] w-full flex items-center px-8
          border-b border-transparent
          transition-colors duration-200
          group-hover:bg-white group-hover:border-gray-200">

          {/* 왼쪽 로고 */}
          <img
            src="/logo.png"
            alt="하이엔지니어링"
            width={1920}
            height={1080}
            className="h-[40px] w-auto"
          />

          <ul className="absolute left-1/2 -translate-x-1/2 flex gap-[45px]
            text-black transition-[gap] duration-200
            group-hover:gap-[82px]">
            <li className="cursor-pointer">회사소개</li>
            <li className="cursor-pointer">사업분야</li>
            <li className="cursor-pointer">홍보센터</li>
            <li className="cursor-pointer">고객지원</li>
          </ul>

          {/* 오른쪽 버튼 */}
          <div className="ml-auto">
            <button className="w-15 h-15 rounded-full flex items-center justify-center bg-white/50">
              <div className="flex flex-col p-[14px] rounded-full justify-between bg-white items-center w-12 h-12">
                <div className="bg-black w-1 h-1 rounded-full" />
                <div className="bg-black w-1 h-1 rounded-full" />
                <div className="bg-black w-1 h-1 rounded-full" />
              </div>
            </button>
          </div>
        </div>

        {/******** 메가메뉴 ********/}
        <div className="absolute top-full left-0 w-full bg-white
          border-b border-gray-200
          opacity-0 invisible
          transition-all duration-200
          group-hover:opacity-100 group-hover:visible z-40">

          <div className="mx-auto max-w-6xl flex">
            {/* 왼쪽 여백 */}
            <div className="flex-2" />

            {/* 회사소개 */}
            <div className="flex-1 py-6 border-r border-gray-200 text-center">
              <ul className="space-y-3">
                <li className="hover:text-blue-500 cursor-pointer">인사말</li>
                <li className="hover:text-blue-500 cursor-pointer">연혁</li>
                <li className="hover:text-blue-500 cursor-pointer">조직도</li>
              </ul>
            </div>

            {/* 사업분야 */}
            <div className="flex-1 py-6 border-r border-gray-200 text-center">
              <ul className="space-y-3">
                <li className="hover:text-blue-500 cursor-pointer">플랜트</li>
                <li className="hover:text-blue-500 cursor-pointer">설계</li>
              </ul>
            </div>

            {/* 홍보센터 */}
            <div className="flex-1 py-6 border-r border-gray-200 text-center">
              <ul className="space-y-3">
                <li className="hover:text-blue-500 cursor-pointer">뉴스</li>
              </ul>
            </div>

            {/* 고객지원 */}
            <div className="flex-1 py-6 text-center">
              <ul className="space-y-3">
                <li className="hover:text-blue-500 cursor-pointer">Q&A</li>
                <li className="hover:text-blue-500 cursor-pointer">인재채용</li>
              </ul>
            </div>

            {/* 오른쪽 여백 */}
            <div className="flex-2" />
          </div>
        </div>
      </div>

      {/******** 헤더 ********/}
    </>
  );
}
