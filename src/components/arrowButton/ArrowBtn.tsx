import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";

type ArrowBtnProps = {
    direction: "left" | "right" | "up";
}

export const ArrowBtn = (props: ArrowBtnProps) => {
    return (
        <StyledBtn>
            <BtnCircle>
                <Icon iconId={props.direction} width={"36"} height={"36"} viewBox={"0 0 36 36"}/>
            </BtnCircle>
        </StyledBtn>
    );
};

const StyledBtn = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
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