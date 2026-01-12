import Link from 'next/link'
import React from 'react'

const DropDownMenu = () => {
  return (
    <>
      <div className="group absolute left-1/2 -translate-x-1/2 w-[432px] h-[100px] self-start hover:h-[210px] hover:w-[580px] overflow-y-hidden overflow-x-visible transition-[height, w] duration-500">
        <div className="absolute left-1/2 -translate-x-1/2 top-[100px] w-[100vw] h-0 bg-white group-hover:h-[110px] -z-20 transition-[height] duration-500" />
        <ul className="absolute left-1/2 -translate-x-1/2 top-0 w-[432px] h-[100px] group-hover:w-[580px] transition-[w] duration-500 flex">
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">회사소개</Link></li>
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">사업분야</Link></li>
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">홍보센터</Link></li>
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">고객지원</Link></li>
        </ul>
        <ul className="absolute left-1/2 -translate-x-1/2 top-[100px] w-[432px] h-[55px] group-hover:w-[580px] transition-[w] duration-500 flex">
          <li className="w-[25%] flex items-center justify-center"><Link href="#">인사말</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">수자원부</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">뉴스</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">Q&A</Link></li>
        </ul>
        <ul className="absolute left-1/2 -translate-x-1/2 top-[155px] w-[432px] h-[55px] group-hover:w-[580px] transition-[w] duration-500 flex">
          <li className="w-[25%] flex items-center justify-center"><Link href="#">오시는길</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">구조부</Link></li>
          <li className="w-[25%] flex items-center justify-center"/>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">인재채용</Link></li>
        </ul>
      </div>
    </>
  )
}

export default DropDownMenu