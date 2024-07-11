import React from 'react';
import {Circle} from "./Circle";
import {S} from "./Main_Styles"

export const MobileMainSkills: React.FC = () => {
    return (
        <S.MobileMainSkills>
            <Circle top={"52px"} right={"12px"} dims={"50px"} fontSize={"18px"}>
                <S.CircleText>UI</S.CircleText>
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
        </S.MobileMainSkills>
    );
};
