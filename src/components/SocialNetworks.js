import React from "react";
import { IconContext } from "react-icons";
import icons from "../utils/icons";

const SocialNetworks = ({ data, ...props }) => {
  const socialNetworks = data.map((item) => item.platform.toLowerCase());

  return (
    <IconContext.Provider
      value={{ color: "gray", className: "global-class-name" }}
    >
      <div {...props}>
        <ul className="d-flex justify-content-between justify-content-md-start  list-unstyled">
          {socialNetworks.map((site) => (
            <li className="mx-2">{icons[site]}</li>
          ))}
        </ul>
      </div>
    </IconContext.Provider>
  );
};

export default SocialNetworks;
