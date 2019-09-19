import React from 'react';
import { useSelector } from 'react-redux';

import { Status } from './styles';

export default function StatusUser() {
  const user = useSelector(state => state.user);
  return (
    <Status logged={user.logged}>
      <p>{user.logged ? JSON.stringify(user) : 'Usuário não logado'}</p>
    </Status>
  );
}
