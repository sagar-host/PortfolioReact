import React from 'react'
import Image from 'react-bootstrap/Image'
import "./about.css"

function about() {
  return (
    <div id='about'>
    <div className="textAbout">
    <h2>Hello. I am Sagar. </h2>
<h2 class="darkText">I'm an interdisciplinary Web Developer living in <a href="https://en.wikipedia.org/wiki/Mandi,_Himachal_Pradesh" target="_blank" class="link-3">Mandi</a>, Himachal Pardesh. Currently I work at Freelance, transforming how we experience Work From Home.</h2>

    </div>

    <a href="/about" id='secondLink' class="cta inline sec w-button">Read about my past</a>

    </div>
  )
}

export default about