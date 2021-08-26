import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
export const NavHeader = styled.header``;
export const NavigationLink = styled(NavLink)`
  color: #8f8f9f;
  font-weight: normal;
  text-decoration: none;

  margin: 0px;
  &: hover {
    color: #ff9f9f;
    font-weight: normal;
    text-decoration: none;
    cursor: pointer;
    background-color: #ffffff;
  }
`;

export const Nav = styled.nav``;
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding: 0 10px;
`;
export const NavListItem = styled.li`
  padding: 20px;
`;
