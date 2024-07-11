import React from 'react';
import {Circle} from "./Circle";
import {S} from "./Main_Styles"

export const MainSkills: React.FC = () => {
    return (
        <S.MainSkills>
            <Circle top={"100px"} right={"22px"}>
                <S.CircleText>UI</S.CircleText>
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
        </S.MainSkills>
    );
};

