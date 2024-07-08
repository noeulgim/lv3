import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const StyledModal = styled.div`
  background-color: #fff;
  margin: 10%;
  padding: 5%;
  height: 50%;
`;
