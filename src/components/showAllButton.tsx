import Link from 'next/link'
import React from 'react'

interface ShowAllButtonProps {
  href: string;
  className?: string;
};

const ShowAllButton = ( {href, className}:ShowAllButtonProps ) => {
  return (
    <Link href={href} className={className}>
    <p>전체보기</p>
    <img src="/showMoreIcon.png" className="w-1.25 h-2.5" />
    </Link>
  )
}

export default ShowAllButton