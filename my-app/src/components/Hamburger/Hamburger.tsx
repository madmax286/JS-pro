import React, { FC } from "react";

import { StyledHamburger } from "./Hamburger.styled";

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger: FC<Props> = ({open, setOpen}) => (
  <StyledHamburger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger;
