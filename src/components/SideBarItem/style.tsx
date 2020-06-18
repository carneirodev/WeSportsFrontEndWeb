import styled from 'styled-components';

export const Menu = styled.div`
.sideBarContainer {
    background-color: #42485D;
    width: 100vw;
    position: fixed;
    z-index: var(--sidebar-z-index);
    box-shadow: var(--sidebar-shadow-mobile);
    bottom:0;

  }

    span{
    color:#FFFFFF;

    }


  .sideBarList {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .itemLink {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: var(--sidebar-item-height);
    transition: 0.2s ease;
    margin: 4px;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    background-color:#A5A4B2;
    }

    .itemLink Line{
        justify-content: none;
    }
    .itemText {
        display: none;
    }
    .itemContainer {
    flex: 1;
    }
   #activated{
     color: #FF6565;
    }

  @media only screen and (min-width: 1200px) {

    ul li:last-child {
        margin-top:25px;
     }
    .sideBarContainer {
      width: var(--sidebar-width);
      height: 100vh;
      box-shadow: var(--sidebar-shadow-desktop);
      transition: 300ms ease;
    }
    .sideBarContainer:hover {
      width: 250px;
        .itemLink{
            background: #0000001A 0% 0% no-repeat padding-box;
            opacity: 1;

        }
        .itemLink:hover {
            background-color: #AD5D5B ;
        }
      .itemText {
        display: block;

      }
      .sideBarTitle {
        display: flex;
      }
    }

    .sideBarList {
        display: flex;
        flex-direction: column;
        margin-top: var(--spacing-medium);
    }
    .itemTextHover {
        display: block;
        width: 50%;
      }

  }

  @media only screen and (max-width: 1000px) {
      #logo{
          display:none;
      }
  }

`;

export const Title = styled.div`
    background-color: #0000001A;
    display: none;
    height: 4em;
    transition: 0.2s ease;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
  flex:1;
    background-color: #0000001A;
    #logo{
        color: #fff;

    }

    @media only screen and (max-width: 1000px) {
        #logo{
            display:none;
        }
    }
`;

export const Line = styled.div`
width:10px;
height: var(--sidebar-item-height);
margin:-25px;
padding:0px;
justify-content: start !important;
background-color: #FF6565;
`;
