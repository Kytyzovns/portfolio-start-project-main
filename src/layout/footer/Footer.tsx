import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {ArrowBtn} from "../../components/arrowButton/ArrowBtn";
import {theme} from "../../styles/Theme";
import {StyledLogoText} from "../header/Header";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterContainer justify={"space-around"} align={"center"}>
                    <Menu direction={"column"} gap={"18px"}/>
                    <StyledContacts>
                        <StyledContactItem>Contact</StyledContactItem>
                        <StyledContactItem>Email: notitanic33@gmail.com</StyledContactItem>
                        <StyledContactItem>Inst: notitanic33</StyledContactItem>
                        <StyledContactItem>Calls: +7 (900) - 121 - 54 - 54</StyledContactItem>
                    </StyledContacts>
                    <LogoContainer direction={"column"} justify={"center"} align={"center"} gap={"63px"}>
                        <LogoContainer justify={"center"} align={"center"} gap={"30px"}>
                            <FlexWrapper direction={"row"} justify={"center"} align={"center"} gap={"10px"}>
                                <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                                <StyledLogoText>Notitanic</StyledLogoText>
                            </FlexWrapper>
                            <ArrowBtn direction={"up"}/>
                        </LogoContainer>
                        <StyledSmall>Copyright © 2021, Notitanic</StyledSmall>
                    </LogoContainer>
                </FooterContainer>
            </Container>
        </StyledFooter>
    );
};

const LogoContainer = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
    justify-content: space-between;
        width: 100%;
    }
`

const StyledFooter = styled.footer`
    background: ${theme.colors.secondaryBg};
    padding: 50px 0;
    
    @media ${theme.media.mobile} {
        padding: 50px 0 30px 0;
    }
`

const StyledContacts = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.primaryTextColor};
`

const StyledContactItem = styled.li`
    white-space: nowrap;
`

const StyledSmall = styled.small`
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