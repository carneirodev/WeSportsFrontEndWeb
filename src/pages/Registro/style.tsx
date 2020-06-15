import styled from 'styled-components';

export const Frame = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

    .content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    }


   .imagem {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
    background: url('../../assets/homeLateral.png') 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
  }

   .logo {
       width:100%;
       height:auto;
    max-width: 407px;
    max-height: 134px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;

  }

   .content header {
    margin: 48px 0 0;
  }

   .content main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
   .content div {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

   .content main img {
    margin-top: 5%;
  }
   .content main h1 {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 21px;

  }

   .content main p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

   .content main a {
    width: 100%;
    max-width: 200px;
    height: 5%;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-top: 40px;
  }

   .content main span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 10%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

   .content main span{
    color: #FFF;
    width: 20px;
    height: 20px;

  }

   .content main strong {
    flex: 1;
    text-align: center;
    color: #FFF;
  }

   .content main a:hover {
    background: #F29220;
  }



  @media(max-width: 1000px) {
     .content div {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
     .logo {
      width: 203px;
      height: 60px;
      margin: 0 auto;
      padding: 0 30px;
      display: flex;
      flex-direction: column;

    }
     .content {
      align-items: center;
      text-align: center;
    }

     .content header {
      margin: 48px auto 0;
    }

     .content main {
      align-items: center;
    }


     .content main h1 {
      font-size: 15px;
    }

     .content main p {
      font-size: 24px;
    }
  }


`;
