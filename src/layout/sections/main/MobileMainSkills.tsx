import React from 'react';
import {Circle} from "./Circle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMainSkills = () => {
    return (
        <StyledMainSkills>
            <Circle top={"52px"} right={"12px"} dims={"50px"} fontSize={"18px"}>
                <CircleText>UI</CircleText>
            </Circle>

            <Circle left={"-24px"} top={"70px"} dims={"50px"} fontSize={"18px"}>
                <span>{"</"}</span>
            </Circle>

            <Circle left={"-66px"} top={"160px"} dims={"50px"} fontSize={"18px"}>
                <span>UX</span>
            </Circle>

            <Circle left={"-50px"} bottom={"52px"} dims={"50px"} fontSize={"18px"}>
                <span>PS</span>
            </Circle>
        </StyledMainSkills>
    );
};

const CircleText = styled.span`
    height: fit-content;
`

const StyledMainSkills = styled.div`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`