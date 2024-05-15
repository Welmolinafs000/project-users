import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';

import { Container, Image, ContainerItens, Title, InputLabel, Input, Button, User } from './styles';
import People from './assets/peopple.svg';
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = async () => {

    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
    })

    setUsers([...users, newUser]);


  }

  useEffect(() => {
    const fatchUsers = async () => {
      const { data: newUsers } = await axios.get('http://localhost:3001/users')
      setUsers(newUsers)
    }
    fatchUsers()
  }, [])

  const deleteUser = (userId) => {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }


  return (
    <Container>
      <Image src={People} alt="people" />
      <ContainerItens>
        <Title> Hello !!! </Title>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar
          <img src={Arrow} alt="seta" />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>

    </Container>
  )

}

export default App;
