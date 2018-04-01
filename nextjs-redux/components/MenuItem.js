import React from "react";
import Link from "next/link";
import IconStar from "react-icons/lib/fa/star";

const style = {
  link: {
    padding: 5,
    display: "block"
  }
};

const MenuItem = ({ id, name, captured }) => (
  <li>
    <Link href={`/pokemon?id=${id}`}>
      <a style={style.link}>
        {name}
        {captured && <IconStar />}
      </a>
    </Link>
  </li>
);

export default MenuItem;
