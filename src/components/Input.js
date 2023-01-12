import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const Label = styled.label`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  style:none;
  background-color: white;
  color: ${colors.gray.dark};
  -webkit-appearance: none;
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  onChange,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default Input;
