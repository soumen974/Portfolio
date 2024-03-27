import React from 'react'
import ComsTech from "./ComsTech";

export default function Techs() {
  return (
    <>
    <div className="mb-16">
                <h2 className="title sm:text-4xl md:text-5xl">Customer testimonials</h2>
                <p className="intro mx-auto sm:max-w-xl">
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
                quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
                </p>
                <div
                className="flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap"
                >
                
                <ComsTech/>
                <ComsTech/>
                <ComsTech/>
                <ComsTech/>
                <ComsTech/>
                
                </div>
            </div>
    </>
  )
}
