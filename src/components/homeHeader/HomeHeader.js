import React from 'react'
import EmojiTik from '../stikersComp/EmojiTik'



export default function HomeHeader() {




    return (
        <>


          

<section className="bg-center rounded-lg bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
  <div className="px-4 justify-center items-center mx-auto max-w-screen-xl text-center py-24 lg:py-56">
<div className=' '>

 
</div>
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-400 dark:text-green-400 md:text-5xl lg:text-6xl">OlCompus</h1>
    <p className="mb-8  font-normal text-gray-300  sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a href="register" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Créer un compte
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
      <a href="/login" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
        Connexion
      </a>  
    </div>
  </div>
</section>



        </>
    )
}
