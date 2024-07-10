import React from 'react';
import {S} from "./HeaderMenu_Styles"

type MenuProps = {
    items: Array<string>;
}

export const HeaderMenu: React.FC<MenuProps> = (props: MenuProps) => {
    return (
        <S.Menu>
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
        </S.Menu>
    );
};


