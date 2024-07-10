import React, {useState} from 'react';
import {S} from "./MobileMenu_Styles"

type MenuProps = {
    items: Array<string>;
}

export const MobileMenu: React.FC<MenuProps> = (props: MenuProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MenuWrapper isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <ul>
                    {props.items.map((item, index) => {
                        return (
                            <S.Item key={index}>
                                <S.Link>
                                    {item}
                                    <S.Mask>
                                        <span>{item}</span>
                                    </S.Mask>
                                    <S.Mask>
                                        <span>{item}</span>
                                    </S.Mask>
                                </S.Link>
                            </S.Item>
                        );
                    })}
                </ul>
            </S.MenuWrapper>

        </S.MobileMenu>
    );
};

