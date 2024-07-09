import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const Header = styled.header`
    background-image: ${theme.colors.primaryTransparent};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
`

const LogoText = styled.span`
    font-family: "Nico-moji", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.secondaryTextColor};
`

const HeaderFlexWrapper = styled(FlexWrapper)`
    
    @media ${theme.media.tablet} {
        
        justify-content: flex-start;
    }
`

export const S = {
    Header,
    LogoText,
    HeaderFlexWrapper
}