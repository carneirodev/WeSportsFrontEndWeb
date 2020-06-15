import styled from 'styled-components';

export const Calendar = styled.div`
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    border-style: solid;
    border-width: 5px;
    margin-left:30px !important;
    div{
        max-width: 100% !important;
    }
    #out{
        margin:5px;
    }
    /* override day number color and size */
    .fc-day-number {
        font-size: 1.5em;
        color: #FF6565;
    }

      /* override day title color and size */
      .fc-day-header {
        font-size: 1.5em;
        color: #2F2E50;
      }
     /*Muda a cor do atual dia*/
      .fc-today {
        background:#989bad !important;
        border: none !important;
        border-top: 1px solid #ddd !important;
        font-weight: bold;
      }
      /*Muda a cor do balao de compromisso*/
    .fc-content{
        background:#2F2E50 !important;
    }
      /*Muda a cor da bordar do balao de compromisso*/
    .fc-event{
        background:#2F2E50 !important;
        border-color:#2F2E50 !important;
    }
     /*Muda a cor dos botões*/
     .fc-button-group{
          button{
            color:#4D4F5C !important;
            background-color:transparent !important;
            border-color: #222b2f !important;
     }
    }

    #calendar {
        width: 80%;
        margin: 0 auto;
    }
    @media only screen and (min-width: 1920px) {
        div{
            max-width: 900px;
        }
        #calendar {
            width: 900px;
            margin: 0 auto;
        }
    }
    @media only screen and (max-width: 1000px) {
        flex-direction: row;
        margin:0!important;
        div{
            flex-direction: row;
        }
        #calendar {
            width: 100%;
        }

    }
`;

export const Infos = styled.div`
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items:center;

    div{
    width: 339px;
    height: 99px;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: var(--sidebar-item-height);
    transition: 0.2s ease;
    margin: 20px;
    text-decoration: none;
    background-color:#2F2E50;

    }
    span{
        padding:10px;
        margin:20px;
        display:flex;
        background-color:#fff;
        border-style: solid;
        border-radius: 50%;
        border-color: #FF6565;
        width:80px;
        height:80px;

    }
    #icon{
        color:#FF6565;
        width:40px;
        height:40px;
        margin:auto;
    }
    @media only screen and (max-width: 1000px) {
        div{
            margin: 2px;
            width: 200px;
            height: 99px;
        }
        span{
            margin: 2px;
            width: 50px;
            height: 50px;
        }
        #icon{
            color:#FF6565;
            width:20px;
            height:20px;
            margin:auto;
        }
    }

`;

export const Text = styled.div`
    flex-direction: column;
    h1{
        color: #FF6565;
        text-align: left;
    }
    p{
        color: #A5A4BF;
        text-align: left;

    }
`;
