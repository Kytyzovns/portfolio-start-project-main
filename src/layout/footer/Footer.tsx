import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {ArrowBtn} from "../../components/arrowButton/ArrowBtn";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles"

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterContainer justify={"space-around"} align={"center"}>
                    <Menu direction={"column"} gap={"18px"}/>
                    <S.Contacts>
                        <S.ContactItem>Contact</S.ContactItem>
                        <S.ContactItem>Email: notitanic33@gmail.com</S.ContactItem>
                        <S.ContactItem>Inst: notitanic33</S.ContactItem>
                        <S.ContactItem>Calls: +7 (900) - 121 - 54 - 54</S.ContactItem>
                    </S.Contacts>
                    <S.LogoContainer direction={"column"} justify={"center"} align={"center"} gap={"63px"}>
                        <S.LogoContainer justify={"center"} align={"center"} gap={"30px"}>
                            <FlexWrapper direction={"row"} justify={"center"} align={"center"} gap={"10px"}>
                                <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                                <S.LogoText>Notitanic</S.LogoText>
                            </FlexWrapper>
                            <ArrowBtn direction={"up"}/>
                        </S.LogoContainer>
                        <S.Small>Copyright © 2021, Notitanic</S.Small>
                    </S.LogoContainer>
                </S.FooterContainer>
            </Container>
        </S.Footer>
    );
};

