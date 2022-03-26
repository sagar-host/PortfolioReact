import React from 'react'
import "./Footer.css";
import 'font-awesome/css/font-awesome.min.css';

function footer() {
  return (
   
  <footer id='mainFooter'>
<div className="footer-menu">
 <ul className="f-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/blog">Blog</a></li>
 </ul>
</div>

<div className="icons">
<ul className="socials">
<li><a href="https://www.github.com/sagar-host"><i className="fa fa-github"></i></a></li>
<li><a href="/"><i className="fa fa-twitter"></i></a></li>
<li><a href="/"><i className="fa fa-google-plus"></i></a></li>
<li><a href="/"><i className="fa fa-youtube"></i></a></li>
<li><a href="https://www.linkedin.com/in/sagar-208723153"><i className="fa fa-linkedin-square"></i></a></li>
</ul>
</div>

<div className="footer-bottom">
<h3>Sagar.Bleu</h3>
<p>copyright &copy;2021 <a href="/">Sagar</a>  </p>
</div>



</footer>

 


  )
}

export default footer