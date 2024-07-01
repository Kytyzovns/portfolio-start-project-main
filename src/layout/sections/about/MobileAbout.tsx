import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {StyledPhotoContainer} from "./About";
import thirdPhoto from "../../../assets/images/thirdAboutPhoto.webp"

export const MobileAbout = () => {
    return (
        <TextContainer>
            <StyledText>
                <AboutTitle>ABOUT ME</AboutTitle>
                Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18
                y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why
                programming? Everything is elementary - I like it, the profession of the future, thanks to which I can
                provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and
                back-end development, turnkey websites. Why should you choose me? I approach each order with great
                responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully
                study the project, the client and its target audience, work for quality, trying to make an order as
                quickly and uniquely as possible, taking into account all the edits and wishes.
                By trusting me, you will get the maximum return for your project, save your nerves and time.
                If you are interested in me , you want to know something more or use my services, then I will provide
                all my contacts below.
            </StyledText>
                <StyledPhotoContainer bottomPosition={"-45px"} leftPosition={"-70px"} zIndex={"2"}>
                    <AboutPhoto src={thirdPhoto} alt="thirdPhoto"/>
                </StyledPhotoContainer>
        </TextContainer>
    );
};

const AboutPhoto = styled.img`
    display: block;
    z-index: 1;
`

const TextContainer = styled.div`
    //position: relative;
    display: flex;
    padding: 63px 16px 0 16px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border-radius: 15px;
    max-width: 500px;
    min-height: 820px;
    background: ${theme.colors.skillBg};
    z-index: 1;
`

const StyledText = styled.p`
    position: relative;
    display: inline-block;
    max-width: 370px;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0.01em;
`
const AboutTitle = styled.span`
    top: -90px;
    left: 0;
    position: absolute;
    font-family: Next-art, sans-serif;
    font-weight: 400;
    font-size: 48px;
    color: ${theme.colors.primaryTextColor};
    z-index: 2;
`