import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Menu = styled.nav`
    margin-top: 5px;
    display: flex;
    align-items: center;
    min-height: 100%;
    max-width: 710px;
    width: 100%;

    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        min-height: 100%;
        width: 100%;
    }

    @media ${theme.media.tablet} {
        display: none;
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
            display: block;
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
export const S = {
    Item,
    Link,
    Mask,
    Menu
}