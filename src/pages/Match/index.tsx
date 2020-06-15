/* eslint-disable import/no-unresolved */
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FaCheckDouble, FaCheck, FaCalendar } from 'react-icons/fa';
import 'semantic-ui-css/semantic.min.css';


import SideBarItem from '../../components/SideBarItem';
import Header from '../../components/Header';
import Body from '../../components/Body';


import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

import {
  Calendar, Infos, Text,
} from './style';


const Dashboard = () => (
  <>
    <Header />
    <SideBarItem />
    <Body>
      <Calendar>
        <div id="out">
          <div id="calendar">
            <FullCalendar
              locale="pt-br"
              defaultView="dayGridMonth"
              header={{
                left: 'today,prev,next,',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
              }}
              buttonText={{
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia',
                list: 'Agenda',
              }}
              plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
              editable
              events={[
                { title: 'Haze X Script', date: '2020-06-12T06:00:00-03:00' },
                { title: 'Haze X Script', date: '2020-06-08T06:00:00-07:00' },
                { title: 'Haze X Script', date: '2020-06-10T06:00:00-13:00' },
                { title: 'Haze X Script', date: '2020-06-12T06:00:00-04:00' },
                { title: 'Haze X Script', date: '2020-06-12T06:00:00-17:00' },
                { title: 'Haze X Script', date: '2020-06-15T06:00:00-20:00' },
                { title: 'Haze X Script', date: '2020-06-09T06:00:00-23:00' },
                { title: 'Haze X Script', date: '2020-06-12T06:00:00-00:00' },
                { title: 'Haze X Script', date: '2020-06-12T06:00:00-23:00' },
              ]}
            />
          </div>
        </div>
      </Calendar>

      <Infos>
        <div>
          <span><FaCalendar id="icon" /></span>
          <Text>
            <h1>500</h1>
            <p>Agendados</p>
          </Text>
        </div>
        <div>
          <span><FaCheck id="icon" /></span>
          <Text>
            <h1>270</h1>
            <p>Confirmados</p>
          </Text>
        </div>
        <div>
          <span><FaCheckDouble id="icon" /></span>
          <Text>
            <h1>10.000</h1>
            <p>Efetuados</p>
          </Text>
        </div>
      </Infos>
    </Body>
  </>
);
export default Dashboard;
