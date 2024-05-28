import React from 'react';
import {Icon} from "../../../components/Icon/Icon";
import styled from "styled-components";
import firstPhoto from "../../../assets/images/firstAboutPhoto.webp"
import secondPhoto from "../../../assets/images/secondAboutPhoto.webp"
import thirdPhoto from "../../../assets/images/thirdAboutPhoto.webp"
import aboutFirstHead from "../../../assets/images/aboutHead.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledIcon} from "../../../components/Icon/StyledIcon";
import {AbsoluteContainer} from "../../../components/AbsoluteContainer";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                <StyledAboutTitle>ABOUT ME</StyledAboutTitle>
                <StyledTextContainer>
                    <StyledAboutText>Hello again everyone! So, you already know that my name is Gleb. A little about
                        myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in
                        Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the
                        future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I
                        specialize in web design, front-end and back-end development, turnkey websites. Why should you
                        choose me? I approach each order with great responsibility and love, as I want to make a name
                        for myself, exclude plagiarism and negligence, fully study the project, the client and its
                        target audience, work for quality, trying to make an order as quickly and uniquely as possible,
                        taking into account all the edits and wishes.
                        By trusting me, you will get the maximum return for your project, save your nerves and time.
                        If you are interested in me , you want to know something more or use my services, then I will
                        provide all my contacts below.
                    </StyledAboutText>
                </StyledTextContainer>

                <StyledPhotoContainer topPosition={"0px"} leftPosition={"400px"}  zIndex={"1"}>
                    <StyledAboutPhoto src={firstPhoto} alt="firstPhoto"/>
                </StyledPhotoContainer>

                <StyledPhotoContainer topPosition={"200px"} leftPosition={"1200px"} zIndex={"1"}>
                    <StyledAboutPhoto src={secondPhoto} alt="secondPhoto"/>
                </StyledPhotoContainer>

                <StyledPhotoContainer topPosition={"500px"} leftPosition={"420px"} zIndex={"1"}>
                    <StyledAboutPhoto src={thirdPhoto} alt="thirdPhoto"/>
                </StyledPhotoContainer>

                {/*<StyledPhotoContainer>*/}
                {/*    <StyledAboutPhoto src={aboutFirstHead} alt="aboutFirstHead" />*/}
                {/*</StyledPhotoContainer>*/}

                <AbsoluteContainer top={"90px"} left={"0px"} zIndex={"0"}>
                    <Icon iconId={"ellipse6"} width={"932px"} height={"932px"} viewBox={"0 0 932 932"}></Icon>
                </AbsoluteContainer>

                <AbsoluteContainer bottom={"150px"} left={"1055px"} zIndex={"0"}>
                    <Icon iconId={"ellipse7"} width={"626"} height={"626"} viewBox={"0 0 626 626"}></Icon>
                </AbsoluteContainer>

                <AbsoluteContainer top={"0"} left={"1050px"} zIndex={"0"}>
                    <Icon iconId={"ellipse8"} width={"496"} height={"496"} viewBox={"0 0 496 496"}></Icon>
                </AbsoluteContainer>


            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAboutTitle = styled.h2`

`

const StyledAboutText = styled.p`
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #fff;
    box-sizing: border-box;
    padding: 63px;
`

const StyledAbout = styled.section`
    background-color: #7c6b6b;
    min-height: 120vh;
    position: relative;
`


const StyledAboutPhoto = styled.img`
    margin: 15px;
`
const StyledTextContainer = styled.div`
    width: 496px;
    height: 822px;
    background-color: #2c2c2c;
    z-index: 1;
`

type StyledPhotoContainerProps = {
    topPosition?: string;
    leftPosition?: string;
    zIndex?: string;
}

const StyledPhotoContainer = styled.div<StyledPhotoContainerProps>`
    top: ${props => props.topPosition};
    left: ${props => props.leftPosition};
    z-index: ${props => props.zIndex};
    background-color: #2c2c2c;
    position: absolute;
`