import { styled } from 'styled-components';
import './Footer.css';
import logo from '../../assets/logo.png';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    box-sizing: border-box;
    border-top: 4px solid var(--color-blue);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem; /* Añade espacio entre el logo y el texto */
    img {
        width: clamp(30%, 100%, 10.528rem); 
        height: auto;
        background-color: var(--color-black);
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 13px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <FooterText className='text'>
                Desarrollado por Daniel Esteban Reyes Reyes.<br />
                2024
            </FooterText>
        </StyledFooter>
    );
}

export default Footer;
