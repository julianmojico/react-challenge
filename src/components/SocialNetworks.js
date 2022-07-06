import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaTiktok, FaTwitch, FaReddit, FaGithub } from 'react-icons/fa';

const SocialNetworks = ({ list, ...props }) =>
    <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
        <div  {...props} >
            <ul className="d-flex justify-content-around list-unstyled">
                <li className="">
                    <FaInstagram />
                </li>
                <li className="">
                    <FaTwitter />
                </li>
                <li className="">
                    <FaFacebook />
                </li>
                <li className="">
                    <FaYoutube />
                </li>
                <li className="">
                    <FaPinterest />
                </li>
                <li className="">
                    <FaTiktok />
                </li>
                <li className="">
                    <FaTwitch />
                </li>
                <li className="">
                    <FaReddit />
                </li>
                <li className="">
                    <FaGithub />
                </li>
            </ul>
        </div>
    </IconContext.Provider>


export default SocialNetworks;