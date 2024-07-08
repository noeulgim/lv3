import styled from "styled-components";

export const StyledButton = styled.button`
  width: auto;
  padding: 10px;
  height: ${(props) =>
    props.$large ? 50 : props.$medium ? 40 : props.$small ? 30 : 30}px;
  background-color: ${(props) =>
    props.$primary ? "skyblue" : props.$negative ? "peachpuff" : "#fff"};
`;
