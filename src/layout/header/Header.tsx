import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {HeaderMenu} from "./HeaderMenu";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <FlexWrapper justify={"space-around"} align={"center"} max-width={"1100px"}>
                    <FlexWrapper justify={"center"} align={"center"} gap={"10px"}>
                        <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                        <StyledLogoText>Notitanic</StyledLogoText>
                    </FlexWrapper>
                    <HeaderMenu items={["Contacts", "About me", "Portfolio", "Links"]}/>
                </FlexWrapper>
            </StyledHeader>
        </Container>
    );
};

const StyledHeader = styled.header`
    background-image: ${theme.colors.primaryBg};
    padding-top: 26px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

const StyledLogoText = styled.span`
    font-family: "Nico-moji", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.secondaryTextColor};
`