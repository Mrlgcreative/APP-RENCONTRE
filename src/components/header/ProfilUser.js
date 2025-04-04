
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

export function ProfilUser() {
    return (


        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                className="p-1 mt-5 dropdownUser border-none  dark:bg-gray-800"
                inline
                label={
                    <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth={2} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                }
            >


                <div className="w-full  ">

                    <div className="z-50  text-base list-none " id="user-dropdown">
                        <div className="px-4 py-3">
                            <Avatar className="w-11 h-11  cursor-pointer rounded-full border-2 border-green-200 dark:border-green-800 hover:border-green-500 transition-all duration-300" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            <span className="block ml-1 text-sm text-gray-900 dark:text-white">Saber</span>
                            <span className="block ml-1 text-sm  text-gray-500 truncate dark:text-gray-400">sabyav@gmail.com</span>
                        </div>

                        <ul className="py-2 border-t" aria-labelledby="user-menu-button">


                            <li>
                                <div className=" hover:bg-green-100 dark:hover:bg-green-700  dark:hover:text-white justify-center items-center  flex">
                                    <div>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 ">Sign out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>



                </div>



            </Dropdown>

        </div>


    );
}
