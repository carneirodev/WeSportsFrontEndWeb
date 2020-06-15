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
    background-color:#A5A4BF;
    }

    .itemLink:hover {
        background-color: #FF6565 ;
    }

    .itemText {
        display: none;
    }

    .itemText h1 {
    font-size:32px;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    }

  .itemContainer {
    flex: 1;
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
      .itemText {
        display: block;
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
