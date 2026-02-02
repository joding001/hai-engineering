import React from 'react'
import { motion } from 'motion/react'

type NewsCardProps = {
  title: string;
  date: string;
};


const NewsCard = ( {title, date}:NewsCardProps ) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 0.5 }}
    className="w-90 h-90 bg-white rounded-[20px] overflow-hidden">
        <div className="h-60 bg-[url('/SDBackground.png')] bg-cover bg-center bg-no-repeat" />
        <div className="h-30 flex flex-col justify-between border-neutral-300 border-x border-b rounded-bl-[20px] rounded-br-[20px] px-5 pt-5 pb-3.75">
            <p className="text-xl font-medium line-clamp-2">{title}</p>
            <p className="text-base text-gray-400">{date}</p>
        </div>
    </motion.div>
  )
}

export default NewsCard