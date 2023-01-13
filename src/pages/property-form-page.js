import styled from "@emotion/styled"
import { colors,typography } from "../styles"
import {SectionFooter} from "../components/sections/sectionFooter"
import SectionMeetHome from "../components/sections/sectionMeetHome";
import { useState } from "react";
import { CreateAccountButton } from "../components/Button";
import { Icons } from "../utils";
import { createProperty } from "../services/properties-service";
const Div = styled.div`
width:100%;

`;
const H1Div=styled.div`
${typography.head.md};
width:440px;
height:48px;
letter-spacing: 0.25px;
margin-left:32px;
`;


const Label = styled.label`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  color: ${colors.gray.dark};
`;

const StyledInput = styled.input`
  
  padding: 0.5rem;
  style:none;
  background-color: white;
  color: ${colors.gray.dark};
  -webkit-appearance: none;
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 16px;
  width:80%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width:600px;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  height: 52px;
`;
const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 120px;
  height: 52px;
`;
const Select = styled.select`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 120px;
  height: 36px;
  background: ${colors.white};
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const TextArea = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 120px;
  height: 36px;
  
  background: ${colors.white};

  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const OperationTypeDiv = styled.div`
  width:105px;
  height:56px;
  gap:4px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:0px;
  margin-left:32px;
  margin-top:20px;
`;
const OperationTitle = styled.div`
  color:${colors.gray.medium};
  width:105px;
  height:16px;
  ${typography.text.xxs};
`;
const PropertyTitle = styled.div`
  color:${colors.gray.medium};
  width:99px;
  height:12px;
  ${typography.text.xxs};
  display:flex;
  align-items:center;
  margin-left:5px;
`;
const InputDiv = styled.div`
  width:356px;
  height:40px;
  gap:8px;
  margin-top:0px;
`;
const PetsDiv = styled.div`
  width:113px;
  height:36px;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  onChange,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default function PropertyFormPage(){
    
    return(
        <>
        <Div>
          <H1Div>Create a property listing</H1Div>
          
          
          <PropertyForm/>        
          
        </Div>
        <SectionFooter/>
        </>
    )
}

export function PropertyForm(){
    
  const [formdata, setFormdata] = useState({
      bedrooms:"",
      bathrooms:"",
      area:"",
      pet_allowed:"",
      price:"",
      mode:"rent",
      address:"",
      description:"",
      property_type:"",
      status:"",
      maintenance:"",
    })
    const [imagesPreview, setImagesPreview] = useState([])
    const [image, setImage] = useState(null)
    
    function handleChange(event){
      const {name, value} = event.target
      setFormdata({...formdata, [name]:value})
      console.log(formdata)
    }
      
    function handleFileSelect(event){
      const files = event.target.files;
      const imgsPrev = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          imgsPrev.push(reader.result);
          setImagesPreview(imgsPrev);
        }
        reader.readAsDataURL(file);
      }
    }
    function handleSubmit(event){
      event.preventDefault();
      createProperty(formdata)
    }

    return(
        <Form onSubmit={handleSubmit}>
          <Container>
            <OperationTypeDiv>
              <OperationTitle>OPERATION TYPE</OperationTitle>
              <ModeDiv>
                <RentDiv
                    onClick={()=>setFormdata({...formdata, "mode": "rent"})} 
                    style={{background: `${ formdata.mode === "rent" ? colors.pink.medium : colors.white }`,
                            color: `${ formdata.mode === "rent" ? colors.white : colors.gray.medium }`
                }}>
                  Rent
                </RentDiv>
                <SaleDiv
                    onClick={()=>setFormdata({...formdata, "mode": "sale"})} 
                    style={{background: `${ formdata.mode === "sale" ? colors.pink.medium : colors.white }`,
                        color: `${ formdata.mode === "sale" ? colors.white : colors.gray.medium }`
                }}>
                  Sale
                </SaleDiv>
              </ModeDiv>
            
              
            </OperationTypeDiv>
            <InputDiv style={{width:"600px"}}>
            <Input
            label={"ADDRESS"}
            id="address"
            name="address" 
            type="text" 
            value={formdata.address}
            onChange={handleChange}
            placeholder="start typing to autocomplete"/>
            </InputDiv>

            <InputDiv>
              <Input
                label={"MONTHLY RENT"}
                id="price"
                name="price" 
                type="text" 
                value={formdata.price}
                onChange={handleChange}
                placeholder="2000"/>    
            </InputDiv>
        
            <InputDiv>
              <Input
                label={"MAINTANANCE"}
                id="maintenance"
                name="maintenance" 
                type="text" 
                value={formdata.maintenance}
                onChange={handleChange}
                placeholder="100"/>
            </InputDiv>
            
            <InputDiv >
              <PropertyTitle>PROPERTY TYPE</PropertyTitle>

              <input id="apartment" name="apartment"type="checkbox"/>
              <label htmlFor="apartment">Apartment</label>
              <input id="house" name="house"type="checkbox"/>
              <label htmlFor="house">House</label>
            </InputDiv>
            <SelectContainer>
              <SelectDiv>
                <Label htmlFor="bedrooms">BEDROOMS</Label>
                <Select id="bedrooms" name="bedrooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                </Select>
              </SelectDiv>
              <SelectDiv>
                <Label htmlFor="bathroom">BATHROOMS</Label>
                <Select id="bathrooms" name="bathrooms">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </SelectDiv>
              <SelectDiv>
                <Label htmlFor="area">AREA IN M2</Label>
                <TextArea id="area" name="area" placeholder="##"type="number"></TextArea>
              </SelectDiv>
            </SelectContainer>
            <PetsDiv>
                <input id="pets" name="pets"type="checkbox"/>
                <Label htmlFor="pets">Pets Allowed</Label>
            </PetsDiv>

            <PetsTextDiv>Allowing pets increases the likehood of renters liking the property by 9001%.
              It also makes you a better person
            </PetsTextDiv>

            <div style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor="about">ABOUT THIS PROPERTY</label>
              <textarea id="about" name="about" placeholder="My apartment is great because..." type=""></textarea>
              <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <h1>Photos</h1>
              <label htmlFor="file">UPLOAD AS MANY PHOTOS AS YOU WISH</label>
              <input id="file" name="file"  type="file" multiple onChange={handleFileSelect}></input>
              <ImageWrapper>
                {imagesPreview.map((imagePreview, index) => {
                  console.log(imagesPreview)
                  return (
                      <ImgContainer>
                        <IconContainer>
                          {Icons.closed}
                        </IconContainer>
                        <PrevImg key={index} src={imagePreview} alt="Preview" />
                      </ImgContainer>
                  )
                })}
              </ImageWrapper>
            </div>
          </Container>
          <CreateAccountButton>Publish Property Listing</CreateAccountButton>
        </Form>
    )
}
const IconContainer = styled.div`
  width:100%;
  height:20px;
  display:flex;
  justify-content:flex-end;
`
const ImageWrapper = styled.div`
  padding:8px;
  display:flex;
  gap:12px;
  background: ${colors.pink.shallow};
  min-width:600px;
`
const ImgContainer = styled.div`

  display:flex;
  align-items:center;
  flex-direction:column;
  width:120px;
  height:120px;
  background:${colors.gray.light};
  border-radius:8px;
  
`
const PrevImg = styled.img`
  width:100%;
`
const PetsTextDiv= styled.div`
color:${colors.gray.medium};
${typography.text.xs};
width:468px;
height:32px;
display:flex;
flex

`;

const RentDiv = styled.div`
width:50px;
height:36px;
padding:8px;
gap:10px;
display:flex;
border-radius: 8px 0px 0px 8px;
align-items: center;

`;
const SaleDiv = styled.div`
width:50px;
height:36px;
padding:8px;
gap:10px;
display:flex;
border-style:solid;
border-radius: 8px 0px 0px 8px;
align-items: center;

`;

const ModeDiv = styled.div`
display:flex;
flex-wrap:wrap;

`;





