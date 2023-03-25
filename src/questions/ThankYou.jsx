import React from 'react';
import Lottie from "lottie-react";
import BusinessInsurance from '../assets/BusinessInsurance.json';
import "../styles/forms.css";
import Agent from '../assets/agent.jpg';
import GetMoreQuotes from '../components/GetMoreQuotes';
import WhyUsFeatures from '../components/WhyUsFeatures';



export default function ThankYou() {


  //TODO:
    // Get timezone and dynamically show

  const time = new Date().toString('en-US', {timeZone: "America/New York"})

  let businessName = localStorage.getItem('businessName');

  return (
    <div className="bg-dark-purple pb-10">

      <div className="formArea flex items-center py-5 px-4 sm:px-6 lg:px-4 flex-col">
        


      <div className="py-2 lg:w-1/2 md:w-full sm:w-full mx-auto overflow-hidden rounded-lg">
          <div className="flex flex-wrap align-middle justify-center">
         
        <div className="w-full md:w-full px-2 md:pl-12 lg:pr-0 text-center mx-auto">
        <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            An Agent Is Working On Your Quote!
            </h2>

            <p className="text-white text-lg mx-auto pt-5">
             Keep an eye out! An agent will call you shortly to go over the next steps and get started on your quote and get you a price you love!
              </p>
               
        </div>

      </div>
    </div>
        <WhyUsFeatures />
        <div className="elfsight-app-c43abc95-912b-4592-8284-6ee3d320a5a8 w-full mb-5 pb-4 bg-input-purple"></div>

        <GetMoreQuotes/>
        <div className="m-w-1/2 space-y-8">
          <div className='justify-center text-center'>
          
            <div className='pt-10'>
           
            <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-button-purple md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={Agent}
          alt=""
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Ready To Speak To An Agent?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Ready to get started on your quote? Give an agent a call, have your own account manager persoally help you with your quote, and get a price you love! 
          </p>
          <div className="mt-8">
          <a
          href="tel:8777141714"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r 
          from-purple-500
          to-purple-800
          via-purple-400 animate-text ease-in
          px-9 py-3 text-xl font-medium text-white  sm:w-auto"
        >
          	👉 (877) 714-1714 👈
        </a>
          </div>
        </div>
      </div>
    </div>
    </div>
           
          </div> 
        
        </div>
      </div>

    


    </div>
  )
}