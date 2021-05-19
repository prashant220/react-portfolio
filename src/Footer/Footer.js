import React from 'react'
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function Footer() {
    return (
        <div className="footer-content">
            <div className="footer">
              <div className="design">
                  <h3>Deigned and Developed by Prashant</h3>
              </div>
              <div classname="copy">
                  <p>Copyright © 2021 PP</p>
              </div>
              <div classname="social">
              <ul className="icon">
                <li className="github-footer"><GitHubIcon/></li>
                <li className="facebook"><FacebookIcon/></li>
                <li className="instagram"><InstagramIcon/></li>
                <li className="twitter"><TwitterIcon/></li>
            </ul>
              </div>
            </div>
           
        </div>
    )
}

export default Footer
