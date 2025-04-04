import { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import 'swiper/css';

export default function SectionAllUsers() {
  
  const [openLikeModal, setOpenLikeModal] = useState(false);

  const umoji = [
    "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif",
    "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
    "https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif",

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % umoji.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  const url = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
  const Films = [
   
    {
      id: 1,
      title: 'The women king',
      videoUrl: `${url}`,
      description: '',
    },
    {
      id: 2,
      title: 'MARVEL Captaine America',
      videoUrl:
        `${url}`,
      description: '',
    },
    {
      id: 3,
      title: 'Kraven Marvel',
      videoUrl:
        `${url}`,
      description: `l'homme lion`,
    },
    {
      id: 4,
      title: 'The women king',
      videoUrl: `${url}`,
      description: '',
    },
    {
      id: 5,
      title: 'Everything Everywhere',
      videoUrl: `${url}`,
      description: '',
    },
    {
      id: 6,
      title: 'Back in Action',
      videoUrl: `${url}`,
      description: '2025',
    },
    {
      id: 7,
      title: 'Bad Boy Ride Die',
      videoUrl: `${url}`,
      description: '2024',
    },
    {
      id: 8,
      title: 'Constantine',
      videoUrl: `${url}`,
      description: '2005',
    },
    {
      id: 9,
      title: 'Red One',
      videoUrl: `${url}`,
      description: '2024',
    },
    {
      id: 10,
      title: 'Rush Hour 3',
      videoUrl: `${url}`,
      description: '2007',
    },
    {
      id: 12,
      title: 'Sonic 3',
      videoUrl: `${url}`,
      description: '2024',
    },
    {
      id: 13,
      title: 'Star Trek Section 31',
      videoUrl: `${url}`,
      description: '2025',
    },
    {
      id: 14,
      title: 'Flic Haut Vol',
      videoUrl: `${url}`,
      description: '',
    },
    {
      id: 15,
      title: 'Jujutsu kaisen',
      videoUrl: `${url}`,
      description: 'MANGA FILM',
    },
    {
      id: 16,
      title: 'Pirates Des Caraibes',
      videoUrl: `${url}`,
      description: 'Magnifique',
    },
    {
      id: 17,
      title: 'Project X-Traction ',
      videoUrl: `${url}`,
      description: '',
    },
  ]

  return (
    <>
      <section className="bg-white mt-10 pb-3 pt-3 mb-5 border  rounded dark:border-green-800 border-green-500 dark:bg-gray-900">


        <div className="py-8 h-[36rem] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-green-200
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 p-6 overflow-y-auto  px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">



          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">OlCampus</h2>
            <div className=" flex items-center justify-center ">

              <img src={umoji[index]} alt={`Image ${index + 1}`} width={130} height={130} />

            </div>


            <p className=" text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Bienvenue sur OlC scroller dans cette section et trouve vos nouveau companions ou peut-etre votre </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {Films.map(( Films, index) => (

              <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Films.videoUrl} alt="Bonnie Avatar" />
                </a>
                <div className="p-5">
                  {/* ///////////// */}
                  <div className="flex items-center">
                    <div className="relative flex-shrink-0">
                      <img
                        src={Films.videoUrl}
                        className="w-11 h-11 cursor-pointer rounded-full border-2 border-green-200 dark:border-green-800 hover:border-green-500 transition-all duration-300"
                        alt="Profil de "
                      />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse" />
                    </div>
                    <div className="block ml-2">
                      <p className=" text-xs ml-3 dark:text-white">
                        {Films.title}
                      </p>
                      <p className=" ml-3 text-gray-500 ">{Films.description} </p>
                    </div>
                  </div>
                  {/* /////////// */}
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Bonnie Green</a>
                  </h3>

                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li className="">

                      <button onClick={() => setOpenLikeModal(true)} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <div className=" flex justify-center  text-center ">


                          <svg className={`w-[40px] h-[40px] animate-pulse text-red-600 dark:text-red-600 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                          </svg>

                          <span className="mt-2">0</span>

                        </div>
                      </button>
                    </li>
                    {/* <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
              </a>
            </li> */}

                  </ul>

                </div>
              </div>
            ))}
           

            <Modal className="  customM " show={openLikeModal} size="md" onClose={() => setOpenLikeModal(false)} popup>
              
              <ModalHeader />

              <ModalBody className="dark:bg-gray-800">
                <div className="text-center   ">
                  <div className=" flex items-center justify-center ">

                    <img src={umoji[index]} alt={`Image ${index + 1}`} width={130} height={130} />

                  </div>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <div className="items-center mb-5 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                
                <div className="p-5">
                  {/* ///////////// */}
                  <div className="flex justify-center items-center">
                    <div className="relative flex-shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        className="w-11 h-11 cursor-pointer rounded-full border-2 border-green-200 dark:border-green-800 hover:border-green-500 transition-all duration-300"
                        alt="Profil de "
                      />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse" />
                    </div>
                    
                  </div>
                  {/* /////////// */}
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Bonnie Green</a>
                  </h3>

                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li >

                      
                    </li>
                    {/* <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
              </a>
            </li> */}

                  </ul>

                </div>
              </div>
                  
                  <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={() => setOpenLikeModal(false)}>
                      {"Yes"}
                    </Button>
                    <Button color="gray" onClick={() => setOpenLikeModal(false)}>
                      No, cancel
                    </Button>
                    <Button color="gray" onClick={() => setOpenLikeModal(false)}>
                      No, cancel
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </Modal>




          </div>
        </div>
      </section>

    </>
  )
}