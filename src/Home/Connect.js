import React from 'react';
import './Connect.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';



function Connect() {
    return (
        <div className="connect">
            <h1>Find me on</h1>
            <p>Feel Free To <span className="purple"><b> Connect</b></span></p>
            <ul className="icon">
                <li className="github"><GitHubIcon/></li>
                <li className="facebook"><FacebookIcon/></li>
                <li className="instagram"><InstagramIcon/></li>
                <li className="twitter"><TwitterIcon/></li>
            </ul>

        </div>
    )
}

export default Connect
