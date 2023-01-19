import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import buildings from "../../assets/picture.svg";
import { useAuth } from "../../context/auth-context";
import { colors, typography } from "../../styles";
import MediaQuery from "react-responsive";
import { SearchButton } from "../Button";
import { CgPacman } from "react-icons/cg";

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
  display: contents;
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

const Div = styled.div`
  position:relative;
  width: 300px;
  height: 98px;
`;
const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px;
  border:none;
  color: ${colors.gray.medium};

  width: 304px;
  height: 56px;
`;

const CoincidenceDiv = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  background:${colors.white};
  width: 300px;
  min-height: 40px;
  max-height: 120px;
  border: 1px solid colors.pink.medium;
  
  z-index:1;
  left:0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 8px 8px;
  padding:8px;
`;

const CoincidenceText = styled.div`
  display:flex;
  align-items: center;
  height: 30px;
  flex-direction: column;
  align-items: baseline;
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
  color: ${colors.gray.medium};
  border: none;
  `;
const CoinT = styled.p`
    color: ${colors.gray.medium};
    ${typography.text.md};
    height: 40px;
    text-align: center;
  `;

export default function SectionMeetHome() {
  const { propertyFilter, setPropertyFilters, properties } = useAuth();
  const [firstFilter, setFirstFilter] = useState({
    types: [false, true],
    mode: [false, true],
    search: ""
  });
  const [queryOptions, setQueryOptions] = useState(null);
  const navigate = useNavigate();
  const districts = [];

  let filterProperties = [...properties].filter(property => {
    if (property.property) return property.property.status
  });
  filterProperties?.filter((property) => districts.push(property.property.district))
  let arrOptions = districts?.filter((district) => district?.toLowerCase().includes(queryOptions?.toLowerCase()))



  function handleChange(event) {
    const { name, value } = event.target

    setFirstFilter({ ...firstFilter, [name]: value })
  }

  function handleCoincidence(event) {
    const value = event.target.innerHTML

    setFirstFilter({ ...firstFilter, "search": value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPropertyFilters({
      ...propertyFilter,
      "types": [firstFilter.types === "house", firstFilter.types === "apartment"],
      "mode": [firstFilter.mode === "sale", firstFilter.mode === "rent"],
      "search": firstFilter.search
    })
    navigate("/properties")
    console.log({
      ...propertyFilter,
      "types": [firstFilter.types === "house", firstFilter.types === "apartment"],
      "mode": [firstFilter.mode === "sale", firstFilter.mode === "rent"],
      "search": firstFilter.search
    })
  }

  useEffect(() => {
    setQueryOptions(firstFilter.search)
  }, [firstFilter.search])

  return (
    <Section1 style={{ backgroundImage: `url(${buildings})`, backgroundPosition: 'center' }}>
      <TitleContainer>
        <Section1Title> Meet your new home</Section1Title>
        <Section1Subtitle>The easiest way to find where you belong</Section1Subtitle>
      </TitleContainer>
      <MediaQuery minWidth={960}>
        <FiltersContainer>
          <InputContainer>
            <InputLabel htmlFor="types">I'M LOOKING FOR</InputLabel>
            <Select onChange={handleChange} name="types" id="types" defaultValue={'DEFAULT'} >
              <option value="" value="DEFAULT" disabled >an Apartment...</option>
              <option value="apartment">An Apartment</option>
              <option value="house">A House</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="mode">I WANT TO</InputLabel>
            <Select onChange={handleChange} name="mode" id="mode" defaultValue={'DEFAULT'}>
              <option value="" value="DEFAULT" disabled>to rent...</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </Select>
          </InputContainer>
          <InputContainer2>
            <Div>
              <InputLabel htmlFor="search">WHERE</InputLabel>
              <InputText
                id="search"
                name="search"
                value={firstFilter.search}
                onChange={handleChange}
                placeholder="Favorite District"
              />
              {queryOptions ?
                (<CoincidenceDiv>
                  {arrOptions.length !== 0 ?
                    arrOptions?.map((district) => <CoincidenceText onClick={handleCoincidence}><CoinT name="search" value={district}>{district}</CoinT></CoincidenceText>)
                    : <CoincidenceText><CoinT>No coincidence</CoinT></CoincidenceText>
                  }
                </CoincidenceDiv>)
                : null
              }
            </Div>
          </InputContainer2>
          <SearchButton onClick={handleSubmit}>SEARCH</SearchButton>
        </FiltersContainer>
      </MediaQuery>
    </Section1>
  )
}