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
                <FlexWrapper justify={"center"} align={"center"} gap={"80px"}>
                    <Menu direction={"column"} gap={"18px"}/>
                    <StyledContacts>
                        <StyledContactItem>Contact</StyledContactItem>
                        <StyledContactItem>Email: notitanic33@gmail.com</StyledContactItem>
                        <StyledContactItem>Inst: notitanic33</StyledContactItem>
                        <StyledContactItem>Calls: +7 (900) - 121 - 54 - 54</StyledContactItem>
                    </StyledContacts>
                    <FlexWrapper direction={"column"} justify={"center"} align={"center"} gap={"63px"}>
                        <FlexWrapper justify={"center"} align={"center"} gap={"30px"}>
                            <FlexWrapper direction={"row"} justify={"center"} align={"center"} gap={"10px"}>
                                <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                                <StyledLogoText>Notitanic</StyledLogoText>
                            </FlexWrapper>
                            <ArrowBtn direction={"up"}/>
                        </FlexWrapper>
                        <StyledSmall>Copyright © 2021, Notitanic</StyledSmall>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: ${theme.colors.secondaryBg};
    padding: 50px 0;
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

`

const StyledSmall = styled.small`
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.primaryTextColor};
`