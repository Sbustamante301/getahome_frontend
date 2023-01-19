import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { IconBase } from "react-icons";
import { useAuth } from "../context/auth-context";
import { colors, typography } from "../styles";
import { Icons } from "../utils";

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`
const Select = styled.div`
  display: flex;
  justify-content: strech;
  width: 185px;
  ${typography.text.md};
  color: ${colors.gray.dark};
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  margin-top:20px;
  padding:8px;
`;
const ButtonContainer = styled.div`
  position:relative;
`
const Button = styled.div`
  accent-color:pink;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background:${colors.pink.medium};
  color:${colors.white};
  display:flex;
  justify-content:center;
  border-radius: 8px;
  height: 32px;
  align-items:center;
  gap:8px;
  padding: 8px 16px;
`
const StyledInput = styled.input`
  width:240px;
  height:40px;
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  padding:8px;
  margin-top:20px; 
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
 color:${colors.gray.medium};
  ${typography.text.xxs};
  
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
  accent-color:${colors.pink.medium};
  width:20px;
  height:20px;
  border:1px solid ${colors.pink.medium};
  background: ${colors.white};
`
const Container = styled.div`
  display:flex;
  margin-top:20px;
  gap:8px;
`;

const SelectOptions = styled.div`
  display:flex;
  align-items: center;
  height: 30px;
  &:focus-within {
    background-color: ${colors.pink.shallow};
    color: ${colors.pink.dark}
  };
