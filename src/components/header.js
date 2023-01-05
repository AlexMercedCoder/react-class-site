import general from "../json/general.json";
import { NavContainer, NavLogo, NavLinks, NavLink } from "../styled-components/containers";

export default function Navigation() {
  return (
    <NavContainer>
      <NavLogo>{general.title}</NavLogo>
      <NavLinks>
        {general.navigation.map((item, index) => {
          return (
            <a href={item.url} key={index}>
              <NavLink>{item.text}</NavLink>
            </a>
          );
        })}
      </NavLinks>
    </NavContainer>
  );
}
