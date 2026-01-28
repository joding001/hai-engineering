import React from 'react'

interface MoreBtnProps {
  rightNevHovered: boolean;
  setRightNevHovered: (v: boolean) => void;
}

const MoreBtn: React.FC<MoreBtnProps> = ({ rightNevHovered, setRightNevHovered }) => {
  return (
    <div className="relative z-101 ml-auto">
      {!rightNevHovered ?
        <button onClick={ () => setRightNevHovered(!rightNevHovered) } className="w-15 h-15 rounded-full flex items-center justify-center bg-white/50">
            <div className="flex flex-col p-3.5 rounded-full justify-between bg-white items-center w-12 h-12">
              <div className="bg-black w-1 h-1 rounded-full" />
              <div className="bg-black w-1 h-1 rounded-full" />
              <div className="bg-black w-1 h-1 rounded-full" />
            </div>
        </button>
      :
        <button
          onClick={() => setRightNevHovered(!rightNevHovered)}
          className="w-15 h-15 rounded-full flex items-center justify-center bg-white/50"
        >
          <div className="flex flex-col p-3.5 rounded-full justify-center bg-white items-center w-12 h-12">
            <div className="absolute w-4 h-0.75 bg-black rotate-45" />
            <div className="absolute w-4 h-0.75 bg-black -rotate-45" />
          </div>
        </button>
      }
    </div>
  )
}

export default MoreBtn