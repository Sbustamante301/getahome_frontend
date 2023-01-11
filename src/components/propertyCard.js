import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { Icons } from "../utils"

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;

  padding: 64px 132px;
  gap: 10px;

  height: 604px;
  left: calc(50% - 1440px/2);
  top: 672px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 0px;
  gap: 32px;

  
  height: 476px;
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
  height: 360px;
  left: 8px;
  top: 8px;

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
  color:${colors.gray.medium}
`;

const Category = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 300px;
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
  gap: 16px;
  margin-top: 26px;

  width: 235px;
  height: 24px;
  
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

export function PropertyCard({ property}) {


  return (
    <Wrapp>
      <Container>
        <TextContainer>
          <PrepTitle>Find an Appartment you Love</PrepTitle>
          <Title>Homes for rent at the best prices</Title>
        </TextContainer>
        <CardContainer>
          <ImgContainer>
            <Property src={property.url} />
            <Tag>
              {Icons.coins}
              For Rental
            </Tag>
          </ImgContainer>
          <InformationContainer>
            <Category>
              <Price>
                {Icons.dollarCircle}
                3000
              </Price>
              <HomeType>
                {Icons.building}
                Apartment
              </HomeType>
            </Category>
            <Address>
              La Crucet III etapa block 15 dpto 504
            </Address>
            <Features>
              <Bed>{Icons.bed} 4</Bed>
              <Bath>{Icons.bath} 2</Bath>
              <Area>{Icons.area} 180 m2</Area>
              <Pet>{Icons.paw}</Pet>
            </Features>

          </InformationContainer>

        </CardContainer>
      </Container>
    </Wrapp>

  )
}