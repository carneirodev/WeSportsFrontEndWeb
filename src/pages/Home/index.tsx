import React from 'react';
import { FiLogIn, FiFilePlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Frame } from './style';
import SideImage from '../../components/SideImage';
import Input from '../../components/Input';
import logo from '../../assets/weSportsLogo.png';

const Home = () => (
  <Frame>
    <SideImage />
    <div className="content">
      <main>

        <img
          src={logo}
          alt="WeSports"
          className="logo"
        />
        <h1>Seja bem vindo, faça o login com sua conta</h1>
        <Input type="text" placeholder="login" />
        <Input type="text" placeholder="senha" />
        <div className="button">
          {' '}
          <Link to="/match">
            {' '}
            <span>
              <FiLogIn />
            </span>
            <strong>Login</strong>
          </Link>
          <Link to="/register">
            <span>
              <FiFilePlus />
            </span>
            {' '}
            <strong>Cadastrar</strong>
          </Link>
        </div>
      </main>
    </div>
  </Frame>
);

export default Home;
