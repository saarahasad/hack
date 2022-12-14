import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "30px" }}>
    <Link route="/">
        <a className="item">Securing Data in AI</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Projects</a>
        </Link>

        <Link route="/competitions/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
