import styled from "styled-components";
import { colors } from "../../global";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 20vw;
  position: fixed;
  background-color: ${colors.dodgerblue};
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${colors.pearl};
  text-decoration: none;

  &:hover {
    color: ${colors.dodgerblue};
    background-color: rgb(237, 237, 237);
  }
`
export const StyledMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`
export const StyledMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

`