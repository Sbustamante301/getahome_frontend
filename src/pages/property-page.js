import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { useState, useEffect } from "react";
import { colors, typography } from "../styles";
import { Icons } from "../utils";
import { useAuth } from "../context/auth-context";
import { LoginCardButton, ContactAdvertiserButton, EditPropertyButton } from "../components/Button";
import { SectionFooter2 } from "../components/sections/sectionFooter";
import StaticMap from "../components/mapa_static";
import { getSaved, createFavorite, createContacted, getLandlordUser } from "../services/properties-service"
import ImageDefault from "../assets/image-default.jpg"
import SimpleSlider from "../components/sections/image-carousel";


const BigWraper = styled.div`
  display: flex;
  flex-direction:column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  width: 90%;
  min-height:800px;
  
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
`;

// width: 80%;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;

`;

const UnlogedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 10px;

  height: 248px;
  width: 100%;
`;

const LogedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  gap: 10px;

  height: 290px;
  width: 100%;
`;

const UnloginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 16px;

  width: 226px;
  height: 184px;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const LogedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 16px;

  width: 258px;
  height: 148px;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const FavoriteDiv = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 4px;
  background-color:${colors.white};
  border: none;

  width: 100px;
  height: 60px;

  &:disabled {
    opacity: 0.5;
  }
`;

const TextCard1 = styled.p`
  width: 142px;
  height: 72px;

  ${typography.text.md};
  text-align: center;
  letter-spacing: 0.5px;
`;

const TextCard2 = styled.p`
  width: 100px;

  ${typography.text.xs};
  text-align: center;
  letter-spacing: 0.4px;
`;

const TitleSeeker = styled.h6`
  width: 258px;
  height: 28px;
  margin:0;
  padding:0;

  ${typography.head.xs};
  text-align: center;
  letter-spacing: 0.15px;
  color: ${colors.gray.dark}
`;

const SeekerEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 258px;
  height: 172px;
`;

const SeekerSubtitle = styled.p`
  ${typography.text.sm}
  text-align: center;
  letter-spacing: 0.25px;
  color:${colors.pink.dark}
`;

const SeekerInfo = styled.p`
  ${typography.text.sm}
  text-align: center;
  letter-spacing: 0.25px;
  color:${colors.gray.dark}
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 64px;
  gap: 10px;

  width: 830px;
  height: 600px;
`;

const Image = styled.img`
  width: 512px;
  height: 360px;
  border-top:12px solid ${colors.backgroundLight};
  border-bottom: 12px solid ${colors.backgroundLight};
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 766px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 766px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 600px;
`;

const TotalCost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  justify-content:center;
  width: 166px;
  
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  color: ${colors.gray.dark}

  width: 166px;
  height: 40px;
`;

const Maintenance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;

  width: 166px;
  height: 28px;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
  padding: 0px;
  gap: 16px;

  width: 766px;
  height: 66px;

  border-top: 1px solid ${colors.pink.dark};
  border-bottom: 1px solid ${colors.pink.dark};
`;

const SubFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 766px;
  height: 32px;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 760px;
`;

const AboutTitle = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-top:20px;

  width: 760px;
  ${typography.head.xs}
  color:${colors.pink.dark}
`;

const AboutParragraph = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 760px;
  ${typography.head.sm}
  color:${colors.gray.dark}
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 760px;
  height: 828px;
`;

const Map = styled.div`
  width: 760px;
  height: 760px;
  margin-bottom: 32px;
  border: 1px solid ${colors.pink.dark}
`;

const BigAddress = styled.h1`
  ${typography.head.md}
`;
const SmallAddress = styled.h6`
  ${typography.head.xxs};
  letter-spacing: 0.15px;
  color:${colors.gray.medium};
  margin:0;
`;
const PriceText = styled.h4`
  ${typography.head.sm}
  color: ${colors.gray.dark}
`;
const MaintenanceText = styled.h6`
  ${typography.head.xs}
  color: ${colors.gray.light}
`;

const FeatureText = styled.h5`
  ${typography.head.sm}
  color: ${colors.gray.medium}
`;

const LeftIcon = styled.div`
  color:${colors.gray.medium};
`;
const RightIcon = styled.div`
  color:${colors.gray.medium};
`;

