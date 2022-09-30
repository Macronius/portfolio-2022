import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:[0.1,0.2,0.4,0.8,0.4,1.0], scale:[0.5,1,2,2,3,0.75,1], borderRadius:["20%","20%","50%","80%","20%",]}}
      transition={{duration:2.5}}
      className="relative flex justify-center items-center"
    >
        <div className="absolute border border-[#515151] rounded-full h-[190px] w-[190px] mt-52 animate-ping" />
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 " />
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 " />
        <div className="absolute rounded-full border border-[#ff0]/40 h-[650px] w-[650px] mt-52 animate-pulse" />
        <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 " />
    </motion.div>
  )
}