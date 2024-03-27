import React from 'react'
import { useState } from 'react';
export default function Drawer() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
  return (
    <>
    {/* <!-- drawer component --> */}
    <div   className={`${drawerOpen ? '   translate-y-[2rem]  ' : ' translate-y-[48rem]'} transition ease-in-out delay-150    fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800   left-0 right-0  `}>
        <div onClick={toggleDrawer} className="p-4 cursor-pointer hover:bg-gray-50   dark:hover:bg-gray-700" >
            <span className="absolute w-8 h-1 -translate-x-1/2 bg rounded-lg top-3 left-1/2 dark:bg-gray-500"></span>
            <h5 id="drawer-swipe-label" className="inline-flex items-center text-base text-indigo-700  dark:text-gray-400 font-medium"><svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"/>
            </svg>
            Check me
            </h5>
        </div>

        <div className={`pb-[41rem]  grid grid-cols-3 gap-4 p-4 lg:grid-cols-4`}>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                    <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                </div>
                <div className="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
            </div>
           
        </div>
    </div>
</>
  )
}
