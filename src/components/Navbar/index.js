import React from "react";
import { NavbarContainer, NavItem, NavList, NavIcon, NavLink } from "./NavbarStyle";

import { BsSun } from "react-icons/bs"

export default function NavBar({ sideMenu, setTheme }) {
    return(
        <NavbarContainer>
            <NavList sideMenu={sideMenu}>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Reviews</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/">Chefs</NavLink>
                </NavItem>
                <NavIcon onClick={setTheme}>
                    <BsSun />
                </NavIcon>
            </NavList>
        </NavbarContainer>
    )
}