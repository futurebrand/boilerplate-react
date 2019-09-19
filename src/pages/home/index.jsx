import React, { useState, useEffect } from 'react';
import Api from '../../services';
import StatusUser from '../../components/StatusUser';
import { Container, List } from './styles';

export default function Home() {
  const [ members, setMembers ] = useState([]);

  useEffect( () => {
    async function loadMembers(){
      const membersList = await Api.Usuario.loadMembers();
      setMembers(membersList);
    }
    loadMembers();
  }, []);

  return (
    <Container>
      <h1>Página Inicial</h1>
      <br/>

      <StatusUser />
      
      <br/>
      
      <h2>Membros</h2>
      <List>
        {
          members && members.length > 0 && members.map(m => <li key={m.id}>{m.login}</li>)
        }
      </List>
    </Container>
  );
}
