import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context"
import { colors, typography } from "../styles";
import { Icons } from "../utils"
import { EditCardButton, CloseCardButton, RestoreCardButton, DeleteCardButton } from "../components/Button"
import { updateProperty, deleteProperty } from "../services/properties-service";

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 0px;
  gap: 32px;
  height: ${(props) => props.height};
`;
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const PrepTitle = styled.p`
  ${typography.text.button};
  color: ${colors.gray.dark};
  letter-spacing: 0.1px;
  margin:0;
`;

const Title = styled.h1`
  ${typography.head.md};
  color: ${colors.pink.dark};
  margin: 0;
`;
const CardContainer = styled.div`
  position:relative;
  width: 300px;
  height: ${(props) => props.height};


  display: flex;
  flex-direction: column;
  justify-content:space-between;
  
  background: ${colors.white}

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 7px solid ${colors.pink.dark};
  border-radius: 8px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-radius: 8px;
  border-top-right-radius:8px;
  border-top-left-radius:8px;


`;

const Property = styled.img`
  width: 300px;
  height: 200px;
  bordes: 1px solid ${colors.gray.dark};
  border-top-right-radius:8px;
  border-top-left-radius:8px;
  Width:300px;
  Height:200px;
`;

const Tag = styled.div`
  position:absolute;
  width: 110px;
  height: 28px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items:center;
  color:${colors.white};
  background-color:${colors.pink.medium};
  border-top-right-radius:8px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:${colors.gray.medium};
  padding:8px;
  height: ${(props) => props.height};
`;

const Category = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 32px;
  
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 12px;
  ${typography.head.sm}
  color: ${colors.gray.dark}
  width: 161px;
  height: 32px;
`;

const HomeType = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 4px;
  ${typography.text.md}
  color: ${colors.gray.medium}

  width: 113px;
  height: 24px;
`;

const Address = styled.div`
  ${typography.text.md}
  color: ${colors.gray.dark}
  letter-spacing: 0.15px;
  margin-top:8px;

  width: 284px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
 `;

const Features = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  margin-top: 16px;
  width: 235px;
  height: 18px;
  
`;

const LowFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 300px;
  height: 48px;
  background: ${colors.pink.dark};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

const Bed = styled.div`
  display: flex;
  align-items: center;
`;

const Bath = styled.div`
  display: flex;
  align-items: center;
`;

const Area = styled.div`
  display: flex;
  align-items: center;
`;

const Pet = styled.div`
  display: flex;
  align-items: center;
`;

export function PropertyCard({ property, showProperty }) {

  const { user, savedProperty, setMyProperty, myProperty } = useAuth();

  let index_favorites = [];
  let localSavedProperty = [];
  if (savedProperty.favorites) localSavedProperty = [...savedProperty.favorites]
  localSavedProperty.map(property => {
    index_favorites.push(property.property.id)

  })


  function handleClose(event) {
    event.preventDefault();
    updateProperty(property.property.id, { status: false })
      .then(response => { console.log('CARD CERRADA', response) })
      .catch(console.log)
  }

  function handleRestore(event) {
    event.preventDefault();
    console.log('ENTRE AL RESTORE')
    updateProperty(property.property.id, { status: true })
      .then(response => { console.log('CARD RESTAURADA', response) })
      .catch(console.log)
  }

  function handleTrash(event) {
    event.preventDefault();
    console.log('ENTRE AL DELETE')
    deleteProperty(property.property.id)
      .then((data) => console.log('CardBORRADA', data))
      .catch(console.log)
    
    setMyProperty({...myProperty,"active": myProperty.active.filter(myProp=>myProp.id !== property.property.id)})
  }

  return (
    <Wrapp onClick={showProperty}>


      <Container height={(user?.user_type === 'landlord' && property.property.user_id === user.id) ? '400px' : '360px'}>

        <CardContainer height={(user?.user_type === 'landlord' && property.property.user_id === user.id) ? '400px' : '360px'}>

          <ImgContainer>
            <Property src={property.url} />
            <Tag>
              {Icons.coins}

              {property.property.mode === 'sale' ? "For Sale" : "For Rent"}

            </Tag>
          </ImgContainer>
          <InformationContainer >
            <Category>
              <Price >
                {Icons.dollarCircle}
                {property.property.price}
              </Price>
              <HomeType>
                {Icons.building}
                {property.property.property_type === 'apartment' ? "Apartment" : "House"}
              </HomeType>
            </Category>
            <Address>
              {property.property.address}
            </Address>
            <Features>
              <Bed>{Icons.bed} {property.property.bedrooms}</Bed>
              <Bath>{Icons.bath} {property.property.bathrooms}</Bath>
              <Area>{Icons.area} {property.property.area} m2</Area>
              <Pet>{property.property.pet_allowed ? Icons.paw : null}</Pet>
              {index_favorites.includes(property.property.id) ? Icons.heart : null}
            </Features>
          </InformationContainer>
          {(user?.user_type === 'landlord' && property.property.user_id === user.id) ?
            property.property.status ?
              (<LowFrame>
                <ButtonContainer>
                  <Link style={{ textDecoration: "none" }} to={`/properties/edit/${property.property.id}`}>
                    <EditCardButton>EDIT</EditCardButton>
                  </Link>
                  <CloseCardButton onClick={handleClose}>CLOSE</CloseCardButton>
                </ButtonContainer>
              </LowFrame>)
              : (<LowFrame>
                <ButtonContainer>
                  <RestoreCardButton onClick={handleRestore}>RESTORE</RestoreCardButton>
                  <DeleteCardButton onClick={handleTrash}>DELETE</DeleteCardButton>
                </ButtonContainer>
              </LowFrame>
              ) : null}
        </CardContainer>
      </Container>
    </Wrapp>

  )
}