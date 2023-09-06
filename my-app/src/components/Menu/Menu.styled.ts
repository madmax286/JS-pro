import styled from "styled-components";
import { colors } from "../../global";

export const StyledMenu = styled.nav<{ open: boolean, theme: 'light' | 'dark' }>`
  top: 50px;
  left: 0;
  height: 100vh;
  width: 20vw;
  position: fixed;
  /* background-color: ${colors.dodgerblue}; */
  background-color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : 'dodgerblue'};
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StyledLink = styled.a<{theme: 'light' | 'dark'}>`
  padding: 0;
  font-size: 2rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
  color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : 'rgb(237, 237, 237)'};

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
  padding-bottom: 100px;
`
export const StyledToggleTheme = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 30px;
`
export const StyledSun = styled.div<{theme: 'light' | 'dark' }>`
  width: 50%;
  text-align: center;
  background-color: ${({theme}) => theme === 'dark' ? '' : 'rgb(237, 237, 237)'};
  color: ${({theme}) => theme === 'dark' ? `` : `${colors.dodgerblue}`};

    &:hover {
      color: ${colors.dodgerblue};
      background-color: rgb(237, 237, 237);
      cursor: pointer;
    }
`
export const StyledMoon = styled.div<{theme: 'light' | 'dark' }>`
  width: 50%;
  text-align: center;
  background-color: ${({theme}) => theme === 'light' ? '' : 'rgb(237, 237, 237)'};
  color: ${({theme}) => theme === 'light' ? `` : `${colors.dodgerblue}`};

    &:hover {
      color: ${colors.dodgerblue};
      background-color: rgb(237, 237, 237);
      cursor: pointer;
    }
`
