import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
            <Menu direction={"row"} gap={"80px"}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    gap: 100px;
`