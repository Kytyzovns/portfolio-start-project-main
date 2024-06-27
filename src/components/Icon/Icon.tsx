import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";
import styled, {css} from "styled-components";

type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    isHidden?: boolean;
}

type StyledSvgProps = {
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    isHidden?: boolean;
}
export const Icon = (props: IconProps) => {

    return (
        <StyledSvg position={props.position} top={props.top} left={props.left} right={props.right} bottom={props.bottom} width={props.width || "75px"} height={props.height || "75px"} viewBox={props.viewBox || "0 0 75 75"}
             fill="none" xmlns="http://www.w3.org/2000/svg" isHidden={props.isHidden}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledSvg>
    );
};

const StyledSvg = styled.svg<StyledSvgProps>`
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    
    ${props => props.isHidden && css`
        display: none;
    `}
`