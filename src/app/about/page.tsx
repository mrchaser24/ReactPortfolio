"use client"
import './about.css'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

import Summary from '@/components/About/Summary/page'
// import useAbout from '@/states/about';

export default function About() {
    const [title, setTitle] = useState<string>('Hello title')
    // const { title } = useAbout();
    
    return (
        <main className="flex flex-col items-center pt-20">
            <div className='pb-10 text-2xl'>ABOUT ME</div>
            <div className='about-photo-container pb-20'>
                <Image
                    src="/profile/chess.png"
                    alt="Profile Pic"
                    className='about-photo'
                    width={200}
                    height={200}
                />
            </div>
            <div>
                <p className='about-description'>Hi, I'm Chase Arcos Hermosisima. I'm a software engineer with a passion for programming and technology. I am a person who loves solving problems and creating solutions to a business. My goal is to continue learning and improving my skills in various programming languages and frameworks.</p>
            </div>

            <Summary/>
        </main>
    );
}