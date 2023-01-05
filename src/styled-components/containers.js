import styled from "styled-components";
import theme from "../json/theme.json";

// NAVIGATION ////////////////////////////////////
export const NavContainer = styled.div`
  background-color: ${theme.navigation.bg};
  color: ${theme.navigation.fg};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div`
  font-size: 1.5em;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.1em;
`;

export const NavLink = styled.div`
  color: ${theme.navigation.fg};
  margin: 10px;

  &:hover {
    color: ${theme.navigation.highlight};
  }
`;


// APP

export const UnitContainer = styled.div`
display: flex;
background-color: gray
`