import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link';

type NewsCardProps = {
  href: string;
  title: string;
  date: string;
};


const NewsCard = ( {href, title, date}:NewsCardProps ) => {
  return (
    <Link href={href}>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5 }}
      className="lg:w-[calc(30vw-16px)] lg:max-w-90 w-[calc(50vw-32px)] h-90 bg-white rounded-[20px] overflow-hidden">
          <div className="h-60 bg-[url('/SDBackground.png')] bg-cover bg-center bg-no-repeat" />
          <div className="h-30 flex flex-col justify-between border-neutral-300 border-x border-b rounded-bl-[20px] rounded-br-[20px] px-5 pt-5 pb-3.75">
              <p className="text-xl font-medium line-clamp-2">{title}</p>
              <p className="text-base text-gray-400">{date}</p>
          </div>
      </motion.div>
    </Link>
  )
}

export default NewsCard