import { Container, StyledButton } from 'components/common/CommonStyle';
import React, { useState } from 'react';
import { Hamburger, HeaderContainer, HeaderTitle, Wrapper } from './HeaderStyle';

import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "components/Navbar";

export default function Header({ setTheme }) {
    const [sideMenu, setSideMenu] = useState(false);
    return(
        <Wrapper>
            <Container>
                <HeaderContainer>
                    <HeaderTitle to="/">Foody</HeaderTitle>
                    <Navbar setTheme={setTheme} sideMenu={sideMenu}/>
                    <StyledButton>Reserve Table</StyledButton>
                    <Hamburger onClick={() => setSideMenu(!sideMenu)}>
                        <GiHamburgerMenu />
                    </Hamburger>
                </HeaderContainer>
            </Container>
        </Wrapper>
    ) 
}