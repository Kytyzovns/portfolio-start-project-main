import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type CircleProps = {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}
export const Circle = styled.div<CircleProps>`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    
    span {
        font-family: Next-art, sans-serif;
        font-weight: 700;
        font-size: 36px;
        color: ${theme.colors.accent};  
    }
    
    p {
        vertical-align: middle;
        font-weight: 700;
        font-size: 36px;
        color: ${theme.colors.accent};
    }
`