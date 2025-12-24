import React from 'react'

const DropDownMenu = () => {
  return (
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
            <li className="hover:text-blue-500 cursor-pointer">오시는길</li>
            </ul>
        </div>

        {/* 사업분야 */}
        <div className="flex-1 py-6 border-r border-gray-200 text-center">
            <ul className="space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">수자원부</li>
            <li className="hover:text-blue-500 cursor-pointer">구조부</li>
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
  )
}

export default DropDownMenu