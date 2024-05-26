import React from 'react';
import {Icon} from "../../../../components/Icon/Icon";
import styled from "styled-components";

type SkillProps = {
    iconId: string;
    title?: string;
    isText?: boolean;
    text?: string;
    iconWidth?: string;
    iconHeight?: string;
    viewBox?: string;
}

export const Skill = (props: SkillProps) => {
    if (props.isText) {
        return (
            <StyledSkill>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
        );
    } else {
        return (
            <StyledSkill>
                <Icon iconId={props.iconId} width={props.iconWidth} height={props.iconHeight} viewBox={props.viewBox}/>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
        );
    }
};

const StyledSkill = styled.div`
    width: 33%;
    background-color: darkgray;
    margin: 10px;
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`
`