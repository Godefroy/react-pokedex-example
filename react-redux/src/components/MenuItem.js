import React from "react";
import { NavLink } from "react-router-dom";
import IconStar from "react-icons/lib/fa/star";
import PropTypes from "prop-types";

const style = {
  link: {
    padding: 5,
    display: "block"
  },
  activeLink: {
    backgroundColor: "#d4c8e9"
  }
};

const MenuItem = ({ id, name, captured }) => (
  <li>
    <NavLink
      to={`/pokemons/${id}`}
      style={style.link}
      activeStyle={style.activeLink}
    >
      {name}
      {captured && <IconStar />}
    </NavLink>
  </li>
);

MenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  captured: PropTypes.bool
};

export default MenuItem;
