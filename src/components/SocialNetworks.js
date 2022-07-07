import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaTiktok, FaTwitch, FaReddit, FaGithub } from 'react-icons/fa';

const SocialNetworks = ({ data, ...props }) => {

    const socialNetworks = data.map(item => item.platform.toLowerCase());

    return <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
        <div  {...props} >
            <ul className="d-flex justify-content-around list-unstyled">
                {socialNetworks.map(site => {
                    switch (site) {
                        case 'instagram': return <li><FaInstagram /></li>; 
                        case 'twitter':  return <li><FaTwitter /></li>;
                        case 'facebook': return <li><FaFacebook /></li>;
                        case 'youtube': return <li><FaYoutube /></li>;
                        case 'pinterest': return <li><FaPinterest /></li>;
                        case 'tiktok': return <li><FaTiktok /></li>;
                        case 'twitch': return <li><FaTwitch /></li>;
                        case 'reddit': return <li><FaReddit /></li>;
                        case 'github': return <li><FaGithub /></li>;
                        default:
                    }
                })}
            </ul>
        </div>
    </IconContext.Provider>
}


export default SocialNetworks;