//javascript library
import React from 'react'
//components
import ExperienceCard from './ExperienceCard'
//animations
import { motion } from 'framer-motion'

type Props = {}

const experiencesArrayTemp = [1,2,3,4,5]

export default function WorkExperience({}: Props) {
  return (
    <motion.div
        className={`
        h-screen flex flex-col relative text-center justify-evenly items-center mx-auto
        md:text-left md:flex-row
        `}
    >
        <h3 className="section-header">Work Experience</h3>

        {/* insert work experience cards */}
        <div 
            className={`
            w-full flex space-x-5 snap-mandatory 
            overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#d5b23f]/80
            `}
        >
            {
                experiencesArrayTemp.map( (experience, i) => (
                    <ExperienceCard key={i} />
                ))
            }
        </div>
    </motion.div>
  )
}