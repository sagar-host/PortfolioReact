import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Header/header"
import Middle from "../Middle/middle"
import About from "../About/about"
import Project from "../ProjectSection/Project"
import Footer from "../Footer.js/footer"



function home() {
  return (
    <div className="App">
       <Header />
        <About />
       <Middle />
       <Project />
        <Footer />



        </div>
  )
}

export default home