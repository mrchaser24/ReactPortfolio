/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import ConfirmModal from '@/components/Modal/page.tsx'

export default function Home() {
  const initialized = useRef(false)
  const firstText = 'Web Developer'
  const skillsArray = ["Frontend Developer", "Game Developer", "Freelancer", "Python Developer", "QA Tester", "Assistant Instructor"]
  const [textArray, setTextArray] = useState(firstText.split(""));
  const [textElement, setTextElement] = useState("");
  const [count, setCount] = useState(0)
  const [showModalResume, setModalResume] = useState(false)
  const [showModalAuthor, setModalAuthor] = useState(false)
  
  useEffect(() => {
    if(count >= skillsArray.length) setCount(0)
    if (textElement.length >= textArray.length) {
      let clearTextElemTimeout = setTimeout(()=>{
        clearTimeout(clearTextElemTimeout);
        setTextElement("");
        setTextArray(skillsArray[count].split(""));
        initialized.current = false;
        setCount((count)=> count + 1)
      }, 3000)
    }
    if (!initialized.current) {
      initialized.current = true

      textArray.forEach((letter, index) => {
        setTimeout(() => {
          setTextElement((textElement) => textElement + letter);
        }, index * 50);
      });
    }
  }, [textElement, count])

  function confirmButtonResume(){
    setModalResume(false)
    window.open(
      '/resume/Chase Arcos Hermosisima.pdf',
      '_blank'
    );
  }
  function confirmButtonAuthor(){
    setModalAuthor(false)
    window.open(
      'https://lovepik.com/images/png-person.html',
      '_blank'
    );
  }
  return (
    <main className="flex space-between h-screen" style={{'userSelect': 'none', 'position':'relative'}}>
      <div className="right-side w-1/2 justify-center flex flex-col">
        <div className="project-title text-3xl">Hi, I am</div>
        
        <div className="project-description my-5">
          <p className="text-7xl">Chase Arcos</p>
          <p className="text-7xl">Hermosisima</p>
        </div>
        
        <div className='flex'>
          <div className='text-3xl'>I'm a <span className="bold">{textElement}</span></div>
          <div className="cursor"></div>
        </div>

        <div className='pt-10'>
          <p style={{'width':'80%'}}>I'm passionate about programming, thriving on complex challenges and creating impactful business applications.</p>
          <div className="project-link" onClick={()=> setModalResume(true)}>
            <p>Checkout my resume</p>
          </div>
        </div>
      </div>
      <div className="left-side w-1/2 flex justify-center">
        <div className="project-image flex justify-end items-center">
          <Image onClick={() => setModalAuthor(true)} style={{'cursor':'pointer'}} src="/developer-art.svg" alt="project" layout='responsive' width={500} height={700} />
        </div>  
      </div>
      <ConfirmModal showModal={showModalResume} modalTitle={'Confirm Download'} modalMessage={'You are about to be redirected to my resume?'} confirmModal={()=>confirmButtonResume()} closeModal={()=>setModalResume(false)}/>
      <ConfirmModal showModal={showModalAuthor} modalTitle={'Confirm Redirection'} modalMessage={'You are about to be redirected to the art author?'} confirmModal={()=>confirmButtonAuthor()} closeModal={()=>setModalAuthor(false)}/>
    </main>
  );
}
