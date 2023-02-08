import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "../styles"
import { IoAddOutline } from "react-icons/io5";


const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:45px;
  width: 45px;
  border-radius:50px;
  border: 2px dashed ${colors.pink.medium};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`


export default function EmptyCard(){
  return(
    <Link style={{textDecoration:"none"}} to={"/property/new"}>
      <Wrapper>
          <IoAddOutline style={{width: '30', height: '30', color: colors.pink.medium} }/>
      </Wrapper>
    </Link>
  )
}