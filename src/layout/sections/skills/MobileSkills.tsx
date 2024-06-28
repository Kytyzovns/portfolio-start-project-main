import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {MobileSkill} from "./skill/MobileSkill";

export const MobileSkills = () => {
    return (
        <StyledMobileSkills>
            <FlexWrapper align={"center"} justify={"center"}>
                <FlexWrapper wrap="wrap" justify={"center"} gap={"25px"}>
                    <MobileSkill iconId={"pen1"} text={"ProductDesign"} iconHeight={"70"} iconWidth={"70"}
                                 viewBox={"0 0 70 70"} paddingTop={"32px"}/>
                    <MobileSkill isText={true} title={"UX/UI"} text={"UX/UI Design"} iconHeight={"50px"}
                                 iconWidth={"50px"} viewBox={"0 0 50 50"} paddingTop={"50px"}/>
                    <MobileSkill iconId={"nav1"} text={"Icon Design"} iconHeight={"50px"} iconWidth={"50px"}
                                 viewBox={"0 0 50 50"} paddingTop={"35px"}/>
                    <MobileSkill iconId={"logoDesign1"} text={"Logo Design"} iconHeight={"50px"} iconWidth={"50px"}
                                 viewBox={"0 0 50 50"} paddingTop={"35px"}/>
                    <MobileSkill isText={true} title={"</>"} text={"Backend"} paddingTop={"35px"}/>
                    <MobileSkill iconId={"display1"} text={"Frontend"} iconHeight={"50px"} iconWidth={"50px"}
                                 viewBox={"0 0 50 50"} paddingTop={"35px"}/>
                    <MobileSkill iconId={"motion1"} text={"Motion"} iconHeight={"50px"} iconWidth={"50px"}
                                 viewBox={"0 0 50 50"} paddingTop={"35px"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMobileSkills>

    );
};


export const StyledMobileSkills = styled.section`
    min-height: 40vh;
    padding: 110px 0 100px 0;
    justify-content: center;
    display: none;
    
    @media ${theme.media.skillsFlex} {
        display: flex;
    }
`
