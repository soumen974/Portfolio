import React from 'react'

export default function Footer() {
  return (
    <>
    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                <a class="text-indigo-700" href="#">
                <img src="img/logo.svg" alt="" class="mx-auto mb-4" />
                </a>
                <div class="flex flex-row justify-center mb-4 -ml-4 -mr-4">
                <a href="#" class="p-4 text-indigo-700 hover:text-indigo-400">
                    <svg
                    class="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </a>
                <a href="https://twitter.com/Soumen81845556" class="p-4 text-indigo-700 hover:text-indigo-400">
                    <svg
                    class="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/soumen__.02/" class="p-4 text-indigo-700 hover:text-indigo-400">
                    <svg
                    class="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g>
                        <circle cx="12.145" cy="3.892" r="1"></circle>
                        <path
                        d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                        fill="currentColor"
                        ></path>
                        <path
                        d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"
                        fill="currentColor"
                        ></path>
                    </g>
                    </svg>
                </a>
                </div>
                </div>
                <div class="flex flex-col justify-between mb-0 text-center sm:flex-row">
                <p class="order-last mb-4 text-sm text-gray-500 sm:order-first">
                Coded by
                <a href="#myimage" class="text-white">SoumenBhunia</a>
                </p>
                <ul class="flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm">
                <li>
                    <a href="#projects" class="px-4 text-gray-500 hover:text-white">Projects</a>
                </li>
                <li>
                    <a href="#myimage" class="px-4 text-gray-500 hover:text-white">About me</a>
                </li>
                <li>
                    <a href="#techs" class="px-4 text-gray-500 hover:text-white">Techs</a>
                </li>
                <li>
                    <a href="https://www.upwork.com/freelancers/~018b00e28a0f4232b7?mp_source=share" class="px-4 text-gray-500 hover:text-white">freelancing</a>
                </li>
                </ul>
            </div>
    </>
  )
}
