import React from 'react';
import {Icon} from "../../../../components/Icon/Icon";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
        <StyledSkill paddingTop={props.paddingTop}>
                <SkillTitle shown={props.isText || false}>{props.title}</SkillTitle>
                <Icon iconId={props.iconId || "pen"} width={props.iconWidth} height={props.iconHeight}
                      viewBox={props.viewBox} isHidden={props.isText}></Icon>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
}


const SkillText = styled.span`
    display: inline-block;
    margin-bottom: 50px;
    font-weight: 300;
    font-size: 24px;
    color: ${theme.colors.primaryTextColor};
`
type SkillTitleProps = {
    shown?: boolean;
}

const SkillTitle = styled.h3<SkillTitleProps>`
    display: none;
    font-family: Next-art, sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: ${theme.colors.accent};
    ${props => props.shown && css`
        display: inline;
    `}
`

const StyledSkill = styled.div<SkillProps>`
    border-radius: 29px;
    width: 270px;
    height: 270px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
    background: ${theme.colors.skillBg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: ${props => props.paddingTop};
`

