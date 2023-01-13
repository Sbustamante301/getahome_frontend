import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import buildings from "../../assets/picture.svg";
import { useAuth } from "../../context/auth-context";
import { colors, typography } from "../../styles";
import MediaQuery from "react-responsive";
import { SearchButton } from "../Button";

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 600px;
    left: 0px;
    top: 1588px;
`;
const TitleContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:8px;
  color:${colors.gray.dark}
`;
const Section1Title = styled.h1`
  margin: 0px;
  ${typography.head.xl};
`;
const Section1Subtitle = styled.h4`
  margin: 0px;
  ${typography.head.sm};
`;
const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;

  margin-top:64px;
  boder: 1px solid black;
  // max-width: 800px;
  height: 72px;
  background: ${colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 160px;
  height: 56px;
`;
const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border:none;
  color: ${colors.gray.medium};

  width: 304px;
  height: 56px;
`;
const InputText = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  ${typography.text.md};
  border: none;
`;

const InputLabel = styled.label`
  ${typography.text.xxs};
  color: ${colors.gray.medium}
  margin-left:8px;
`;
const Select = styled.select`
  display: flex;
  justify-content: strech;
  width: 100%;
  ${typography.text.md};
  color: ${colors.gray.dark};
  border: none;
`;
export default function SectionMeetHome (){
  const { propertyFilter, setPropertyFilters } = useAuth();
  const [firstFilter, setFirstFilter] = useState({
    types:[false, true],
    mode:[false, true],
    search:""
  })
  const navigate = useNavigate();
  function handleChange(event){
    const {name, value} = event.target
    
    setFirstFilter({...firstFilter, [name]:value})
  }

  function handleSubmit(event){
    event.preventDefault();
    setPropertyFilters({...propertyFilter, 
            "types":[firstFilter.types==="house", firstFilter.types==="apartment"],
            "mode":[firstFilter.mode==="sale", firstFilter.mode==="rent"],
            "search":firstFilter.search})
    navigate("/properties")
    console.log({...propertyFilter, 
      "types":[firstFilter.types==="house", firstFilter.types==="apartment"],
      "mode":[firstFilter.mode==="sale", firstFilter.mode==="rent"],
      "search":firstFilter.search})
  }
  return(
    <Section1 style={{ backgroundImage: `url(${buildings})`, backgroundPosition: 'center' }}>
      <TitleContainer>
          <Section1Title> Meet your new home</Section1Title>
          <Section1Subtitle>The easiest way to find where you belong</Section1Subtitle>
      </TitleContainer>
      <MediaQuery minWidth={960}>
        <FiltersContainer>
          <InputContainer>
            <InputLabel htmlFor="types">I'M LOOKING FOR</InputLabel>
            <Select onChange={handleChange} name="types" id="types">
              <option value="apartment">An Apartment</option>
              <option value="house">A House</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="mode">I WANT TO</InputLabel>
            <Select onChange={handleChange} name="mode" id="mode">
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </Select>
          </InputContainer>
          <InputContainer2>
          <InputLabel htmlFor="search">WHERE</InputLabel>
            <InputText
              id="search"
              name="search"
              value={firstFilter.search}
              onChange={handleChange}
              placeholder="Favorite Districst"
            />
          </InputContainer2>
          <SearchButton onClick={handleSubmit}>SEARCH</SearchButton>
        </FiltersContainer>
      </MediaQuery>
    </Section1>
    )
}