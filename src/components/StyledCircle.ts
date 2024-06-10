import styled from "styled-components";
import {theme} from "../styles/Theme";

type StyledCircleProps = {
    borderWidth?: string;
    borderColor?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    dims?: string;
    shadow?: string;
}

export const StyledCircle = styled.div<StyledCircleProps>`
    border: solid ${props => props.borderWidth} ${props => `${props.theme.colors[props.borderColor || "blue"]}`};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    position: absolute;
    width: ${props => props.dims};
    height: ${props => props.dims};
    border-radius: 100%;
    box-shadow: ${props => props.shadow};
    z-index: -1;
`


