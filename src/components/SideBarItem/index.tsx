/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUsers, FaReceipt } from 'react-icons/fa';
import {
  IoMdPodium, IoMdTrophy, IoMdCalendar, IoMdLogOut,
} from 'react-icons/io';
import { Menu } from './style';

const SideBar = () => (
  <Menu>
    <nav className="sideBarContainer">
      <ul className="sideBarList">
            <li id="logo" className="itemContainer">
            <div className="itemText">
                <h1>WeSports</h1>
            </div>
            </li>
            <li className="itemContainer">
                <Link className="itemLink" to="/match">
                    <div>
                        <span>
                         <IoMdCalendar />
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
                        <MdDashboard />
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
                        <IoMdPodium />
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
                        <IoMdTrophy />
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
                        <FaReceipt />
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
                        <FaUsers />
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
                        <IoMdLogOut />
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
