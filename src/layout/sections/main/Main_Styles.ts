import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {font} from "../../../styles/Common";
import firstEllipse from "../../../assets/images/oldsvg/Ellipse 1.png";

const MainFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.mainFlex} {
        flex-direction: column;
    }
`
const Greeting = styled.h2`
    ${font({fontFamily:"Next-art, sans-serif", fontWeight: 600, Fmin: 27, Fmax: 48})};
    color: ${theme.colors.primaryTextColor};
`

const Name = styled.h2`
    ${font({fontFamily:"Next-art, sans-serif", fontWeight: 700, Fmin: 50, Fmax: 72})};
    color: ${theme.colors.primaryTextColor};
`

const Description = styled.p`
    max-width: 430px;
    font-weight: 300;
    font-size: 18px;
    font-family: Arodora, sans-serif;
    color: ${theme.colors.primaryTextColor};
`
const Main = styled.section`
    background: ${theme.colors.primaryBg};
    display: flex;
    padding-top: 74px;
    overflow: hidden;
`

const Photo = styled.img`
    width: 465px;
    height: 675px;
    z-index: 99999;
    
    @media ${theme.media.tablet} {
        width: 254px;
        height: 362px;
    }
`

const PhotoContainer = styled.div`
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    &::before {
        content:"";
        background: url('${firstEllipse}') no-repeat center;
        background-size: contain;
        margin: 0;
       
        width: 880px;
        height: 880px;
        
        display: inline-block;
        
        position: absolute;
        z-index: 0;
        
        left: -220px;
        bottom: -152px;
    }
    @media ${theme.media.tablet} {
       &::before {
           width: 480px;
           height: 480px;
           left: -116px;
           bottom: -90px;
       } 
        
        margin-left: 30px;
    }
`

const CircleText = styled.span`
    height: fit-content;
`

const MainSkills = styled.div`
    @media ${theme.media.tablet} {
        display: none;
    }
`

const MobileMainSkills = styled.div`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`

export const S = {
    PhotoContainer,
    Photo,
    Main,
    Description,
    Name,
    Greeting,
    MainFlexWrapper,
    CircleText,
    MainSkills,
    MobileMainSkills
}