`;

export default function Filter() {
  const { propertyFilter, setPropertyFilters } = useAuth();
  const [showFilter, setShowFilter] = useState({
    more: false,
    price: false,
    bedBath: false,
    type: false,
    mode: false
  });
  const [filter, setFilter] = useState({
    more: "MORE",
    price: "PRICE"
  });
  const [prices, setPrices] = useState({
    min: "",
    max: ""
  })
  const [areas, setAreas] = useState({
    min: "",
    max: ""
  })
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [petAllowed, setPetAllowed] = useState(false);

  const [house, setHouse] = useState(propertyFilter.types[0]);
  const [apartment, setApartment] = useState(propertyFilter.types[1]);
  const [buy, setBuy] = useState(propertyFilter.mode[0])
  const [rent, setRent] = useState(propertyFilter.mode[1])
  const [both, setBoth] = useState(false)
  const [search, setSearch] = useState(propertyFilter.search)



  function handleDone(event) {
    event.preventDefault();
    const id = event.target.id;
    if (id === "prices") setPropertyFilters({ ...propertyFilter, [id]: prices })
    if (id === "bathsbeds") setPropertyFilters({ ...propertyFilter, "beds": beds, "baths": baths })
    if (id === "more") setPropertyFilters({ ...propertyFilter, "petAllowed": petAllowed, "areas": areas })
    if (id === "types") setPropertyFilters({ ...propertyFilter, "types": [house, apartment] });
    setShowFilter({
      more: false,
      price: false,
      bedBath: false,
      type: false
    });
  }

  function handleChangeInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (name.includes("price")) setPrices({ ...prices, [name.replace("price", "")]: value });
    if (name.includes("area")) setAreas({ ...areas, [name.replace("area", "")]: value });
  }

  function changeText(filter) {
    if (filter === "types") {
      if (!(propertyFilter.types[0] || propertyFilter.types[1])) return "PROPERTY TYPE";
      if (propertyFilter.types[0] && propertyFilter.types[1]) return "HOUSES & APARTMENTS";
      if (propertyFilter.types[0]) return "HOUSES"
      if (propertyFilter.types[1]) return "APARTMENTS"
    } else if (filter === "bedbath") {
      if (propertyFilter.beds === 0 && propertyFilter.baths === 0) return "BEDS & BATH"

      return `${propertyFilter.beds}+ BD, ${propertyFilter.baths}+ BA`
    } else if (filter === "price") {
      if (!(propertyFilter.prices.min || propertyFilter.prices.max)) return "PRICE";
      if (propertyFilter.prices.min && propertyFilter.prices.max) return `$${(propertyFilter.prices.min / 1000).toFixed(1)}K - $${(propertyFilter.prices.max / 1000).toFixed(1)}K`;
      if (propertyFilter.prices.min) return `>= $${(propertyFilter.prices.min / 1000).toFixed(1)}K`
      if (propertyFilter.prices.max) return `<= $${(propertyFilter.prices.max / 1000).toFixed(1)}K`

    }
  }

  function handleMode(event) {
    event.preventDefault();
    const id = event.target.id;
    if (id === "both") {


      setBoth(!both)
      setRent(!both)
      setBuy(!both)

    }
    if (id === "rent") setRent(!rent)
    if (id === "buy") setBuy(!buy)
  }


  useEffect(() => {
    setPropertyFilters({ ...propertyFilter, "mode": [buy, rent] })


  }, [buy, rent, both])



  useEffect(() => {
    setPropertyFilters({ ...propertyFilter, "search": search })
  }, [search])

  return (
    <Wrapper>
      <StyledInput onChange={(e) => setSearch(e.target.value)} value={search} name={"address"} placeholder={"Search by adress"} />
      <Container>
        <ButtonContainer>
          <Button onClick={() => setShowFilter({ price: !showFilter.price })}>{changeText("price")}</Button>
          {showFilter.price ?
            <MoreDiv style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Text>PRICE RANGE</Text>
              <PriceInputDiv>
                <StyledInput2 onChange={handleChangeInput} placeholder={"min"} name={"minprice"} id={"minPrice"} value={prices.min} />
                <h1 style={{ border: "2px solid #8E8E8E", width: "13px", height: "0px", borderRadius: "8px" }} ></h1>
                <StyledInput2 onChange={handleChangeInput} placeholder={"max"} name={"maxprice"} id={"maxPrice"} value={prices.max} />
              </PriceInputDiv>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <Button onClick={handleDone} style={{ padding: 8, width: 60 }} id="prices">DONE</Button>
              </div>
            </MoreDiv> :
            null}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => setShowFilter({ type: !showFilter.type })}>{changeText("types")}</Button>
          {showFilter.type ?
            <MoreDiv style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Text>PROPERTY TYPE</Text>
              <PriceInputDiv>
                <StyledCheckbox onChange={(event) => setHouse(event.target.checked)} checked={house} type="checkbox" name={"houses"} id={"house"} />
                <label style={{ fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }} htmlFor="house">Houses</label>
                <StyledCheckbox onChange={(event) => setApartment(event.target.checked)} checked={apartment} type="checkbox" name={"apartments"} id={"apartment"} />
                <label style={{ fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }} htmlFor="apartment">Apartments</label>
              </PriceInputDiv>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <Button onClick={handleDone} style={{ padding: 8, width: 60 }} id="types" >DONE</Button>
              </div>
            </MoreDiv> :
            null}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => setShowFilter({ bedBath: !showFilter.bedBath })}>{changeText("bedbath")}</Button>
          {showFilter.bedBath ?
            <MoreDiv style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <Text>BEDS</Text>
                <NumberChoseDiv>
                  <NumberDivFirst onClick={() => setBeds(0)}
                    style={{

                      background: `${beds === 0 ? colors.pink.medium : colors.white}`,
                      color: `${beds === 0 ? colors.white : colors.gray.medium}`
                    }}>Any</NumberDivFirst>
                  <NumberDiv onClick={() => setBeds(1)}
                    style={{
                      background: `${beds === 1 ? colors.pink.medium : colors.white}`,
                      color: `${beds === 1 ? colors.white : colors.gray.medium}`
                    }}>1+</NumberDiv>
                  <NumberDiv onClick={() => setBeds(2)}
                    style={{
                      background: `${beds === 2 ? colors.pink.medium : colors.white}`,
                      color: `${beds === 2 ? colors.white : colors.gray.medium}`
                    }}>2+</NumberDiv>
                  <NumberDiv onClick={() => setBeds(3)}
                    style={{
                      background: `${beds === 3 ? colors.pink.medium : colors.white}`,
                      color: `${beds === 3 ? colors.white : colors.gray.medium}`
                    }}>3+</NumberDiv>
                  <NumberDivLast onClick={() => setBeds(4)}
                    style={{
                      background: `${beds === 4 ? colors.pink.medium : colors.white}`,
                      color: `${beds === 4 ? colors.white : colors.gray.medium}`

                    }}>4+</NumberDivLast>
                </NumberChoseDiv>
              </div>
              <div>
                <Text>BATHS</Text>
                <NumberChoseDiv>
                  <NumberDivFirst onClick={() => setBaths(0)}
                    style={{

                      background: `${baths === 0 ? colors.pink.medium : colors.white}`,
                      color: `${baths === 0 ? colors.white : colors.gray.medium}`
                    }}>Any</NumberDivFirst>
                  <NumberDiv onClick={() => setBaths(1)}
                    style={{
                      background: `${baths === 1 ? colors.pink.medium : colors.white}`,
                      color: `${baths === 1 ? colors.white : colors.gray.medium}`
                    }}>1+</NumberDiv>
                  <NumberDiv onClick={() => setBaths(2)}
                    style={{
                      background: `${baths === 2 ? colors.pink.medium : colors.white}`,
                      color: `${baths === 2 ? colors.white : colors.gray.medium}`
                    }}>2+</NumberDiv>
                  <NumberDiv onClick={() => setBaths(3)}
                    style={{
                      background: `${baths === 3 ? colors.pink.medium : colors.white}`,
                      color: `${baths === 3 ? colors.white : colors.gray.medium}`
                    }}>3+</NumberDiv>
                  <NumberDivLast onClick={() => setBaths(4)}
                    style={{
                      background: `${baths === 4 ? colors.pink.medium : colors.white}`,
                      color: `${baths === 4 ? colors.white : colors.gray.medium}`

                    }}>4+</NumberDivLast>
                </NumberChoseDiv>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <Button onClick={handleDone} style={{ padding: 8, width: 60 }} id="bathsbeds">DONE</Button>
              </div>
            </MoreDiv> :
            null}
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => setShowFilter({ more: !showFilter.more })}>{filter.more} {Icons.arrowDown}</Button>
          {showFilter.more ?
            <MoreDiv style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <StyledCheckbox onChange={(event) => setPetAllowed(event.target.checked)} checked={petAllowed} type={"checkbox"} id={"petAllowed"} />
                <label style={{ fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }} htmlFor="petAllowed">Pets Allowed</label>
              </div>
              <div>
                <Text>AREA IN M2</Text>
                <PriceInputDiv>
                  <StyledInput2 onChange={handleChangeInput} value={areas.min} placeholder={"min"} name={"minarea"} id={"minArea"} />
                  <h1 style={{ border: "2px solid #8E8E8E", width: "13px", height: "0px", borderRadius: "8px" }}></h1>
                  <StyledInput2 onChange={handleChangeInput} value={areas.max} placeholder={"max"} name={"maxarea"} id={"maxArea"} />
                </PriceInputDiv>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                <Button onClick={handleDone} style={{ padding: 8, width: 60 }} id="more">DONE</Button>
              </div>
            </MoreDiv> :
            null}
        </ButtonContainer>
      </Container>

      <Select>
        <ButtonContainer>
          <Button onClick={() => setShowFilter({ mode: !showFilter.mode })}

            style={{ height: "20px", color: `${colors.gray.dark}`, background: `${colors.white}`, width: "100%", display: "flex", flexDirection: "row" }}>

            <TextContainer>Buying & Renting </TextContainer>{Icons.arrowDown}
          </Button>
          {showFilter.mode ?
            <ChoiceDiv style={{ zIndex: 1 }} >

              <SelectOptions>
                <input style={{ accentColor: "pink" }} onChange={handleMode} type={"checkbox"} id={"both"} checked={buy && rent} />
                <label style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "400px", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }} >Both</label>
              </SelectOptions>
              <SelectOptions >
                <input style={{ accentColor: "pink", }} onChange={handleMode} type={"checkbox"} id={"buy"} checked={buy} />
                <label style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "400px", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }}>Buying</label>
              </SelectOptions>
              <SelectOptions>
                <input style={{ accentColor: "pink" }} onChange={handleMode} type={"checkbox"} id={"rent"} checked={rent} />
                <label style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "400px", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }}>Renting</label>
              </SelectOptions>

            </ChoiceDiv> :
            null}
        </ButtonContainer>
      </Select>

    </Wrapper>
  )
}

const TextContainer = styled.div`
width: 115px;
height: 24px;
`;

const ChoiceDiv = styled.div`
position: absolute;
background: ${ colors.white};
width: 187px;
left: -7px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
height: 98px;
margin-top:15px; 

box-sizing: border-box;

`;