import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap="wrap">
                <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"} viewBox={"0 0 107 108"}/>
                <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"} viewBox={"0 0 107 108"}/>
                <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"} viewBox={"0 0 107 108"}/>
                <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"} viewBox={"0 0 107 108"}/>
                <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"} viewBox={"0 0 107 108"}/>
                <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"} viewBox={"0 0 107 108"}/>
            </FlexWrapper>
        </StyledSkills>

    );
};

const StyledSkills = styled.section`
    background-color: aquamarine;
    min-height: 100vh;
`