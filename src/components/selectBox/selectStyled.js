import styled from "styled-components";

export const StyledSelect = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    font-size: 20px;
  }
`;
export const StyledLabel = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
export const StyledSelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 200px;
  overflow: hidden;
  height: 90px;
  padding: 8px;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
  margin: 0;
`;
export const StyledOption = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
