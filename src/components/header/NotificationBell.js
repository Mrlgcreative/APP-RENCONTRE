import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";

export default function NotificationBell() {
  const [notifications, setNotifications] = useState(3);
  const [animate, setAnimate] = useState(false);
  const [openNotifModal, setopenNotifModal] = useState(false);

  useEffect(() => {
    if (notifications > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
  }, [notifications]);

  return (
    <>

      <div className="relative">
        <button
          onClick={() => setopenNotifModal(true)}
          className={`relative p-2 text-white
          transition-transform ${animate ? "animate-shake" : ""}`}
        >
          <Bell className="w-5 h-5 text-gray-900 dark:text-gray-100" />

          <span className="absolute top-0 right-0 flex p-1 items-center justify-center 
            rounded-full bg-green-900 text-white text-xs font-bold animate-bounce">
            90
          </span>

        </button>
      </div>

      <Modal className="   " show={openNotifModal} size="md" onClose={() => setopenNotifModal(false)} popup>

        <ModalHeader />

        <ModalBody className="dark:bg-gray-800 h-3/4">


          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-green-900 dark:text-green-400">Notifications OLC</h5>
              {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
              </a> */}
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 border-t sm:py-4">
                  <div className="flex items-center">
                  <div className="relative flex-shrink-0">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        className="w-11 h-11 cursor-pointer rounded-full border-2 border-green-200 dark:border-green-800 hover:border-green-500 transition-all duration-300"
                        alt="Profil de "
                      />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Naruto vous as liker
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white">
                      <a href="">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z" />
                        </svg>
                      </a>
                      <a href="">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z" />
                        </svg>
                      </a>
                      <a href="">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z" />
                        </svg>
                      </a>
                      
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>


        </ModalBody>
      </Modal>
    </>
  );
}
