import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/mainPhoto.webp"
import {Container} from "../../../components/Container";
import {StyledBtn} from "../../../components/StyledBtn";
import {MainSkills} from "./MainSkills";
import {MobileMainSkills} from "./MobileMainSkills";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.MainFlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"} direction={"row"}>
                    <FlexWrapper gap={"27px"} direction={"column"} justify={"flex-start"} height={"content"}>
                        <S.Greeting>HELLO</S.Greeting>
                        <S.Name>I’m Gleb</S.Name>
                        <S.Name>Kostrubov</S.Name>
                        <S.Description>I've been doing web design, front-end and back-end development for a year now.
                            Do you need a website design, site layout, or maybe a turnkey website?
                            Then contact me
                        </S.Description>
                        <StyledBtn type={"button"}>CONTACT ME</StyledBtn>
                    </FlexWrapper>

                    <S.PhotoContainer>
                        <S.Photo src={mainPhoto} alt="mainPhoto"/>
                        <MainSkills/>
                        <MobileMainSkills/>
                    </S.PhotoContainer>
                </S.MainFlexWrapper>
            </Container>
        </S.Main>
    );
};



