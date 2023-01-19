import styled from "@emotion/styled"
import { colors,typography } from "../styles"
import {SectionFooter} from "../components/sections/sectionFooter"
import SectionMeetHome from "../components/sections/sectionMeetHome";
import { useState } from "react";
import { CreateAccountButton } from "../components/Button";
import { Icons } from "../utils";
import { createProperty } from "../services/properties-service";
import { useAuth } from "../context/auth-context";
import Mapa from "../components/mapa";
import Home from "../components/mapa";
import { SectionFooter2 } from "../components/sections/sectionFooter";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
width:100%;
min-height:800px;

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
  
  gap: 30px;
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
  margin-left:0px;
  margin-top:-10px;
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

const Map = styled.div`
  width: 760px;
  height: 760px;
  margin-bottom: 32px;
  border: 1px solid ${colors.pink.dark}
`;
const textMap = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  color: ${colors.gray.dark};
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
  const {properties, setProperties, coordinates, setCoordinates, userType} = useAuth()
  const [formdata, setFormdata] = useState({
      bedrooms:1,
      bathrooms:1,
      area:"",
      pet_allowed:false,
      price:"",
      mode:"rent",
      // address:"",
      description:"",
      property_type:"apartment",
      maintenance:"",
      status:true,
      district: "",
      province:"", 
      images:null
    })
  const [imagesPreview, setImagesPreview] = useState([])
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  
  function handleChange(event){
    const {name, value} = event.target
    setFormdata({...formdata, [name]:value})
    console.log(formdata)
  }
      
  function handleFileSelect(event){
    const files = event.target.files;
    setFormdata({...formdata, "images":files});
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
    console.log(imgsPrev)
    
  }

    function handleSubmit2(event){
      
      event.preventDefault();
      const data = new FormData();
      data.append("property[bedrooms]", formdata.bedrooms);
      data.append("property[bathrooms]", formdata.bathrooms);
      data.append("property[area]",formdata.area);
      data.append("property[pet_allowed]", formdata.pet_allowed);
      data.append("property[description]", formdata.description);
      data.append("property[price]", formdata.price);
      data.append("property[mode]", formdata.mode);
      data.append("property[property_type]", formdata.property_type);
      data.append("property[status]", formdata.status);
      data.append("property[latitud]", coordinates.lat);
      data.append("property[longitud]", coordinates.lng);
      data.append("property[district]", formdata.district);
      data.append("property[province]", formdata.province);
      data.append("property[maintenance]", formdata.maintenance);
      for (const image of Array.from(event.target.images.files)) {
        data.append("property[images][]", image);
      }
      // data.append("property[images]", Array.from(event.target.images.files));
      // data.append("property[image]", event.target.images.files);

      createProperty(data).then(response=>{
        setProperties([...properties, response])

      }).catch();
      navigate("/home")
    }

    function handleType(event){
      if (event.target.id === "sale"){
        setFormdata({...formdata, "mode": event.target.id, "maintanance":"","pet_allowed":false});
      }else{
        setFormdata({...formdata, "mode": event.target.id});
      }
    }
    function deleteImage(event,index){
      setImagesPreview(imagesPreview.filter((_img, i)=>i !== index))
    }

    return(
      (userType === "landlord") ? 
   
        <Form onSubmit={handleSubmit2}>
          <Container>
            <OperationTypeDiv>
              <OperationTitle>OPERATION TYPE</OperationTitle>
              <ModeDiv>
                <RentDiv id="rent"
                    onClick={handleType} 
                    style={{background: `${ formdata.mode === "rent" ? colors.pink.medium : colors.white }`,
                            color: `${ formdata.mode === "rent" ? colors.white : colors.gray.medium }`
                }}>
                  Rent
                </RentDiv>
                <SaleDiv id="sale"
                    onClick={handleType} 
                    style={{background: `${ formdata.mode === "sale" ? colors.pink.medium : colors.white }`,
                        color: `${ formdata.mode === "sale" ? colors.white : colors.gray.medium }`
                }}>
                  Sale
                </SaleDiv>
              </ModeDiv>
            </OperationTypeDiv>
            <InputDiv>
              <Input
                label={"MONTHLY RENT"}
                id="price"
                name="price" 
                type="number" 
                value={formdata.price}
                onChange={handleChange}
                placeholder="2000"/>    
            </InputDiv>
            <InputDiv>
              <Input
                label={"PROVINCE"}
                id="province"
                name="province" 
                type="text" 
                value={formdata.province}
                onChange={handleChange}
                placeholder="Lima"/>    
            </InputDiv>
            <InputDiv>
              <Input
                label={"DISTRICT"}
                id="district"
                name="district" 
                type="text" 
                value={formdata.district}
                onChange={handleChange}
                placeholder="Miraflores"/>    
            </InputDiv>
 
            <textMap>CHOOSE YOUR LOCATION</textMap>
            <Map>
              <Home/>
            </Map>
            
            {formdata.mode === "rent" ? <InputDiv>
              <Input
                label={"MAINTANANCE"}
                id="maintenance"
                name="maintenance" 
                type="number" 
                value={formdata.maintenance}
                onChange={handleChange}
                placeholder="100"/>
            </InputDiv> : null}
            <InputDiv >
              <PropertyTitle>PROPERTY TYPE</PropertyTitle>

              <input style={{accentColor:"#F48FB1"}} onChange={()=>setFormdata({...formdata, "property_type":"apartment"})} id="apartment" name="apartment"type="checkbox" checked={formdata.property_type==="apartment"}/>
              <label htmlFor="apartment">Apartment</label>
              <input style={{accentColor:"#F48FB1"}} onChange={()=>setFormdata({...formdata, "property_type":"house"})} id="house" name="house"type="checkbox" checked={formdata.property_type==="house"}/>
              <label htmlFor="house">House</label>
            </InputDiv>
            <SelectContainer>
              <SelectDiv>
                <Label htmlFor="bedrooms">BEDROOMS</Label>
                <Select onChange={handleChange} id="bedrooms" name="bedrooms">
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
                <Select onChange={handleChange} id="bathrooms" name="bathrooms">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </SelectDiv>
              <InputDiv>
                <Input
                  style={{width:140, height:35}}
                  label={"AREA IN M2"}
                  id="area"
                  name="area" 
                  type="number" 
                  value={formdata.area}
                  onChange={handleChange}
                  placeholder="100"/>
            </InputDiv>
            </SelectContainer>
            
            { formdata.mode==="rent" ?<>
              
              <PetsDiv>
                <input style={{accentColor:"#F48FB1"}} id="pet_allowed" name="pet_allowed"type="checkbox" checked={formdata.pet_allowed} onChange={(e)=>setFormdata({...formdata, "pet_allowed":!formdata.pet_allowed})}/>
                <Label htmlFor="pet_allowed">Pets Allowed</Label>
              </PetsDiv>
              <PetsTextDiv>Allowing pets increases the likehood of renters liking the property by 9001%.
                It also makes you a better person
              </PetsTextDiv> 
              
              </>: null}

            <div style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor="about">ABOUT THIS PROPERTY</label>
              <textarea style={{resize:'none'}} onChange={handleChange} value={formdata.description} id="description" name="description" placeholder="My apartment is great because..." type=""></textarea>

              <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <PhotosH1>Photos</PhotosH1>
              <label htmlFor="images">UPLOAD AS MANY PHOTOS AS YOU WISH</label>
              <input id="images" name="images"  type="file" multiple onChange={handleFileSelect}></input>
              <ImageWrapper>
                {imagesPreview.map((imagePreview, index) => {
                  return (
                      <ImgContainer>
                        <IconContainer onClick={(e)=>deleteImage(e, index)}>
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
        : <h1>You must register as Landlord to create a new Property</h1>)
      

    
     
    
}


const PhotosH1 = styled.h1`
${typography.head.xs};
color:${colors.gray.dark}


`;
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
  background: ${colors.background};
  min-width:600px;
  min-height:140px;
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
`;

const SaleDiv = styled.div`
width:60px;
padding:8px 10px;
gap:10px;
border-width:thin;
border-style:solid;
border-radius: 0px 8px 8px 0px;
border-left:none;
align-items: center;
border-color:${colors.gray.medium};

`;
const RentDiv = styled.div`
width:60px;
padding:8px 10px;
gap:10px;
border-width:thin;
border-style:solid;
border-radius: 8px 0px 0px 8px;
align-items: center;
border-color:${colors.gray.medium};

`;

const ModeDiv = styled.div`
display:flex;
border-color:${colors.gray.medium};
align-items:center;
`;





