import styled from "styled-components";

type AbsoluteContainerProps = {
    top?: string;
    left?: string;
    zIndex?: string;
    bottom?: string;
    right?: string;
}

export const AbsoluteContainer = styled.div<AbsoluteContainerProps>`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
`