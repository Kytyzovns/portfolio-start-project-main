import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuProps = {
    direction: "column" | "row";
    gap: string;
}

export const Menu = (props: MenuProps) => {
    return (
        <StyledNav direction={props.direction} gap={props.gap}>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>

                <li>
                    <a href="">About me</a>
                </li>

                <li>
                    <a href="">Portfolio</a>
                </li>

                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledNav>
    );
};


const StyledNav = styled.nav<MenuProps>`
    ul {
        display: flex;
        flex-direction: ${props => props.direction};
        gap: ${props => props.gap};
        list-style: none;
        font-size: 18px;
        font-weight: 300;
        // color: ${theme.colors.primaryTextColor};
    }
`

