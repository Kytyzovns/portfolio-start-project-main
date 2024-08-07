import React from 'react';
import styled from "styled-components";
import firstPhoto from "../../../assets/images/firstAboutPhoto.webp"
import secondPhoto from "../../../assets/images/secondAboutPhoto.webp"
import thirdPhoto from "../../../assets/images/thirdAboutPhoto.webp"
import aboutHead from "../../../assets/images/image 2.png"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Skills} from "../skills/Skills";
import firstEllipse from "../../../assets/images/oldsvg/Ellipse 8.png"
import secondEllipse from "../../../assets/images/oldsvg/Ellipse 6.png"
import thirdEllipse from "../../../assets/images/oldsvg/Ellipse 7.png"
import {MobileSkills} from "../skills/MobileSkills";
import {MobileAbout} from "./MobileAbout";


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <MobileSkills/>
                <Skills/>
                <MainAbout>
                    <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
                    <StyledPhotoContainer topPosition={"-45px"} leftPosition={"-290px"} zIndex={"2"}>
                        <StyledAboutPhoto src={firstPhoto} alt="firstPhoto"/>
                    </StyledPhotoContainer>

                    <StyledPhotoContainer topPosition={"190px"} rightPosition={"-290px"} zIndex={"2"}>
                        <StyledAboutPhoto src={secondPhoto} alt="secondPhoto"/>
                    </StyledPhotoContainer>

                    <StyledPhotoContainer bottomPosition={"-45px"} leftPosition={"-270px"} zIndex={"2"}>
                        <StyledAboutPhoto src={thirdPhoto} alt="thirdPhoto"/>
                    </StyledPhotoContainer>

                    <Head src={aboutHead} alt="aboutFirstHead"/>

                    <CircleContainer/>

                    <StyledTextContainer>
                        <StyledAboutText>Hello again everyone! So, you already know that my name is Gleb. A little about
                            myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live
                            in
                            Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of
                            the
                            future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I
                            specialize in web design, front-end and back-end development, turnkey websites. Why should
                            you
                            choose me? I approach each order with great responsibility and love, as I want to make a
                            name
                            for myself, exclude plagiarism and negligence, fully study the project, the client and its
                            target audience, work for quality, trying to make an order as quickly and uniquely as
                            possible,
                            taking into account all the edits and wishes.
                            By trusting me, you will get the maximum return for your project, save your nerves and time.
                            If you are interested in me , you want to know something more or use my services, then I
                            will
                            provide all my contacts below.
                        </StyledAboutText>
                    </StyledTextContainer>
                </MainAbout>

            </Container>
            <MobileAbout/>
        </StyledAbout>
    );
};

export const StyledAboutTitle = styled.h2`
    top: -25px;
    left: 65px;
    position: absolute;
    font-family: Next-art, sans-serif;
    font-weight: 400;
    font-size: 48px;
    color: ${theme.colors.primaryTextColor};
    z-index: 2;
    
`

const StyledAboutText = styled.p`
    font-weight: 200;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: ${theme.colors.secondaryTextColor};
    box-sizing: border-box;
    padding: 63px;
`

const StyledAbout = styled.section`
    position: relative;
    background: ${theme.colors.secondaryBg};
    min-height: 100vh;
    padding-bottom: 160px;
    z-index: 0;
    box-sizing: border-box;
    overflow: hidden;
`


const StyledAboutPhoto = styled.img`
    display: block;
    z-index: 1;
`

const StyledTextContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    width: 500px;
    height: 820px;
    background: ${theme.colors.skillBg};
    z-index: 1;
    
`

type StyledPhotoContainerProps = {
    topPosition?: string;
    leftPosition?: string;
    rightPosition?: string;
    bottomPosition?: string;
    zIndex?: string;
    transform?: string;
}

export const StyledPhotoContainer = styled.div<StyledPhotoContainerProps>`
    top: ${props => props.topPosition};
    left: ${props => props.leftPosition};
    right: ${props => props.rightPosition};
    bottom: ${props => props.bottomPosition};
    z-index: ${props => props.zIndex};
    transform: translateX(${props => props.transform});
    border-radius: 15px;
    padding: 15px;
    background-color: ${theme.colors.skillBg};
    position: absolute;
`

const Head = styled.img`
    position: absolute;
    left: -310px;
    top: -90px;
    z-index: 2;
`
const MainAbout = styled.div`
    position: relative;
    margin-left: 440px;
    margin-top: 80px;
    border-radius: 15px;
    width: 500px;
    height: 820px;
        // background: ${theme.colors.skillBg};
    z-index: 1;

    &::before {
        content: url('${firstEllipse}');
        margin: 0;

        width: fit-content;
        height: fit-content;

        display: inline-block;

        position: absolute;
        z-index: 0;

        right: -312px;
        top: -102px;
    }

    &::after {
        content: url('${secondEllipse}');
        margin: 0;

        width: fit-content;
        height: fit-content;

        display: inline-block;

        position: absolute;
        z-index: 0;

        left: -590px;
        top: -65px;
    }
    
    @media ${theme.media.aboutWrap} {
        display: none;
    }
`

const CircleContainer = styled.div`
    &:before {
        content: url('${thirdEllipse}');
        margin: 0;

        width: fit-content;
        height: fit-content;

        display: block;

        position: absolute;
        z-index: -10;

        right: -312px;
        bottom: -222px;
    }
`