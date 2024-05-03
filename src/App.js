import React, { useState } from "react";
import { Container, Image, ContainerItens, Title, InputLabel, Input, Button, User } from './styles';
import People from './assets/peopple.svg';
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

const App = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()

  const addNewUser = () => {
    setUsers([...users, {id: Math.random(), name, age}])
  }

  const changeImputname = (event) => {
    setName(event.target.value)
  }

  const changeImputAge = (event) => {
    setAge(event.target.value)
  }

  return (
    <Container>
      <Image src={People} alt="people" />
      <ContainerItens>
        <Title> Hello !!!</Title>

        <Input onChange={changeImputname} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeImputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar
          <img src={Arrow} alt="seta" />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button> <img src={Trash} alt="lata-de-lixo"/> </button>
            </User>
          ))}
        </ul>
      </ContainerItens>

    </Container>
  )

}

export default App;
