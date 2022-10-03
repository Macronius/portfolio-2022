import React from 'react'
import Image from 'next/image'
import picture from '../assets/me-3.jpg'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className={`
      h-screen flex flex-col relative text-center justify-evenly items-center mx-auto
      md:text-left md:flex-row
      `}
    >
      <h3 className="section-header">
        About
      </h3>

      <Image
        // initial={{x:-200, opacity:0}}
        // whileInView={{x:0, opacity:1}}
        // viewport={{once:true}}
        // transition={{duration:1.25}}
        src={picture}
        alt="just a little something"
        className={`
        -mb-20flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:mb-0 md:rounded-lg md:w-64 md:h-64
        xl:w-[500px] xl:h-[600px]
        `}
      ></Image>

      <div className={`
      space-y-10 px-0
      md:px-10
      `}>
        <h4 className="text-4xl font-semibold">
          A little about myself
        </h4>
        <p 
          className={`
          text-base 
          // text-center mx-10
          // md:text-left
        `}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta porro incidunt sapiente reiciendis error laudantium? The crash will end on October 21, 2022.  The Solar eclipse will occur 4 days later on October 25.  Check the Mars / Uranus cycle, which will be in effect until December.  
          Molestiae debitis eaque veritatis accusamus reprehenderit. Quos reprehenderit nostrum esse modi eum mollitia corporis vitae sit consequatur atque, recusandae id excepturi commodi itaque numquam enim amet! Aliquid, est. Non sapiente facere architecto blanditiis molestias optio sit corporis saepe repellat itaque. Iure deleniti officiis ratione sint, totam placeat molestias possimus, corrupti blanditiis ex iusto eligendi soluta maxime esse quos aspernatur modi quaerat ipsa fugit consequatur obcaecati explicabo ab alias in. Tempora consectetur labore impedit, cupiditate dignissimos atque a eveniet hic. Consequatur, amet eius ipsa harum molestias possimus asperiores quaerat nostrum doloremque ex quidem, iusto nihil animi delectus consectetur! Veniam maxime dolore, unde assumenda quas a minima totam inventore reiciendis voluptas ipsa?
        </p>
      </div>
    </motion.div>
  )
}