import React from 'react'
import LifeImage from '../assets/LifeImage.jpg';
import AutoImage from '../assets/AutoImage.jpg';
import HomeImage from '../assets/HomeImage.jpg';


const GetMoreQuotes = () => {

  const quotes = [
    {
      id: 'life', title: 'Get A Life Insurance Quote', href:
        "https://www.ladderlife.com/apply/quick-start?utm_source=insurtechgroups", imageUrl: LifeImage, subHead: 'Get a life insurance in minutes and buy online with no agent!'
    },
    
 {id: 'auto', title: 'Get A Auto Insurance Quote', href: 
      "https://www.insurtechgroups.com/forms/auto-insurance", imageUrl: AutoImage, subHead: 'Get a free auto insurance quote today and see how much you could save!'
    },
 
    {id: 'home', title: 'Get A Home Insurance Quote', href: 
    "https://www.insurtechgroups.com/forms/auto-insurance", imageUrl: HomeImage, subHead: 'Get a free home insurance quote today!'
  },
 
  ]

  return (
    <div className=" py-2 sm:py-2">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">We Insure What You Care About</h2>
          <p className="mt-2 text-lg leading-8 text-white">
           See what else Insurtech Groups can help you insure and see just how much you can save!
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {quotes.map((quote) => (
            <a href={quote.href} key={quote.id}>
              <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl  bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                
                  <img src={quote.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex  items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5">
                        {quote.subHead}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white ">
                    <span className="absolute inset-0 " />
                    {quote.title} 
                  </h3>
                </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GetMoreQuotes