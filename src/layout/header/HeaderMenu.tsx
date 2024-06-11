import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuProps = {
    items: Array<string>;
}

export const HeaderMenu = (props: MenuProps) => {
    return (
        <StyledNav>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <Item key={index}>
                            <Link>
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </Item>
                    );
                })}
            </ul>
        </StyledNav>
    );
};


const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    min-height: 100%;
    ul {
        display: flex;
        list-style: none;
        gap:145px;
        justify-content: center;
        min-height: 100%;
    }
`

const Mask = styled.span`
    color: ${theme.colors.primaryTextColor};
    position: absolute;
    height: 50%;
    top: 0;
    left: 0;
    overflow-y: hidden;
    display: inline-block;
    & + & {
        top: 50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const Link = styled.a`
    color: transparent;
    font-size: 18px;
`

const Item = styled.li`
    position: relative;

    &::before {
        content: "";
        height: 2px;
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        background-color: ${theme.colors.linkTextColor};
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transition: 0.1s;
            transform: skewX(12deg) translateX(5px);
        }

        ${Mask} + ${Mask} {
            transition: 0.1s;
            transform: skewX(12deg) translateX(-5px);
        }
    }
`