import { colors,typography} from "../styles"
import styled from "@emotion/styled"
import SectionFooter from "../components/sections/sectionFooter"
import landlord from "../assets/landlord.svg"
import homeseeker from "../assets/homeseeker.svg"
import { Icons } from "../utils"
import { useState } from "react"
import { CreateAccountButton } from "../components/Button"
import { createUser } from "../services/users-service"
import Input from "../components/Input"

// background:${colors.pink.shallow};
const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 352px;
    padding:100px;
    
`;

// background:${colors.white};
const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 352px;
    
`;

const Div= styled.div`
background: rgb(255,255,255);
background: linear-gradient(360deg, rgba(255,255,255,1) 50%, rgba(244, 143, 177, 0.15) 50%);
width:100%;
height:704px;
`;
const Div2= styled.div`
background: rgb(255,255,255);
background: linear-gradient(360deg, rgba(255,255,255,1) 50%, rgba(244, 143, 177, 0.15) 50%);
width:100%;
height:704px;
display:flex;
align-items:center;
flex-direction:column;

`;

const Title = styled.div`
${typography.head.sm};
color:#1D4044;


width: 520px;
height: 196px;
text-align: center;
display:flex;
align-items:center;
flex-direction:row;
`;
const SubTitle = styled.div`
${typography.head.xl};
color:#1D4044;
width:677.983px;
height:88px;

`;

const Img= styled.img`
`;

const ImgDiv= styled.div`
width:280px;
height:274px;
display:flex;
flex-direction:column;
align-items:center;
padding: 16px 20px;
gap: 8px;
background:${colors.white};
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
margin:30px;
margin-top:-150px;
padding:0px;

`;

const ImgTitle=styled.div`
${typography.head.xs}
${colors.gray.dark}

`;

const ImgSubtitle=styled.div`
${typography.head.xxxs}
${colors.gray.dark}
`;

 function Hidden({HandleComponent}){
    return(
        <Div>
        <Section1>
            <Title>Selecciona el perfil con el que te identificas</Title>
                <SubTitle>Que estas buscando?</SubTitle>
        </Section1>
        <Section2>
            <ImgDiv onClick={HandleComponent}>
                <Img src={landlord}/>
                <ImgTitle>Landlord</ImgTitle>
                <ImgSubtitle>You want to rent or sell a home</ImgSubtitle>
            </ImgDiv>
            <ImgDiv onClick={HandleComponent}>
                <Img src={homeseeker}/>
                <ImgTitle>Homeseeker</ImgTitle>
                <ImgSubtitle>You want to find a home</ImgSubtitle>
            </ImgDiv>
        </Section2>
        <SectionFooter/>
        </Div>

    )
}

const Form = styled.form`
background:${colors.white};
border-width:thin;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
width:388px;
height:468px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:70px;
-right:20px;


`;

const DivForm=styled.div`
background:${colors.white};
border-width:thin;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
width:388px;
height:468px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:70px;
-right:20px;

`;

const FormTitle= styled.div`


`;

const Label = styled.label`
${colors.pink.dark};
${typography.text.xxs};
`;

// function SignupForm(){
//     return(
//         // <form>
//         //     <label for="name">Name</label>
//         //     <input type="name" placeholder="John Doe" id=""></input>




//         // </form>
//         <Div2>
//         <Form>
//           <DivForm className="form-body">
//               <DivForm className="username">
//                   <Label className="form__label" for="firstName">NAME</Label>
//                   <input className="form__input" type="text" id="firstName" placeholder="John Doe"/>
//               </DivForm>
//               <DivForm className="email">
//                   <Label className="form__label" for="email">EMAIL </Label>
//                   <input  type="email" id="email" className="form__input" placeholder="user@mail.com"/>
//               </DivForm>
//               <DivForm className="phone">
//                   <Label className="form__label" for="phone">PHONE</Label>
//                   <input  type="text" id="phone" className="form__input" placeholder="999-999-999"/>
//               </DivForm>
//               <DivForm className="password">
//                   <Label className="form__label" for="password">PASSWORD </Label>
//                   <input className="form__input" type="password"  id="password" placeholder="Password"/>
//               </DivForm>
//               <DivForm className="confirm-password">
//                   <Label className="form__label" for="confirmPassword">PASSWORD CONFIRMATION</Label>
//                   <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
//               </DivForm>
//           </DivForm>
//           {/* <div class="footer">
//               <button type="submit" class="btn">Register</button>
//           </div> */}
//           <CreateAccountButton>Create Account</CreateAccountButton>
//       </Form>
//       </Div2>    
//     )
// }

function SignupForm(){
    const [formdata, setFormdata] = useState({
        name:"",
        email:"",
        phone:"",
        password_digest:"",
        passwordConfirmation:"",
      })


      function handleChange(event){
        const {name, value} = event.target
        setFormdata({...formdata, [name]:value})
      }
      
      function handleSubmit(event){
        const {passwordConfirmation,...newForm} = formdata;
        event.preventDefault();
        createUser(formdata).then(console.log).catch(console.log)
      }
      return(
        <Div2>
        <DivForm>
      <form onSubmit={handleSubmit}>
        <Input
          label={"NAME"}
          id="name"
          name="name" 
          type="text" 
          value={formdata.name}
          onChange={handleChange}
          placeholder="John Doe"/>
        <Input
          label={"EMAIL"}
          id="email"
          name="email" 
          type="email" 
          value={formdata.email}
          onChange={handleChange}
          placeholder="user@mail.com"/>
          <Input
          label={"PHONE"}
          id="phone"
          name="phone" 
          type="text" 
          value={formdata.phone}
          onChange={handleChange}
          placeholder="999-999-999  "/>
          <Input
          label={"PASSWORD"}
          id="password_digest"
          name="password_digest" 
          type="password" 
          value={formdata.password_digest}
          onChange={handleChange}
          placeholder="******"/>
          <Input
          label={"PASSWORD CONFIRMATION"}
          id="passwordConfirmation"
          name="passwordConfirmation" 
          type="password" 
          value={formdata.passwordConfirmation}
          onChange={handleChange}
          placeholder="******"/>
        <CreateAccountButton>Create Account</CreateAccountButton>
      </form>
    </DivForm>
    </Div2>
    




      )
}


export default function SignupPage(){
    const [newUserType,SetNewUserType] = useState(null);
    const [open,setOpen] = useState(false)
     function HandleComponent(){
        setOpen(!open)
    }
    return(
        
        <>
            {open===true?<SignupForm/>:<Hidden HandleComponent={HandleComponent}/>}
        
        </>
    )
}