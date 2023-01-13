import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri"
import { useState, useEffect } from "react";
import { colors, typography } from "../styles";
import { Icons } from "../utils";
import { useAuth } from "../context/auth-context";
import { LoginCardButton, ContactAdvertiserButton, EditPropertyButton } from "../components/Button";
import { SectionFooter2 } from "../components/sections/sectionFooter";
import Mapa from "../components/mapa";
import { createFavorite, createContacted } from "../services/properties-service"

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
  height: 384px;
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
  height: 76px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 600px;
  height: 76px;
`;

const TotalCost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0px;

  width: 166px;
  height: 76px;
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
  justify-content: flex-end;
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
  height: 204px;
`;

const AboutTitle = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 760px;
  height: 36px;
  ${typography.head.xs}
  color:${colors.pink.dark}
`;

const AboutParragraph = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 760px;
  height: 168px;
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
  const { currentProperty, setIsOpenModal, user, savedProperty, setSavedProperty } = useAuth();
  const [showContact, setShoreContact] = useState(false);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false)
  const [contact, setContact] = useState(false)

  function handleLogin(event) {
    event.preventDefault();
    setIsOpenModal(true)
  }

  function handleContactAdd(event) {
    event.preventDefault();
    createContacted({
      id: currentProperty.property.id,
      contacts: true,
    })
      .then((data) => console.log(data))
      .catch(console.log)
    setShoreContact(true)
    setContact(true)
  }

  function handleAddFavorites(event) {
    event.preventDefault();
    createFavorite({
      id: currentProperty.property.id,
      favorite: true,
    })
      .then((data) => console.log(data))
      .catch(console.log)
    setFavorite(true)
  }

  function handleEditProperty(event) {
    event.preventDefault();
    navigate("/edit");
  }

  return (
    <BigWraper>
      <Wrapper>
        <InfoContainer>
          <SliderContainer>
            <LeftIcon>
              {Icons.arrowLeft}
            </LeftIcon>
            <Image src={currentProperty.url}></Image>
            <RightIcon>
              {Icons.arrowRight}
            </RightIcon>
          </SliderContainer>

          <InformationContainer>
            <Category>
              <Address>
                <BigAddress>{currentProperty.property.address}</BigAddress>
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
                <Mapa />
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
              <EditPropertyButton onClick={handleEditProperty}> EDIT PROPERTY </EditPropertyButton>
            </LogedDiv>
          ) : (
                <LogedDiv>
                  {showContact ?
                    (<LogedCard>
                      <TitleSeeker>Contact information</TitleSeeker>
                      <SeekerEmail>
                        <SeekerSubtitle>Email</SeekerSubtitle>
                        <SeekerInfo>xxxxx@mail.com</SeekerInfo>
                      </SeekerEmail>
                      <SeekerEmail>
                        <SeekerSubtitle>Phone</SeekerSubtitle>
                        <SeekerInfo>92392445</SeekerInfo>
                      </SeekerEmail>
                    </LogedCard>)
                    : (<LogedCard>
                      <ContactAdvertiserButton onClick={handleContactAdd}>CONTACT ADVERTISER</ContactAdvertiserButton>
                      {favorite ?
                        (<FavoriteDiv onClick={handleAddFavorites} disabled>
                          <RiHeartFill style={{ color: colors.pink.medium }} />
                          <TextCard2>Add to favorites</TextCard2>
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

