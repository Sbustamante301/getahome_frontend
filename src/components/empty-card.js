import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "../styles"
import { Icons } from "../utils";
import { IoAddOutline } from "react-icons/io5";


const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:400px;
  width: 300px;
  border-radius:8px;
  border: 5px dashed ${colors.gray.light};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`


export default function EmptyCard(){
  return(
    <Link style={{textDecoration:"none"}} to={"/property/new"}>
      <Wrapper>
          <IoAddOutline style={{width: '100', height: '100', color: colors.gray.light} }/>
      </Wrapper>
    </Link>
  )
}