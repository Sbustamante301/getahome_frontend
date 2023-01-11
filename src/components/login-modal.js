import styled from "@emotion/styled"
import { useState } from "react"
import { useAuth } from "../context/auth-context"
import { colors } from "../styles"
import { Icons } from "../utils"
import { LoginButton } from "./Button"
import Input from "./Input"

const Wrapper = styled.div`
  position: absolute;
  top:0;
  bottom:0,
  left:0;
  right:0;
  background: ${colors.gray.light};
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
`
const LoginForm = styled.form`
  position:relative;
  margin-top:96px;
  background: ${colors.white};
  width: 388px;
  height: 256px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display:flex;
  flex-direction:column;
  gap:8px;
  justify-content:center;
  align-items:center;
  padding:16px 16px;
`
const Text=styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`
const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;
const CloseDiv = styled.div`
  position:absolute;
  top:0;
  right:0;
`

export default function LoginModal(){
  const { login, error, setIsOpenModal } = useAuth()
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  function handleLogin(event){
    event.preventDefault();
    login(form);
  }

  function handleChangeInput(event){
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return(
    <Wrapper>
      <LoginForm onSubmit={handleLogin}>
        <CloseDiv onClick={()=>setIsOpenModal(false)}>
          {Icons.closed}
        </CloseDiv>
        <Text>Login</Text>        
        <Input value={form.email} onChange={handleChangeInput} id="email" label="EMAIL" name="email" type="text" placeholder={"user@mail.com"}/>
        <Input value={form.password} onChange={handleChangeInput} id="password" label="PASSWORD" name="password" type="password" placeholder={"******"}/>
        {error && <Error size="sm">{error}</Error>}
        <LoginButton style={{marginTop:"8px"}}>Login</LoginButton>
      </LoginForm>
    </Wrapper>
  )
}