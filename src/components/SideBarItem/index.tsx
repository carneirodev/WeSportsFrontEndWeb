/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUsers, FaReceipt } from 'react-icons/fa';
import {
  IoMdPodium, IoMdTrophy, IoMdCalendar, IoMdLogOut,
} from 'react-icons/io';
import { Menu, Title, Line } from './style';

const SideBar = () => (
  <Menu>

    <nav className="sideBarContainer">
    <Title className="sideBarTitle">
    <h1 id="logo">WESPORTS</h1>
    </Title>
      <ul className="sideBarList">
            <li className="itemContainer">

                <Link className="itemLink" to="/match">
                <Line />
                    <div>
                        <span id="activated">
                         <IoMdCalendar size={25} />
                        </span>
                    </div>

                    <div className="itemText">
                        <span>Match de treinos</span>
                    </div>
                </Link>
            </li>

            <li className="itemContainer">
                <Link className="itemLink" to="/dashboard">
                    <div>
                        <span>
                        <MdDashboard size={22} />
                        </span>
                    </div>

                    <div className="itemText">
                        <span>Dashboard</span>
                    </div>
                </Link>
            </li>

            <li className="itemContainer">
                <Link className="itemLink" to="/ranking">
                    <div>
                        <span>
                        <IoMdPodium size={22} />
                        </span>
                    </div>

                    <div className="itemText">
                        <span>Ranking</span>
                    </div>
                </Link>
            </li>

            <li className="itemContainer">
                <Link className="itemLink" to="/torneios">
                    <div>
                        <span>
                        <IoMdTrophy size={22} />
                        </span>
                    </div>

                    <div className="itemText">
                        <span>Torneios</span>
                    </div>
                </Link>
            </li>

            <li className="itemContainer">
                <Link className="itemLink" to="/historico">
                    <div>
                        <span>
                        <FaReceipt size={22} />
                        </span>
                    </div>
                    <div className="itemText">
                        <span>Histórico</span>
                    </div>
                </Link>
            </li>

            <li className="itemContainer">
                <Link className="itemLink" to="/equipes">
                    <div>
                        <span>
                        <FaUsers size={22} />
                        </span>
                    </div>
                    <div className="itemText">
                        <span>Equipes</span>
                    </div>
                </Link>
            </li>
            <li className="itemContainer">
                <Link className="itemLink" to="/">
                    <div>
                        <span>
                        <IoMdLogOut size={22} />
                        </span>
                    </div>
                    <div className="itemText">
                        <span>Sair</span>
                    </div>
                </Link>
            </li>
      </ul>

    </nav>

  </Menu>
);
export default SideBar;
