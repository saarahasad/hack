import React from "react";
import { Menu,Header,Image } from "semantic-ui-react";
import { Link } from "../routes";

const pageHeader = () => {
  return (
    // const HeaderExampleImage = () => (
  <Header as='h1' textAlign='left' style={{paddingTop:'10px',paddingLeft:'10px'}}>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> BLOCKAI

 

{/* // export default HeaderExampleImage */}
    {/* <Menu style={{ marginTop: "30px" }}>
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
    </Menu> */}
    </Header>
  );
};

export default pageHeader;
