import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ArrowBtnProps = {
    direction: "left" | "right" | "up";
    top?: string
    left?: string
    right?: string
}

export const ArrowBtn = (props: ArrowBtnProps) => {
    return (
        <StyledBtn top={props.top} left={props.left} right={props.right}>
            <BtnCircle>
                <Icon iconId={props.direction} width={"36"} height={"36"} viewBox={"0 0 36 36"}/>
            </BtnCircle>
        </StyledBtn>
    );
};

type StyledBtnProps = {
    top?: string
    left?: string
    right?: string
}
const StyledBtn = styled.button<StyledBtnProps>`
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    border: none;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    
    @media ${theme.media.btnWrap} {
        position: unset;
        margin-right: 15px;
        margin-left: 15px;
    }
`
const BtnCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
`