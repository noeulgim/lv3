import { createPortal } from "react-dom";
import { useState } from "react";
import { StyledModalOverlay, StyledModal } from "./modalStyled";
import { StyledButton } from "../button/styledButtons";

const Portal = ({ children }) => {
  const node = document.getElementById("modal");
  return createPortal(children, node);
};

const Modal = ({ id, outSideClick }) => {
  const modalContents = {
    modal1: (
      <div>
        <div>
          There are wo close and confirm buttons, and the modal does not close
          when you click the outside area.
          <br />
          When pressed the confirm button, the log will be shown on console.
        </div>
        <StyledButton $small $negative onClick={() => setShowModal(false)}>
          close
        </StyledButton>
      </div>
    ),
    modal2: (
      <div>
        <p>Modal 2 Content</p>
        <StyledButton $small $negative onClick={() => setShowModal(false)}>
          close
        </StyledButton>
        <StyledButton $small $primary>
          confirm
        </StyledButton>
      </div>
    ),
  };
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };
  return (
    <div>
      <StyledButton $large $negative onClick={openModal}>
        open modal
      </StyledButton>
      <Portal>
        {showModal && (
          <div>
            <StyledModalOverlay
              className="modal-overlay"
              onClick={outSideClick ? handleOutsideClick : undefined}
            >
              <StyledModal>{modalContents[id]}</StyledModal>
            </StyledModalOverlay>
          </div>
        )}
      </Portal>
    </div>
  );
};

export default Modal;
