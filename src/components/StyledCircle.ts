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
    border: solid ${props => props.borderColor} ${theme.colors.accent};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    position: absolute;
    width: ${props => props.dims};
    height: ${props => props.dims}
    border-radius: 100%;
    box-shadow: ${props => props.shadow};
`
// border: solid 67px ${theme.colors.accent};
// left: -65px;
// bottom: 0;
// position: absolute;
// width: 575px;
// height: 575px;
// border-radius: 100%;
// box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);