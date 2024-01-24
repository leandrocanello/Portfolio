import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/leandro.canello_/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/leandro-canelllo-310435262/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/leandrocanello">
                <GitHubIcon/>
            </a>
        </div>
    )
}