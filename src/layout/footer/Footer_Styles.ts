import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const LogoText = styled.span`
    font-family: "Nico-moji", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.secondaryTextColor};
`

const LogoContainer = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
    justify-content: space-between;
        width: 100%;
    }
`

const Footer = styled.footer`
    background: ${theme.colors.secondaryBg};
    padding: 50px 0;
    
    @media ${theme.media.mobile} {
        padding: 50px 0 30px 0;
    }
`

const Contacts = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.primaryTextColor};
`

const ContactItem = styled.li`
    white-space: nowrap;
`

const Small = styled.small`
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.primaryTextColor};
`

const FooterContainer = styled(FlexWrapper)`
    max-width: 792px;
    width: 100%;
    margin: 0 auto;
    gap: 40px;
    flex-wrap: wrap;
    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const S = {
    LogoText,
    FooterContainer,
    Small,
    ContactItem,
    Contacts,
    LogoContainer,
    Footer
}