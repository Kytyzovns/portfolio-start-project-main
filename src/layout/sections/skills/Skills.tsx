import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {S} from "./Skills_Styles"

export const Skills = () => {
    return (
        <S.Skills>
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
        </S.Skills>

    );
};
