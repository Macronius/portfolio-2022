// javascript library
import React from 'react'
//types
//animation
import { motion } from 'framer-motion'
//backend

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className={`
    flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-[#162616] p-10 opacity-40 cursor-pointer
    md:w-[600px]
    xl:w-[900px]
    hover:opacity-100 transition-opacity duration-200 ease-in-out
    `}>
        <motion.img
            src=""
            alt=""
            //
            initial={{}}
            transition={{}}
            whileInView={{}}
            viewport={{once:true}}
            //
            className={`
            w-32 h-32 rounded-full object-cover object-center
            xl:w-[200px] xl:h-[200px]
            `}
        />
        <div className="px-0 md:px-10">
            <h3 className="text-4xl font-light">Job Title</h3>
            <p className="font-bold text-2xl mt-1">Company Name</p>
            <div className="space-x-4 my-2 flex justify-center">
                {/* {
                    experience.technologies.map(technology => (
                        <img
                            key={technology?._id}
                            src={urlFor(tech.image).url()}
                            alt=""
                        />
                    ))
                } */}
                HTML
                CSS
                JS
            </div>
            <p className="uppercase py-5 text-gray-300">
                Start date: 2020 - End date: active
                {/* {new Date().toDateString()} - {
                    ExperienceCard.isCurrentlyWorkingHere
                        ? "active employment"
                        : new Date(experience.dateEnded).toDateString()
                } */}
            </p>
            <ul
                className={`
                list-disc space-y-4 ml-5 text-lg h-80
                overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-gray
                `}
            >
                <li>Learning</li>
                <li>Practicing</li>
                <li>Networking</li>
                {/* {
                    experience?.points.map((point, i) => (
                    <li key={Math.floor(Math.random()*42)} className="animate-pulse">
                        {point}
                    </li>
                    ))
                } */}
            </ul>
        </div>
    </article>
  );
}