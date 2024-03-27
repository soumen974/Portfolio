import React from 'react'

export default function ComsServs() {
  return (
    <>
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
            className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
            <img src="img/feature-tile-icon-01.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
            </p>
        </li>
    </>
  )
}
