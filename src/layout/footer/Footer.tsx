import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {ArrowBtn} from "../../components/arrowButton/ArrowBtn";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"center"} align={"center"} gap={"80px"}>
                <Menu direction={"column"} gap={"18px"} fontSize={"18px"} weight={"300"} fontColor={"#e4e4e4"}/>
                <StyledContacts>
                    <StyledContactItem>Contact</StyledContactItem>
                    <StyledContactItem>Email: notitanic33@gmail.com</StyledContactItem>
                    <StyledContactItem>Inst: notitanic33</StyledContactItem>
                    <StyledContactItem>Calls: +7 (900) - 121 - 54 - 54</StyledContactItem>
                </StyledContacts>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"} gap={"63px"}>
                    <FlexWrapper direction={"row"} justify={"center"} align={"center"} gap={"32px"}>
                        <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                        <StyledLogoText>Notitanic</StyledLogoText>
                        <ArrowBtn direction={"up"}/>
                    </FlexWrapper>
                    <StyledSmall>Copyright © 2021, Notitanic</StyledSmall>
                </FlexWrapper>

            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 25vh;
    background-color: burlywood;
`

const StyledContacts = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-weight: 300;
    font-size: 18px;
    color: #e4e4e4;
`

const StyledContactItem = styled.li`

`
const StyledLogoText = styled.span`
`

const StyledSmall = styled.small`
    font-weight: 300;
    font-size: 18px;
    color: #e4e4e4;
`