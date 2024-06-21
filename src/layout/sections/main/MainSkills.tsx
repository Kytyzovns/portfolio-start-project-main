import React from 'react';
import {Circle} from "./Circle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const MainSkills = () => {
    return (
        <StyledMainSkills>
            <Circle top={"100px"} right={"22px"}>
                <CircleText>UI</CircleText>
            </Circle>

            <Circle left={"-45px"} top={"130px"}>
                <span>{"</"}</span>
            </Circle>

            <Circle left={"-120px"} top={"300px"}>
                <span>UX</span>
            </Circle>

            <Circle left={"-90px"} bottom={"100px"}>
                <span>PS</span>
            </Circle>
        </StyledMainSkills>
    );
};

const CircleText = styled.span`
    height: fit-content;
`

const StyledMainSkills = styled.div`
    @media ${theme.media.tablet} {
        display: none;
    }
`