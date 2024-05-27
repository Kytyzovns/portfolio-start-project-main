import React from 'react';
import {Icon} from "../../../components/Icon/Icon";
import styled from "styled-components";
import firstPhoto from "../../../assets/images/firstAboutPhoto.webp"
import secondPhoto from "../../../assets/images/secondAboutPhoto.webp"
import thirdPhoto from "../../../assets/images/thirdAboutPhoto.webp"
import aboutFirstHead from "../../../assets/images/aboutHead.webp"

export const About = () => {
    return (
        <StyledAbout>
            <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
            <StyledAboutText>Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                By trusting me, you will get the maximum return for your project, save your nerves and time.
                If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.</StyledAboutText>
            <StyledAboutPhoto src={firstPhoto} alt="firstPhoto" />
            <StyledAboutPhoto src={secondPhoto} alt="secondPhoto" />
            <StyledAboutPhoto src={thirdPhoto} alt="thirdPhoto" />
            <StyledAboutPhoto src={aboutFirstHead} alt="aboutFirstHead" />
            <Icon iconId={"ellipse6"} width={"932px"} height={"932px"} viewBox={"0 0 932 932"}></Icon>
            <Icon iconId={"ellipse7"} width={"626"} height={"626"} viewBox={"0 0 626 626"}></Icon>
            <Icon iconId={"ellipse8"} width={"496"} height={"496"} viewBox={"0 0 496 496"}></Icon>
        </StyledAbout>
    );
};

const StyledAboutTitle = styled.h2`

`

const StyledAboutText = styled.p`

`

const StyledAbout = styled.section`

`
const StyledAboutPhoto = styled.img`

`