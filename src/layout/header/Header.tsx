import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./HeaderMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from "./Header_Styles"


export const Header: React.FC = () => {
    return (

        <S.Header>
            <Container>
                <S.HeaderFlexWrapper justify={"space-around"} align={"center"} max-width={"1100px"} gap={"50px"}>
                    <FlexWrapper justify={"center"} align={"center"} gap={"10px"}>
                        <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 65 48"/>
                        <S.LogoText>Notitanic</S.LogoText>
                    </FlexWrapper>
                    <HeaderMenu items={["Home", "About me", "Portfolio", "Contact"]}/>
                    <MobileMenu items={["Home", "About me", "Portfolio", "Contact"]}/>
                </S.HeaderFlexWrapper>
            </Container>
        </S.Header>

    );
};

