import React, { useState, useRef } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink, StyledMenuFooter, StyledMenuLinks, StyledToggleTheme, StyledSun, StyledMoon } from "./Menu.styled";
import { useOnClickOutside } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const theme = useSelector(({theme}) => theme)

  const navigate = useNavigate()
  const dispatch = useDispatch()  

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open} theme={theme}>
        <StyledMenuLinks>
          <StyledLink onClick={() => {close(); navigate('/blog')}}>Home</StyledLink>
          <StyledLink onClick={() => close()}>Add post</StyledLink>
        </StyledMenuLinks>
        <StyledMenuFooter>
          <StyledToggleTheme>
            <StyledSun theme={theme} onClick={() => dispatch({type: 'TOGGLE_THEME', payload: 'light'})}>&#9788;</StyledSun>
            <StyledMoon theme={theme} onClick={() => dispatch({type: 'TOGGLE_THEME', payload: 'dark'})}>&#9790;</StyledMoon>
          </StyledToggleTheme>
          <StyledLink onClick={() => {
            close();
            localStorage.removeItem('access')
            navigate('/signIn')
            }}>Log Out</StyledLink>
          <StyledLink onClick={() => {close(); navigate('/signIn')}}>Sign In</StyledLink>
        </StyledMenuFooter>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;