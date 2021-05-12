import React from 'react'
import './BottomFooter.css'

function BottomFooter() {
  return (
    <>
    <div className="footer-container">
    <div className="footer-wrapper">
      <div className="connected">

      <h4 className="header">Stay Connected</h4>
        <p className="textFoot">Join the community</p>
        <div className="mail-sign">
  
  <input className='emailTag' type="text" id="lname" name="lname" placeholder=' Your email...'/>
  <input className='submitBtn' type="submit" value="Submit"/>
      </div>
        </div>
       
        <div className="Committed">

<h4 className="header">Commit To Eating Well</h4>
  <p className="textFoot">In a culture where GMO is alive, eating and staying healthy all go into having a strong community. It goes into a balanced schedule</p>
  </div>


      </div>

      <div className="social-tag">
      <i class="fab fa-facebook-square fa-3x"></i>
      <i class="fab fa-twitter-square fa-3x"></i>
      <i class="fab fa-linkedin fa-3x"></i>
      <i class="fab fa-youtube-square fa-3x"></i>
      </div>

      <div className="policy">
        <div className="border-scen">
        <a className='footEnd' href='#'>Privacy Policy</a>
        </div>
        <div className="border-scen">
        <p className="footEnd">|</p>

        </div>
        <div className="border-scen">
        <a className='footEnd' href='#'>Sitemap</a>
        
        </div>
        <div className="border-scen">
        <p className="footEnd">|</p>

        </div>
        <div className="border-scen">
        <a className='footEnd footEndNone' href='#'>Copyright 2021 Dat Dv LyFE</a>
        </div>
       
     
        

      </div>
    </div>
  
    </>
  )
}

export default BottomFooter
