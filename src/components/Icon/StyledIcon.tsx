import styled from "styled-components";
import {Icon} from "./Icon";

type StyledIconProps = {
    top?: string;
    left?: string;
    zIndex?: string;
    bottom?: string;
    right?: string;
}

export const StyledIcon = styled(Icon)<StyledIconProps>`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
`