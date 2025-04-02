import ThemeToggle from "../../views/Theme/ThemeToggle";
import EmojiTik from "../stikersComp/EmojiTik";
import { useState } from "react";
import { X } from "lucide-react";


export default function Navbar () {
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

          <EmojiTik/>
          <h1 className=" font-bold ml-2 tracking-tight mt-0.5 text-gray-900 dark:text-white">OlCampus</h1>
            </div>
          </a>
        </div>
        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
          <li>
            <a href="#"    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Home
            </a>
          </li>
          <li className="shrink-0">
            <a href="#"    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Best Sellers
            </a>
          </li>
          <li className="shrink-0">
            <a href="#"    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Gift Ideas
            </a>
          </li>
          <li className="shrink-0">
            <a href="#"    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Today's Deals
            </a>
          </li>
          <li className="shrink-0">
            <a href="#"    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Sell
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center lg:space-x-2">
        <div className="inline-flex items-center rounded-lg  justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
            <ThemeToggle/>
        </div>
       
       
        <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth={2} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>              
           
        </button>
        <div id="userDropdown1" className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
          <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
            <li><a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
            <li><a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
            <li><a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
            <li><a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
            <li><a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
            <li><a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
          </ul>
          <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
            <a href="#"    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </a>
          </div>
        </div>
        <button type="button" onClick={() => setIsOpen(true)}  aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
          <span className="sr-only">
            Open Menu
          </span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" />
          </svg>                
        </button>
      </div>
    </div>
    <div  className={`bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3  px-4 mt-4 ${ isOpen ? "" : "hidden"  } transform shadow-lg  transition-transform `}>
      <button onClick={() => setIsOpen(false)} className="p-2 closeMenu cursor-pointer">
          <X size={24} />
        </button>
      <ul className="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
        <li>
          <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home77</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Games</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home &amp; Garden</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}