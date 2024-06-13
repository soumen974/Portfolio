import React from 'react'

export default function ComsServs(Props) {
  return (
    <>
        <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
            className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
            <img src={Props.imgsrc} alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white">{Props.title}</h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
            {Props.desc}
            </p>
        </li>
    </>
  )
}
