import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-[1400px] mx-auto z-20 xl:items-center p-5">
      {/* left side */}
      <motion.div
        initial={{x:-500, opacity:0, scale:0.5}}
        animate={{x:0, opacity:1, scale:1}}
        transition={{duration:1.5}}
        className="flex flex-row justify-between items-center"
      >
        <SocialIcon url="https://www.youtube.com" bgColor="transparent" fgColor="#515151" />
        <SocialIcon url="https://www.youtube.com" bgColor="transparent" fgColor="#515151" />
        <SocialIcon url="https://www.youtube.com" bgColor="transparent" fgColor="#515151" />
      </motion.div>
      {/* right side */}
      <Link href="#contact">
            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }} 
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.75
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer pl-4"
            >
                <SocialIcon 
                    network="email" bgColor="transparent" fgColor="gray"
                    // className="cursor-pointer"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
            </motion.div>
        </Link>
    </header>
  )
}