import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './HeaderNav.scss';

const logo = require('../../assets/weSportsLogo.png');

const Header = () => (
  <>
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Link to="/match">
          <Image src={logo} size="tiny" />
        </Link>
      </Menu.Item>
      <Menu.Menu className="nav-container">
        {/* TODO */}
      </Menu.Menu>
      <Menu.Menu position="right">

        <Menu.Item>
          <Icon className="header-icon" name="chat" size="large" />
        </Menu.Item>
        <Menu.Item>
          <Icon className="header-icon" name="alarm" size="large" />
        </Menu.Item>
        <Menu.Item name="avatar">
          <Image
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFcr7g0jsa-4Q/profile-displayphoto-shrink_800_800/0?e=1597881600&v=beta&t=LyU5oR0hGP-gVnJIMymO4ydOG5jVcxIl3FiXGZG0Tyc"
            avatar
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </>
);

export default Header;
