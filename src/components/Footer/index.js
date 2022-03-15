import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

function Footer(){
    return (
        <footer>
         <h3>
            © PW Foote</h3>
         <div class="media">
             <ul>
             <li> <a href="https://github.com/pwfoote" target="blank"><AiFillGithub/></a></li>
                 <li><a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit" target="blank"> <BsLinkedin/> </a></li>

             </ul>

         </div>
     </footer>
    )
}

export default Footer; 