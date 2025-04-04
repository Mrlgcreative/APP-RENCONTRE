import React from 'react'

export default function NotAuthenticate() {
    return (
        <>
        <div className=' flex gap-2'>
            <div className="  rounded hover:bg-green-400 dark:hover:bg-green-700 dark:hover:text-white justify-center items-center h-7  flex">
                <div>
                        <svg className="w-4 h-4 ml-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                        </svg>

                </div>
                <div>
                    <a href="/login" className="block px-4 -ml-2 py-2 text-sm text-gray-700 dark:text-gray-200 ">Sign In</a>
                </div>
            </div>
            <div className=" border rounded hover:bg-green-400 dark:hover:bg-green-700 dark:hover:text-white justify-center items-center h-7  flex">
                <div>
                        

                </div>
                <div>
                    <a href="/register" className="block px-4  py-2 text-sm text-gray-700 dark:text-gray-200 ">Sign Up</a>
                </div>
            </div>
            
            </div>

        </>
    )
}
