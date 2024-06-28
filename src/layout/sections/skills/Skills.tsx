import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper align={"center"} justify={"center"}>
                <FlexWrapper wrap="wrap" justify={"center"} gap={"30px"}>
                    <Skill iconId={"pen"} text={"ProductDesign"} iconHeight={"108"} iconWidth={"108"}
                           viewBox={"0 0 108 108"} paddingTop={"50px"}/>
                    <Skill isText={true} title={"UX/UI"} text={"UX/UI Design"} paddingTop={"76px"}/>
                    <Skill iconId={"nav"} text={"Icon Design"} paddingTop={"66px"}/>
                    <Skill iconId={"logoDesign"} text={"Logo Design"} paddingTop={"66px"}/>
                    <Skill isText={true} title={"</>"} text={"Backend"} paddingTop={"50px"}/>
                    <Skill iconId={"display"} text={"Frontend"} paddingTop={"50px"}/>
                    <Skill iconId={"motion"} text={"Motion"} paddingTop={"50px"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSkills>

    );
};

export const StyledSkills = styled.section`
    min-height: 40vh;
    padding: 110px 0 100px 0;
    display: flex;
    justify-content: center;
    
    @media ${theme.media.skillsFlex} {
        display: none;
    }
`
