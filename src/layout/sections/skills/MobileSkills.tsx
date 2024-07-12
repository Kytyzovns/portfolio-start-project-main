import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MobileSkill} from "./skill/MobileSkill";
import {S} from "./Skills_Styles"

export const MobileSkills = () => {
    return (
        <S.MobileSkills>
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
        </S.MobileSkills>

    );
};



