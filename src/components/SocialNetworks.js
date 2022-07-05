import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaTiktok, FaTwitch, FaReddit, FaGithub } from 'react-icons/fa';

const SocialNetworks = ({ list }) =>
    <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
        <ul className="d-flex list-unstyled">
            <li className="mx-1">
                <FaInstagram />
            </li>
            <li className="mx-1">
                <FaTwitter />
            </li>
            <li className="mx-1">
                <FaFacebook />
            </li>
            <li className="mx-1">
                <FaYoutube />
            </li>
            <li className="mx-1">
                <FaPinterest />
            </li>
            <li className="mx-1">
                <FaTiktok />
            </li>
            <li className="mx-1">
                <FaTwitch />
            </li>
            <li className="mx-1">
                <FaReddit />
            </li>
            <li className="mx-1">
                <FaGithub />
            </li>
        </ul>
    </IconContext.Provider>


export default SocialNetworks;