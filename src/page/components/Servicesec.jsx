import React from 'react'
import ComsServs from "./ComsServs";
import uiux  from "../images/ui-ux-icon.svg";
import next from "../images/feature-tile-icon-02.fa91ca05.svg.svg";
import mern from "../images/mern.svg";

export default function Servicesec() {
  return (
    <>
            <div className='border-b border-gray-800 '>
                <h2 className="title sm:text-4xl md:text-5xl ">
                Build up the whole picture
                </h2>
                <p className="mb-16 mx-auto intro sm:max-w-xl">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum — semper quis lectus nulla
                at volutpat diam ut venenatis.
                </p>
                <ul className="flex flex-col flex-wrap justify-center mb-20 text-center  sm:flex-row" >
                <ComsServs 
                imgsrc={mern}
                title={"MERN dev"}
                desc={"Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat."}
                />
                 <ComsServs 
                title={"NEXT.js dev"}
                imgsrc={next}
                desc={"Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat."}
                />
                  <ComsServs 
                title={"UI/UX design"}
                imgsrc={uiux}
                desc={"Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat."}
                />
                
                </ul>
            </div>
    </>
  )
}
