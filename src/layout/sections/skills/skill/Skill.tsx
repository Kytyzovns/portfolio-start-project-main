import React from 'react';
import {Icon} from "../../../../components/Icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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

export const StyledSkill = styled.div`
    border-radius: 29px;
    width: 270px;
    height: 270px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
    background: ${theme.colors.skillBg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const SkillText = styled.span`
    display: inline-block;
    margin-bottom: 50px;
    bottom: 50px;
    left: 0;
    transform-origin: center;
    font-weight: 300;
    font-size: 24px;
    color: #e4e4e4;
`

export const SkillTitle = styled.h3`
    font-weight: 700;
    font-size: 48px;
    color: #00c4f0;
`



