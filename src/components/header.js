import general from "../json/general.json";
import { NavContainer, NavLogo, NavLinks, NavLink } from "../styled-components/containers";
import { NavLogoImage } from "../styled-components/inline";

export default function Navigation() {
  return (
    <NavContainer>
      <NavLogo>{general.logo_image_url ? <NavLogoImage src={general.logo_image_url} alt={general.title} /> : null}{general.title}</NavLogo>
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
