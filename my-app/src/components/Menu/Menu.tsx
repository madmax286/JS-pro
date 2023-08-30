import React, { useState, useRef } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink, StyledMenuFooter, StyledMenuLinks } from "./Menu.styled";
import { useOnClickOutside } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const navigate = useNavigate()

  useOnClickOutside(node, () => setOpen(false));  

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledMenuLinks>
          <StyledLink onClick={() => {close(); navigate('/blog')}}>Home</StyledLink>
          <StyledLink onClick={() => close()}>Add post</StyledLink>
        </StyledMenuLinks>
        <StyledMenuFooter>
          <StyledLink onClick={() => {close(); navigate('/signUp')}}>Log Out</StyledLink>
          <StyledLink onClick={() => {close(); navigate('/signIn')}}>Sign In</StyledLink>
        </StyledMenuFooter>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;