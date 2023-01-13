import { colors,typography } from "../../styles";
import { useState } from "react";
import styled from "@emotion/styled";
import { Icons } from "../../utils";
import { RiCheckFill } from "react-icons/ri";
import { BsCheckSquare,BsSquare} from "react-icons/bs";


export default function CheckboxF(){

    return(
        <Div>

        <Checkbox/>
        </Div>
    )
    
}

export const Checkbox = (props) => {
    const [checked, setChecked] = useState(false);
    const checkHandler = (e) => {
      setChecked(e.currentTarget.checked);
    };
  
    return (
      <>
        <label htmlFor="checkbox">
          <Input
            type="checkbox"
            {...props}
            onClick={checkHandler}
            id="pets"
            style={{ opacity: 0 }}
          />
          {!checked && <BsSquare fill={colors.gray.medium} size={24} />}
          {checked && <BsCheckSquare fill={colors.pink.medium} size={24} />}
        </label>
      </>
    );
  };
  
  const Input = styled.input`
  border: 1px solid pink;
  position:absolute;
    
  `
  const Div=styled.div`
  width:200px;
  height:200px;
  display:flex;
  margin-left:200px;
  
  `;
  