import React from 'react';
import { Link } from '@reach/router';
import { css } from 'emotion';

const baseStyle = css`
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 20px;
`;

const navClass = css`
  ${baseStyle};
  background-color: white;
  color: black;
`;

const activeNavClass = css`
  ${baseStyle};
  background-color: green;
  color: white;
`;

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return { className: isCurrent ? activeNavClass : navClass };
    }}
  />
);

export default NavLink;
