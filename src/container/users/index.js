import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Container, Image, ContainerItens, Title, Button, User } from './styles';
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'


const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  console.log(navigate)

  useEffect(() => {
    const fatchUsers = async () => {
      const { data: newUsers } = await axios.get('http://localhost:3001/users')
      setUsers(newUsers)
    }
    fatchUsers()
  }, [])

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  const goBackPage = () => {
    navigate("/")
  }

  return (
    <Container>
      <Image src={Avatar} alt="people" />
      <ContainerItens>
        <Title> Users !!! </Title>

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

        <Button onClick={goBackPage} >
        <img src={Arrow} alt="seta" /> Back
        </Button>
      </ContainerItens>

    </Container>
  )

}

export default Users;
