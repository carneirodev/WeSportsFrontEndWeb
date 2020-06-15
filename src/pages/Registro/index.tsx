import React from 'react';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
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
        <h1>Por favor, complete os campos para criar sua conta</h1>


        <Input type="text" placeholder="nome" />
        <Input type="text" placeholder="sobrenome" />
        <Input type="text" placeholder="Usuário" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Senha" />
        <Input type="text" placeholder="Confirme a senha" />

        {' '}
        <Link to="/dashboard">
          {' '}
          <span>
            <FiLogIn />
          </span>
          <strong>Cadastrar</strong>
        </Link>
        <Link to="/">
          {' '}
          <span>
            <FiArrowLeft />
          </span>
          <strong>Voltar</strong>
        </Link>

      </main>

    </div>
  </Frame>
);

export default Home;
