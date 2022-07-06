import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaTiktok, FaTwitch, FaReddit, FaGithub } from 'react-icons/fa';

const SocialNetworks = ({ list, ...props }) =>
    <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
        <div>
            <ul {...props} className="d-inline list-unstyled">
                <li className="mx-1 d-inline">
                    <FaInstagram />
                </li>
                <li className="mx-1 d-inline">
                    <FaTwitter />
                </li>
                <li className="mx-1 d-inline">
                    <FaFacebook />
                </li>
                <li className="mx-1 d-inline">
                    <FaYoutube />
                </li>
                <li className="mx-1 d-inline">
                    <FaPinterest />
                </li>
                <li className="mx-1 d-inline">
                    <FaTiktok />
                </li>
                <li className="mx-1 d-inline">
                    <FaTwitch />
                </li>
                <li className="mx-1 d-inline">
                    <FaReddit />
                </li>
                <li className="mx-1 d-inline">
                    <FaGithub />
                </li>
            </ul>
        </div>
    </IconContext.Provider>


export default SocialNetworks;