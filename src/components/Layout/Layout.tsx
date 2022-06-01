import { useEffect, useState } from 'react';

import Menu from '../Menu';

import { Content, GlobalStyles, LayoutWrapper } from './Layout.styles';

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const hideMenuAtPosition = 100;

  const menuControl = () => {
    if (window.scrollY > hideMenuAtPosition) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', menuControl);

      return () => {
        window.removeEventListener('scroll', menuControl);
      };
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <LayoutWrapper>
        {showMenu && <Menu data-testid="menubar" />}
        <Content>{children}</Content>
      </LayoutWrapper>
    </>
  );
}
