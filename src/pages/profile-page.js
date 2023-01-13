import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/auth-context";
import { updateUser } from "../services/users-service";
import { colors } from "../styles";

const Form = styled.form`
  display: flex;
  flex-direction:column;
  gap:16px;
  align-items:center;
  width: 400px;
  height:500px;
  padding:20px;
  border: 1px solid ${colors.pink.medium};
  border-radius:20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`
const Wrapper = styled.div`
  padding:80px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Text = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
`
export default function ProfilePage(){
  const {user} = useAuth();
  const navigate = useNavigate(); 
  const [newUser, setNewUser] = useState({...user})

  function handleChange(event){
    const {name, value} = event.target
    setNewUser({...newUser, [name]:value})
  }

  function handleSubmit(event){
    event.preventDefault();
    updateUser(newUser).then(console.log).catch(console.log)
    navigate("/home")
  }
  return(
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Text>Profile</Text>
        <Input value={newUser.name} onChange={handleChange} label={"NAME"} id={"name"} placeholder={"Set your name"} name={"name"}/>
        <Input value={newUser.email} onChange={handleChange} label={"EMAIL"} id={"email"} placeholder={"Set your email"} name={"email"}/>
        <Input value={newUser.phone} onChange={handleChange} label={"PHONE"} id={"phone"} placeholder={"Set your phone"} name={"phone"}/>
        {/* <Input label={"EMAIL"} id={"email"} placeholder={"Set your email"} name={"email"}/> */}
        <Button>Update</Button>
      </Form>
    </Wrapper>
  )
}