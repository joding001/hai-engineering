import Link from 'next/link'
import React from 'react'

const DropDownMenu = () => {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 w-[580px] h-[100px] self-start hover:h-[210px] overflow-hidden transition-[height] duration-500">
        <ul className="w-full h-[100px] flex">
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">회사소개</Link></li>
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">사업분야</Link></li>
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">홍보센터</Link></li>
          <li className="w-[25%] cursor-pointer hover:text-blue-500 transition-colors duration-300 flex items-center justify-center"><Link href="#">고객지원</Link></li>
        </ul>
        <ul className="w-full h-[55px] flex">
          <li className="w-[25%] flex items-center justify-center"><Link href="#">인사말</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">수자원부</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">뉴스</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">Q&A</Link></li>
        </ul>
        <ul className="w-full h-[55px] flex">
          <li className="w-[25%] flex items-center justify-center"><Link href="#">오시는길</Link></li>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">구조부</Link></li>
          <li className="w-[25%] flex items-center justify-center"/>
          <li className="w-[25%] flex items-center justify-center"><Link href="#">인재채용</Link></li>
        </ul>
      </div>
      <div className="w-full"></div>
    </>
  )
}

export default DropDownMenu