import React from 'react'

const MoreBtn = () => {
  return (
    <div className="ml-auto">
        <button className="w-15 h-15 rounded-full flex items-center justify-center bg-white/50">
            <div className="flex flex-col p-[14px] rounded-full justify-between bg-white items-center w-12 h-12">
            <div className="bg-black w-1 h-1 rounded-full" />
            <div className="bg-black w-1 h-1 rounded-full" />
            <div className="bg-black w-1 h-1 rounded-full" />
            </div>
        </button>
    </div>
  )
}

export default MoreBtn