import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
      <img
          src="/logo.png"
          alt="하이엔지니어링"
          width={1920}
          height={1080}
          className="h-10 relative v-20 w-auto"
      />
    </Link>
  )
}

export default Logo