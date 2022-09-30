/* eslint-disable @next/next/no-img-element */
//js library
import React from 'react'
//framework
import Image from 'next/image'
import Link from 'next/link'
//components
import BackgroundCircles from './BackgroundCircles'
//assets
import myProfilePic from '../assets/me-3.jpg'
//
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Header({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "knock knock",
            "> who's there?",
            "smell mop",
            "smell mop who?",
            ":-/",
        ],
        loop: true,
        delaySpeed: 2000,
        
    });
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
            <BackgroundCircles />
            <Image src={myProfilePic} alt="" className="relative rounded-full w-20 h-20 mx-auto object-cover" />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[6px]">
                    Aspiring Web/Software Developer/Engineer
                </h2>
                <h1>
                    <span className="text-gray-100 text-5xl lg:text-6xl font-semibold px-10">{text}</span>
                    <Cursor cursorColor="#bb8bb8" />
                </h1>
                <div className="pt-5">
                    <Link href="#about"><button className="heroButton">About</button></Link>
                    <Link href="#studies"><button className="heroButton">Studies</button></Link>
                    <Link href="#skills"><button className="heroButton">Skills</button></Link>
                    <Link href="#projects"><button className="heroButton">Projects</button></Link>
                </div>
            </div>
        </div>
    )
}