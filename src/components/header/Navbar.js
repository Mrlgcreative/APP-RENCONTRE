import ThemeToggle from "../../views/Theme/ThemeToggle";
import EmojiTik from "../stikersComp/EmojiTik";
import { useState } from "react";
import { X } from "lucide-react";
import NotificationBell from "./NotificationBell";
import { ProfilUser } from "./ProfilUser";
import NotAuthenticate from "../notAuthenticate/NotAuthenticate";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className="fixed z-50 w-full bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#">
                  <div className="flex">

                    <EmojiTik />
                    <h1 className=" font-bold ml-2 tracking-tight mt-0.5 text-gray-900 dark:text-white">OlCampus</h1>
                  </div>
                </a>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <a href="/" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Home
                  </a>
                </li>
                <li className="shrink-0">
                  <a href="#" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Best Sellers
                  </a>
                </li>
                <li className="shrink-0">
                  <a href="#" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Gift Ideas
                  </a>
                </li>
                <li className="shrink-0">
                  <a href="#" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Today's Deals
                  </a>
                </li>
                <li className="shrink-0">
                <NotAuthenticate />
                </li>
              </ul>
            </div>
            <div className="flex items-center lg:space-x-2">
              <div className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">

                <NotificationBell />
              </div>
              <div className="inline-flex items-center rounded-lg  justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                <ThemeToggle />
              </div>




              <div className="inline-flex items-center rounded-lg  justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">

                <ProfilUser />
               
              </div>

              <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">

              </button>
              <div id="userDropdown1" className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
                  <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
                  <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
                  <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
                  <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
                  <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
                </ul>
                <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </a>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(true)} aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
                <span className="sr-only">
                  Open Menu
                </span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`bg-gray-50 dark:bg-gray-800 dark:border-gray-600 rounded border border-green-200  py-3  px-4 mt-4 ${isOpen ? "" : "hidden"} transform shadow-lg  transition-transform `}>
            <button onClick={() => setIsOpen(false)} className="p-2 closeMenu cursor-pointer">
              <X size={24} />
            </button>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="/" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-green-200 dark:hover:bg-green-600 group">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                  </svg>


                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">.</span>
                </a>
              </li>
              {/* <li>
    <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-green-200 dark:hover:bg-green-600 group">
      
      <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
    </a>
  </li> */}
              <li>
                <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-green-200 dark:hover:bg-green-600 group">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>


                  <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                </a>
              </li>
              <li>
                <a href="/login" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-green-200 dark:hover:bg-green-600 group">
                  <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span className="flex-1 ms-3 ml-4 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a href="/register" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-green-200 dark:hover:bg-green-600 group">
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}