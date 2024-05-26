import React from 'react';
import {Icon} from "../../../../components/Icon/Icon";
import styled from "styled-components";
import {StyledSkill} from "./StyledSkill";
import {SkillTitle} from "./SkillTitle";
import {SkillText} from "./SkillText";

type SkillProps = {
    iconId?: string;
    title?: string;
    isText?: boolean;
    text?: string;
    iconWidth?: string;
    iconHeight?: string;
    viewBox?: string;
}

export const Skill = (props: SkillProps) => {
    let id = "";
    if (props.iconId !== undefined) {
        id = props.iconId;
    }
    if (props.isText === true) {
        return (
            <StyledSkill>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
        );
    } else {
        return (
            <StyledSkill>
                <Icon iconId={id} width={props.iconWidth} height={props.iconHeight} viewBox={props.viewBox}/>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
        );
    }
};





