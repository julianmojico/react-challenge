import React from "react";
import { IconContext } from "react-icons";
import icons from "../utils/icons";
import PropTypes from "prop-types";

const SocialNetworks = ({ data, ...props }) => {
  const socialNetworks = data.map((item) => item.platform.toLowerCase());

  return (
    <IconContext.Provider
      value={{ color: "gray", className: "global-class-name" }}
    >
      <div {...props}>
        <ul className="d-flex justify-content-between justify-content-md-start  list-unstyled">
          {socialNetworks.map((site) => (
            <li key={site} className="mx-2">
              {icons[site]}
            </li>
          ))}
        </ul>
      </div>
    </IconContext.Provider>
  );
};

SocialNetworks.propTypes = {
  data: PropTypes.array,
};
export default SocialNetworks;
