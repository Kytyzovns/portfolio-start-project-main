import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
                <SkillFlexWrapper wrap="wrap" justify={"center"}>
                    <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"107"}
                           viewBox={"0 0 107 108"}/>
                    <Skill isText={true} title={"UX/UI"} text={"UX/UI Design"}/>
                    <Skill iconId={"nav"} text={"Icon Design"}/>
                    <Skill iconId={"logoDesign"} text={"Logo Design"}/>
                    <Skill isText={true} title={"</>"} text={"Backend"}/>
                    <Skill iconId={"display"} text={"Frontend"}/>
                    <Skill iconId={"motion"} text={"Motion"}/>
                </SkillFlexWrapper>
        </StyledSkills>

    );
};

const SkillFlexWrapper = styled(FlexWrapper)`
    @mdeia ${theme.media.tablet} {
        gap: 0;
        // ${props => props.gap = "0"};
    }
`

export const StyledSkills = styled.section`
    min-height: 40vh;
    padding: 110px 0 100px 0;
`