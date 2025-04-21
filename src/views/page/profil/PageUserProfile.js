import React from 'react'
import NotificationBell from "../../../components/header/NotificationBell";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function PageUserProfile() {
  return (
    <>
      <div className="max-w-screen-xl  px-4 mx-auto 2xl:px-0 py-4">
        <div className="w-full max-w-sm m-auto  shadow-sm  dark:border-gray-900">
          <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              
            </button>
            {/* Dropdown menu */}
            <Dropdown className="dark:bg-gray-900 inline-block text-gray-500 text-6xl dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" label="" dismissOnClick={false}>
              
      
    
      <div id="dropdown" className="z-10  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-900">
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
    </Dropdown>
            
          </div>
          <div className="flex flex-col items-center pb-10">
          <div className="flex justify-center items-center">
                        <div className="relative flex-shrink-0">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            className="w-20 h-20 cursor-pointer rounded-full border-2 border-green-200 dark:border-green-800 hover:border-green-500 transition-all duration-100"
                            alt="Profil de "
                          />
                          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse" />
                        </div>

                      </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="flex mt-4 md:mt-6">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Add friend</a>
              <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Editer</a>
            </div>
          </div>
        
        </div>



        <div className=" text-white font-sans">

          
    
    
    
    <div className="flex ml-3 overflow-x-auto px-4 gap-1 py-2">
      <div className="w-20 h-10 rounded border border-white flex items-center justify-center text-xs">Anime</div>
      <div className="w-20 h-10 rounded border border-white flex items-center justify-center text-xs">23.Ota...</div>
      <div className="w-20 h-10 rounded border border-white flex items-center justify-center text-xs">lettre...</div>
      <div className="w-20 h-10 rounded border border-white flex items-center justify-center text-xs">sab. f</div>
     
    </div>
   
    <div className="flex justify-around  border-gray-800 py-2 text-center text-sm">
      <div className="border mb-3 mt-2  rounded-lg"><svg className="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
</svg>



</div>
      {/* <div><span className="font-bold">62</span><br />publications</div> */}
      {/* <div><span className="font-bold">198</span><br />followers</div>
      <div><NotificationBell /></div> */}
    </div>
    
    {/* <div className="flex justify-around py-2 border-b border-gray-800 text-gray-400">
      <button className="text-white">▦</button>
      <button>🎞️</button>
      <button>🔖</button>
      <button>👤</button>
    </div> */}
   
    


<div className="grid grid-cols-3 md:grid-cols-3 gap-0.5">
  <div>
    <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"  />
  </div>
  <div>
    <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"  />
  </div>
  <div>
    <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"  />
  </div>
  <div>
    <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"  />
  </div>
  
</div>



  </div>
      </div>
   
      <br/>


    </>
  )
}
