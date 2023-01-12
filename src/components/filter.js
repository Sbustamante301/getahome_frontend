import styled from "@emotion/styled"
import { useState } from "react";
import { IconBase } from "react-icons";
import { useAuth } from "../context/auth-context";
import { colors, typography } from "../styles";
import { Icons } from "../utils";
import Input from "./Input"

const Wrapper=styled.div`
  display:flex;
  justify-content:space-between;
`
const Select = styled.select`
  display: flex;
  justify-content: strech;
  width: 185px;
  ${typography.text.md};
  color: ${colors.gray.dark};
  border: none;
`;
const ButtonContainer = styled.div`
  position:relative;
`
const Button = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background:${colors.pink.medium};
  color:${colors.white};
  display:flex;
  justify-content:center;
  border-radius: 16px;
  height: 40px;
  align-items:center;
  gap:13px;
  padding: 8px 16px;
`
const StyledInput = styled.input`
  width:240px;
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  padding:8px;
`
const StyledInput2 = styled.input`
  width:102px;
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  padding:8px;
  height:36px;
`
const MoreDiv = styled.div`
  position:absolute;
  background:${colors.white};
  width: 247px;
  
  z-index:1;
  left:-70px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding:8px;
  // bottom:-120px;
`
const Text = styled.h1`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`
const PriceInputDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const NumberChoseDiv = styled.div`
  width:100%;
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top:4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color:${colors.gray.medium};
`
const NumberDiv = styled.div`
  border: 1px solid ${colors.gray.light};
  display:flex;
  justify-content:center;
  align-items:center;
  padding:8px 12px;
`
const NumberDivFirst = styled.div`
  border: 1px solid ${colors.gray.light};
  border-radius: 8px 0px 0px 8px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:8px 12px;
`
const NumberDivLast = styled.div`
  border: 1px solid ${colors.gray.light};
  border-radius: 0px 8px 8px 0px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:8px 12px;
`
const StyledCheckbox = styled.input`
  width:20px;
  height:20px;
  border-color: 1px solid ${colors.pink.medium};
  background:red;
`
const Container = styled.div`
  display:flex;
  gap:8px;
`
export default function Filter(){
  const {propertyFilter, setPropertyFilters} = useAuth();
  const [showFilter, setShowFilter] = useState({
    more: false,
    price: false,
    bedBath: false,
    type: false
  });
  const [filter, setFilter] = useState({
    more: "MORE",
    price: "PRICE",
    bedBath: "BEDS & BATH",
    type: "PROPERTY TYPE"
  });
  const [prices, setPrices] = useState({
    min:"",
    max:""
  })

  function handleDone(event){
    event.preventDefault();
    const id = event.target.id;
    setPropertyFilters({...propertyFilter, [id]: prices})
    
  }

  function handleChangeInput(event){
    event.preventDefault();
    const { name, value } = event.target;
    setPrices({ ...prices, [name]: value });
  }

  return(
    <Wrapper>
      <StyledInput name={"address"} placeholder={"Search by adress"}/>
      <Container>
        <ButtonContainer>
          <Button onClick={()=> setShowFilter({price: !showFilter.price})}>{filter.price}</Button>
          {showFilter.price ? 
            <MoreDiv style={{display:"flex", flexDirection:"column", gap:4}}>
              <Text>PRICE RANGE</Text>
              <PriceInputDiv>
                <StyledInput2 onChange={handleChangeInput} placeholder={"min"} name={"min"} id={"minPrice"} value={prices.min}/>
                <h1> - </h1>
                <StyledInput2 onChange={handleChangeInput} placeholder={"max"} name={"max"} id={"maxPrice"} value={prices.max}/>
              </PriceInputDiv>
              <div style={{display:"flex", justifyContent:"flex-end", marginTop:4}}>
                <Button onClick={handleDone} style={{padding:8, width:60}} id="prices">DONE</Button>
              </div>
            </MoreDiv> : 
          null}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={()=> setShowFilter({type: !showFilter.type})}>{filter.type}</Button>
          {showFilter.type ?
            <MoreDiv style={{display:"flex", flexDirection:"column", gap:1}}>
              <Text>PROPERTY TYPE</Text>
              <PriceInputDiv>
                <StyledCheckbox type="checkbox" name={"houses"} id={"houses"} />
                <label>Houses</label>
                <StyledCheckbox type="checkbox" name={"apartments"} id={"apartments"} />
                <label>Apartments</label>
              </PriceInputDiv>
              <div style={{display:"flex", justifyContent:"flex-end", marginTop:4}}>
                <Button style={{padding:8, width:60}}  >DONE</Button>
              </div>
            </MoreDiv> :
          null}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={()=> setShowFilter({bedBath: !showFilter.bedBath})}>{filter.bedBath}</Button>
          {showFilter.bedBath ? 
            <MoreDiv style={{display:"flex", flexDirection:"column", gap:16}}>
              <div>
                <Text>BEDS</Text>
                <NumberChoseDiv>
                  <NumberDivFirst>Any</NumberDivFirst>
                  <NumberDiv style={{background:colors.pink.medium, color:colors.white}}>1+</NumberDiv>
                  <NumberDiv>2+</NumberDiv>
                  <NumberDiv>3+</NumberDiv>
                  <NumberDivLast>4+</NumberDivLast>
                </NumberChoseDiv>
              </div>
              <div>
                <Text>BATHS</Text>
                <NumberChoseDiv>
                  <NumberDivFirst>Any</NumberDivFirst>
                  <NumberDiv>1+</NumberDiv>
                  <NumberDiv>2+</NumberDiv>
                  <NumberDiv>3+</NumberDiv>
                  <NumberDivLast>4+</NumberDivLast>
                </NumberChoseDiv>
              </div>
              <div style={{display:"flex", justifyContent:"flex-end", marginTop:4}}>
                <Button style={{padding:8, width:60}}>DONE</Button>
              </div>
            </MoreDiv> :
          null}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={()=> setShowFilter({more: !showFilter.more})}>{filter.more} {Icons.arrowDown}</Button>
          { showFilter.more ? 
            <MoreDiv style={{}}>
              <div style={{display:"flex", alignItems:"center"}}>
                <StyledCheckbox type={"checkbox"}/>
                <label>Pets Allowed</label>
              </div>
              <div>
                <PriceInputDiv>
                <StyledInput2 placeholder={"min"} name={"minArea"} id={"minArea"}/>
                <h1> - </h1>
                <StyledInput2 placeholder={"min"} name={"minArea"} id={"minArea"}/>
              </PriceInputDiv>
              </div>
              <div style={{display:"flex", justifyContent:"flex-end", marginTop:4}}>
                <Button style={{padding:8, width:60}}>DONE</Button>
              </div>
            </MoreDiv> :
          null}
        </ButtonContainer>
      </Container>
      
      <Select name="types" id="lookType">
        <option value="apartment">An Apartment</option>
        <option value="house">A House</option>
      </Select>
    </Wrapper>
  )
}