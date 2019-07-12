import React from 'react';
import { NavLink } from 'react-router-dom';

import footerStyle from './footer.scss';

import { FOOTER_LINKS } from '../../../data/views-schema/footer';

function Footer() {
  return (
    <footer
      className={`display-flex flex-items-align-center padding-all-15 ${footerStyle['footer']}`}
    >
      <nav>
        <ul className="display-flex">
          {FOOTER_LINKS.map((footerLink) => (
            <li key={footerLink.name}>
              <NavLink className={footerStyle['links']} to={footerLink.linkToLocation}>
                {footerLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
