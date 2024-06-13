import React from 'react'
import ComsTech from "./ComsTech";
import HTML from "../images/HTML-icon.svg";
import CSS from "../images/cssIcon.svg";
import js from "../images/Js.svg";
import react from "../images/react.svg";
import tailwind from "../images/tailwindcss.svg";
import mongodb from "../images/mongodb.svg";
import node from "../images/node.svg";
import java from "../images/java.svg";
import mysql from "../images/mysql.svg";
import next from "../images/next.png";










export default function Techs() {
  return (
    <>
    <div id='techs' className="mb-16">
                <h2 className="title sm:text-4xl md:text-5xl">Tech stack </h2>
                <p className="intro mx-auto sm:max-w-xl">
                This are the technologies that I have worked with and I am comfortable with.and i have a good understanding of these technologies.
                </p>
                <div
                className="flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap xl:flex-row-4"
                >
                
                <ComsTech imgserc={HTML} cardSubName={'Web Structuring'} CardName={"HTML"}/>
                <ComsTech imgserc={CSS} cardSubName={'Styling'} CardName={"CSS"}/>
                <ComsTech imgserc={js} cardSubName={'Functioning'} CardName={"Javascript"}/>
                <ComsTech imgserc={react} cardSubName={'Js framework'} CardName={"React.js"}/>
                <ComsTech imgserc={tailwind} cardSubName={'CSS framework'} CardName={"Tailwind"}/>
                <ComsTech imgserc={mongodb} cardSubName={'Database language'} CardName={"mongodb"}/>
                <ComsTech imgserc={node} cardSubName={'Backend server'} CardName={"node.js"}/>
                <ComsTech imgserc={java} cardSubName={'Backend Language'} CardName={"Java"}/>
                <ComsTech imgserc={mysql} cardSubName={'Database language'} CardName={"Mysql"}/>
                <ComsTech imgserc={next} cardSubName={'Database language'} CardName={"Mysql"}/>

                </div>
            </div>
    </>
  )
}
