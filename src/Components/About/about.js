import React from 'react'
import {Link} from 'react-router-dom'

import "./about.css"


function about() {
  return (
    <div id='about'>
    <div className="textAbout">
    <h2>Hello. I am Mr.bleu. </h2>
<h2 className="darkText">I'm an interdisciplinary Estate Agent living in <a href="https://maps.app.goo.gl/twXwBnHJ4uQkCDi68" rel="noopener noreferrer" className="link-3">Delhi</a>, Delhi. Currently I am working at different projects, transforming how we experience the trustworthy environment.</h2>

    </div>

    <Link to="/resume" id='secondLink' className="cta inline sec w-button">Read about my story</Link>

    </div>
  )
}

export default about
