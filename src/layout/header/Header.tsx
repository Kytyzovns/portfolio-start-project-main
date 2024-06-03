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
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} gap={"100px"}>
                    <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                    <HeaderMenu items={["Contacts", "About me", "Portfolio", "Links"]}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-image: ${theme.colors.primaryBg};
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 99999;
`