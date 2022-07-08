import React from "react";
import { IconContext } from "react-icons";
import icons from "../../utils/icons";
import PropTypes from "prop-types";

const SocialNetworks = ({ data, ...props }) => {
  const socialNetworks = data.map((item) => item.platform.toLowerCase());

  return (
    data.length != 0 && (
      <IconContext.Provider value={{ color: "gray" }}>
        <div {...props}>
          <ul className="d-flex justify-content-between justify-content-md-start  list-unstyled">
            {socialNetworks.map((site) => (
              <li key={site} className="mx-2" role={site}>
                {icons[site]}
              </li>
            ))}
          </ul>
        </div>
      </IconContext.Provider>
    )
  );
};

SocialNetworks.propTypes = {
  data: PropTypes.array.isRequired,
};
export default SocialNetworks;