export default function PropertyPage() {
  const { currentProperty, setIsOpenModal, user, savedProperty, setSavedProperty, properties, setProperties, address } = useAuth();
  const [showContact, setShoreContact] = useState(false);
  const navigate = useNavigate();
  const [landlord, setLandlord] = useState(null);

  let index_contacts = [];
  let localSavedPropertyContacts = []
  if(savedProperty.length !== 0 ){
    localSavedPropertyContacts = [...savedProperty.contacts];
  }
  
  localSavedPropertyContacts.map(property=>{
    index_contacts.push(property.property.id)
  })

  const index2 = currentProperty.length !==0 ? currentProperty.property.id : "";

  const [contact, setContact] = useState(index_contacts.includes(index2));

  let index_favorites = [];
  let localSavedProperty = []
  if(savedProperty.length !== 0 ){
    localSavedProperty = [...savedProperty.favorites];
  }
  
  localSavedProperty.map(property=>{
    index_favorites.push(property.property.id)
  })

  const index = currentProperty.length !==0 ? currentProperty.property.id : "";
  const [favorite, setFavorite] = useState(index_favorites.includes(index));

  
  useEffect(() => {
    if (currentProperty) {
      getLandlordUser(currentProperty.property.user_id).then(response => {
        setLandlord(response)
      }).catch(error => { console.log(error) })
    }
  }, []);


  function handleLogin(event) {
    event.preventDefault();
    setIsOpenModal(true)
  }

  function handleContactAdd(event) {
    event.preventDefault();
    createContacted({
      property_id: currentProperty.property.id,
      contacts: true,
    }).then((data) => console.log(data)).catch(console.log)
    setShoreContact(true)
    setContact(true)
  }

  function handleAddFavorites(event) {
    event.preventDefault();
    createFavorite({
      property_id: currentProperty.property.id,
      favorite: true,
    })
      .then()
      .catch()
    setFavorite(true)
  }

  function handleRemoveFavorite(event) {
    event.preventDefault();
    createFavorite({
      property_id: currentProperty.property.id,
      favorite: false,
    })
      .then()
      .catch(console.log)
    setFavorite(false)
  }

  useEffect(()=>{
    getSaved().then(response=>{
      setSavedProperty(response)
      sessionStorage.setItem("savedProperty", JSON.stringify(response))
    })
  },[favorite, contact])

  return (
    <BigWraper>
      <Wrapper>
        <InfoContainer>
          <SliderContainer>
            {currentProperty.url ==="sin imagen" ? <img src={ImageDefault}/> : <SimpleSlider images={currentProperty.url}/>}
          </SliderContainer>
          <InformationContainer>
            <Category>
              <Address>
                {address?.map((add,index)=>{
                  if (add.id === currentProperty.property.id) return(<BigAddress>{add.address}</BigAddress>)  
                }) } 
              
                <SmallAddress>{`${currentProperty.property.district}, ${currentProperty.property.province}`}</SmallAddress>
              </Address>
              <TotalCost>
                <Price><PriceText>{Icons.dollarCircle} {currentProperty.property.price}</PriceText></Price>
                <Maintenance><MaintenanceText>+{currentProperty.property.maintenance}</MaintenanceText> </Maintenance>
              </TotalCost>
            </Category>
            <Features>
              <SubFeatures>
                <Feature>
                  <FeatureText>
                    <BiBed style={{ width: "20px", height: "20px" }} /> {currentProperty.property.bedrooms} bedrooms
                  </FeatureText>
                </Feature>
                <Feature>
                  <FeatureText>
                    <BiBath style={{ width: "20px", height: "20px" }} /> {currentProperty.property.bathrooms} bathrooms
                  </FeatureText>
                </Feature>
                <Feature>
                  <FeatureText>
                    <BiArea style={{ width: "20px", height: "20px" }} /> {currentProperty.property.area} m2
                  </FeatureText>
                </Feature>
                {currentProperty.property.pet_allowed ? (
                  <Feature>
                    <FeatureText>
                      <FaPaw style={{ width: "20px", height: "20px" }} /> Pets allowed
                    </FeatureText>
                  </Feature>
                ) : ""}

              </SubFeatures>
            </Features>

            <About>
              <AboutTitle>About this Property</AboutTitle>
              <AboutParragraph>
                {currentProperty.property.description}
              </AboutParragraph>
            </About>
            <Location>
              <AboutTitle>Location</AboutTitle>
              <AboutParragraph>
                {currentProperty.property.address}
              </AboutParragraph>

              <Map>
                <StaticMap/>
              </Map>
              
            </Location>
          </InformationContainer>
        </InfoContainer>
        <RightContainer>
          {!user ? (
            <UnlogedDiv>
              <UnloginCard>
                <TextCard1>Log in or Join to contact the advertiser</TextCard1>
                <LoginCardButton handleLogin={handleLogin}>LOGIN</LoginCardButton>
              </UnloginCard>
            </UnlogedDiv>
          ) : currentProperty.property.user_id === user.id ? (
            <LogedDiv>
              <Link style={{textDecoration:"none"}} to={`/properties/edit/${currentProperty.property.id}`}>
                <EditPropertyButton> EDIT PROPERTY </EditPropertyButton>
              </Link>
            </LogedDiv>
          ) : (
                <LogedDiv>
                  {showContact ?
                    (<LogedCard>
                      <TitleSeeker>Contact information</TitleSeeker>
                      <SeekerEmail>
                        <SeekerSubtitle>Email</SeekerSubtitle>
                        <SeekerInfo>{landlord.email}</SeekerInfo>
                      </SeekerEmail>
                      <SeekerEmail>
                        <SeekerSubtitle>Phone</SeekerSubtitle>
                        <SeekerInfo>{landlord.phone}</SeekerInfo>
                      </SeekerEmail>
                    </LogedCard>)
                    : (<LogedCard>
                      <ContactAdvertiserButton onClick={handleContactAdd}>CONTACT ADVERTISER</ContactAdvertiserButton>
                      {favorite ?
                        (<FavoriteDiv onClick={handleRemoveFavorite}>
                          {Icons.heartDark}
                          <TextCard2>Remove from favorites</TextCard2>
                        </FavoriteDiv>)
                        : (<FavoriteDiv onClick={handleAddFavorites}>
                          {Icons.heart}
                          <TextCard2>Add to favorites</TextCard2>
                        </FavoriteDiv>)
                      }

                    </LogedCard>)


                  }

                </LogedDiv>
              )
          }
        </RightContainer>
      </Wrapper>
      <SectionFooter2 />
    </BigWraper>
  )
}

