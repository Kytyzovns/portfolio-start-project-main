import React from 'react';
import {Icon} from "../../../../components/Icon/Icon";
import {S} from "./Skill_Styles"

type SkillProps = {
    iconId?: string;
    title?: string;
    isText?: boolean;
    text?: string;
    iconWidth?: string;
    iconHeight?: string;
    viewBox?: string;
    paddingTop?: string;
}

export const Skill = (props: SkillProps) => {
    return (
        <S.Skill paddingTop={props.paddingTop}>
                <S.SkillTitle shown={props.isText || false}>{props.title}</S.SkillTitle>
                <Icon iconId={props.iconId || "pen"} width={props.iconWidth} height={props.iconHeight}
                      viewBox={props.viewBox} isHidden={props.isText}></Icon>
            <S.SkillText>{props.text}</S.SkillText>
        </S.Skill>
    );
}

