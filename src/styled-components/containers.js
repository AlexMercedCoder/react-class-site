import styled from "styled-components";
import theme from "../json/theme.json";

// NAVIGATION ////////////////////////////////////
export const NavContainer = styled.div`
  background-color: ${theme.navigation.bg};
  color: ${theme.navigation.fg};
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 500px){
      flex-direction: column;
  }
`;

export const NavLogo = styled.div`
  font-size: 1.5em;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.1em;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    font-size: 0.8em;
    width: 300px;
    margin: auto;
  }
`;

export const NavLink = styled.div`
  color: ${theme.navigation.fg};
  font-weight: 900;
  margin: 0 20px;

  &:hover {
    color: ${theme.navigation.highlight};
  }

  @media (max-width: 500px) {
    margin: 8px;
  }
`;

// APP

export const AppContainer = styled.div`
  display: flex;
  background-color: ${theme.app.bg};
  color: ${theme.app.fg};
  padding: 10px;
  font-size: 1.3em;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const AppLink = styled.div`
  color: ${theme.app.fg};
  margin: 10px;

  @media (max-width: 500px) {
    font-size: 0.6em;
  }

  &:hover {
    color: ${theme.app.highlight};
  }
`;

// Unit

export const UnitWrapper = styled.div`
background-color: ${theme.unit.bg};
color: ${theme.unit.fg};
padding: 10px;
text-align: center;
width: 90%;
border-radius: 8px;
margin: 8px auto;
`

export const UnitContainer = styled.div`
  display: flex;
  background-color: ${theme.unit.bg};
  color: ${theme.unit.fg};
  padding: 10px;
  flex-wrap: wrap;
  font-size: 1.3em;
  width: 80%;
  margin: 10px auto;
  border-radius: 50px;
  border: ${theme.unit.border};
  justify-content: space-around;
`;

export const UnitLink = styled.div`
  color: ${theme.unit.fg};
  margin: 10px;

  @media (max-width: 500px) {
    font-size: 0.6em;
  }

  &:hover {
    color: ${theme.unit.highlight};
  }
`;

// Week

export const WeekWrapper = styled.div`
background-color: ${theme.week.bg};
color: ${theme.week.fg};
padding: 10px;
text-align: center;
`

export const WeekContainer = styled.div`
  display: flex;
  background-color: ${theme.week.bg};
  color: ${theme.week.fg};
  padding: 10px;
  flex-wrap: wrap;
  font-size: 1.3em;
  width: 80%;
  margin: 10px auto;
  border-radius: 50px;
  border: ${theme.week.border};
  justify-content: space-around;
`;

export const WeekLink = styled.div`
  color: ${theme.week.fg};
  margin: 10px;

  @media (max-width: 500px) {
    font-size: 0.6em;
  }

  &:hover {
    color: ${theme.week.highlight};
  }
`;

// Day

export const DayWrapper = styled.div`
background-color: ${theme.day.bg};
color: ${theme.day.fg};
padding: 10px;
border-radius: 8px;
width: 60%;
margin: auto;
border: ${theme.day.border};
text-align: center;
`

export const DayContainer = styled.div`
  display: flex;
  background-color: ${theme.day.bg};
  color: ${theme.day.fg};
  padding: 10px;
  flex-wrap: wrap;
  font-size: 1.3em;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
  border-radius: 50px;
  border: ${theme.day.border};
  justify-content: space-around;
`;

export const DayLink = styled.div`
  color: ${theme.day.fg};
  margin: 10px;

  @media (max-width: 500px) {
    font-size: 0.6em;
  }

  &:hover {
    color: ${theme.day.highlight};
  }
`;