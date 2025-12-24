import React from 'react'

const NevUl = () => {
  return (
    <ul className="absolute left-1/2 -translate-x-1/2 flex gap-[45px]
      text-black transition-[gap] duration-200
      group-hover:gap-[82px]">
      <li className="cursor-pointer hover:text-blue-500">회사소개</li>
      <li className="cursor-pointer hover:text-blue-500">사업분야</li>
      <li className="cursor-pointer hover:text-blue-500">홍보센터</li>
      <li className="cursor-pointer hover:text-blue-500">고객지원</li>
    </ul>
  )
}

export default NevUl