import React from 'react'
import ComsServs from "./ComsServs";
export default function Servicesec() {
  return (
    <>
            <div>
                <h2 className="title sm:text-4xl md:text-5xl">
                Build up the whole picture
                </h2>
                <p className="mb-16 mx-auto intro sm:max-w-xl">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum — semper quis lectus nulla
                at volutpat diam ut venenatis.
                </p>
                <ul className="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row" >
                <ComsServs/>
                <ComsServs/>
                <ComsServs/>
                </ul>
            </div>
    </>
  )
}
