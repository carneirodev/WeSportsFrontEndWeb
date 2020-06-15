import styled from 'styled-components';

export const Body = styled.div`
    margin-left: var(--sidebar-width);
    margin-top:55px;
    height:100vh;
    max-width:100wh;
    display: flex;
    flex-direction: row;
        @media only screen and (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            margin: 0;
        }
`;

export default Body;
