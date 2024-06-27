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
    noMedia?: "mobile" | "tablet" | "skillsFlex" | "aboveSkillsFlex";
}

export const Skill = (props: SkillProps) => {
    return (
        <StyledSkill noMedia={props.noMedia}>
            <FlexWrapper direction={"column"} justify={"center"}>
                <SkillTitle>{props.title}</SkillTitle>
                <Icon iconId={props.iconId || "pen"} width={props.iconWidth} height={props.iconHeight}
                      viewBox={props.viewBox} isHidden={props.isText}></Icon>
            </FlexWrapper>
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
    @media ${theme.media.skillsFlex} {
        font-size: 18px;
    }
`

const SkillTitle = styled.h3`
    font-family: Next-art, sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: ${theme.colors.accent};
    @media ${theme.media.skillsFlex} {
        font-size: 36px;
    }
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
    
    @media ${theme.media.skillsFlex} {
        width: 150px;
        height: 150px;
    }

    ${props => props.noMedia && css`
        @media ${props.theme.media[props.noMedia]} {
            display: none;
        }
    `}
`

