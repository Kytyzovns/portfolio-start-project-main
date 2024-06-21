import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

type MenuProps = {
    items: Array<string>;
}

export const MobileMenu = (props: MenuProps) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MenuWrapper isOpen={false}>
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
            </MenuWrapper>

        </StyledMobileMenu>
    );
};

const MenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: ${theme.colors.primaryTransparent};
    display: none;

    ul {
        flex-direction: column;
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        gap: 55px;
        min-height: 100%;
        width: 100%;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: block;
    `}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    right: 15px;
    top: 6px;
    width: 36px;
    height: 36px;
    z-index: 999999999;
    
    span {
        display: block;
        color: transparent;

        &::before {
            content: "";
            display: block;
            width: 27px;
            height: 4px;
            transform: translateY(-5px);
            border-radius: 4px;
            background-color: ${theme.colors.accent};
            position: absolute;
        }

        &::after {
            content: "";
            display: block;
            width: 27px;
            height: 4px;
            transform: translateY(5px);
            border-radius: 4px;
            background-color: ${theme.colors.accent};
            position: absolute;
        }

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            &::before {
                transform: rotate(40deg) translateY(0);
            }

            &::after {
                transform: rotate(-40deg) translateY(0);
            }
        `}
    }
`
const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: flex;
        align-items: center;
        min-height: 100%;
        max-width: 710px;
        width: 100%;
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

        span {
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