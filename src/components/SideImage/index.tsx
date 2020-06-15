import styled from 'styled-components';
import img from '../../assets/homeLateral.png';

const SideImage = styled.image`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
    background: url(${img}) 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;

    @media(max-width: 1000px) {

        display: none;
    }

`;

export default SideImage;
