import React from 'react';
import {Icon} from "../../../../components/Icon/Icon";
import styled from "styled-components";
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
}

export const Skill = (props: SkillProps) => {
    let id = "";
    if (props.iconId !== undefined) {
        id = props.iconId;
    }
    if (props.isText === true) {
        return (
            <StyledSkill>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <SkillTitle>{props.title}</SkillTitle>
                </FlexWrapper>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
        );
    } else {
        return (
            <StyledSkill>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <Icon iconId={id} width={props.iconWidth} height={props.iconHeight} viewBox={props.viewBox}/>
                </FlexWrapper>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
        );
    }
};

const StyledSkill = styled.div`
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
    
    
`

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



