import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as UserActions from 'store/modules/user/actions';

import ILogo from 'assets/images/futurebrand-logo-black.svg';
import { Wrapper, Logo } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function btnSetUser() {
    dispatch(UserActions.setUser({
      logged: true,
      name: 'Gerson Lima',
      token: 'asd98f7as9d87f89asd89f7a98s7df7a'
    }));
  }

  return (
    <header>
      <Wrapper>
        <Logo to="/">
          <img src={ILogo} alt="Logo Future Brand"/>
        </Logo>

        <nav>
          <ul>
            <li>
              <Link to="/">
                Página Inicial
              </Link>
            </li>
            <li>
              <Link to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={btnSetUser}>Set User</button>
      </Wrapper>
    </header>
  );
}
