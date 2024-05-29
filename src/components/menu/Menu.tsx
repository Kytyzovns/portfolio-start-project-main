import React from 'react';
import styled from "styled-components";

type MenuProps = {
    direction: "column" | "row";
    gap: string;
    weight?: string;
    fontSize?: string;
    fontColor?: string;
}

export const Menu = (props: MenuProps) => {
    return (
        <StyledNav direction={props.direction} gap={props.gap} fontSize={props.fontSize} fontColor={props.fontColor} weight={props.weight}>
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
        font-size: ${props => props.weight};
        font-size: ${props => props.fontSize};
        color: ${props => props.fontColor};
    }
`

