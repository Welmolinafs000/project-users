import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Container, Image, ContainerItens, Title, InputLabel, Input, Button } from './styles';
import People from '../../assets/peopple.svg';
import Arrow from '../../assets/arrow.svg'

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  const addNewUser = async () => {

    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value,

    })
    setUsers([...users, newUser]);

    navigate("/Users")
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

        <Button  onClick={addNewUser}> Register
          <img src={Arrow} alt="seta" />
        </Button>

      </ContainerItens>

    </Container>
  )

}

export default App;
