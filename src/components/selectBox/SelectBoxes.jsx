import { createPortal } from "react-dom";
import { useRef, useState, useEffect } from "react";
import {
  StyledSelect,
  StyledLabel,
  StyledSelectOptions,
  StyledOption,
} from "./selectStyled";

const Portal = ({ children }) => {
  const node = document.getElementById("selectBoxOptions");
  return createPortal(children, node);
};

const SelectBox = () => {
  const OPTIONS = [
    { value: "react", name: "react" },
    { value: "spring", name: "spring" },
    { value: "react native", name: "react native" },
  ];

  const [showOption, setShowOption] = useState(false);
  const [currentValue, setCurrentValue] = useState("react");
  const onChangeHandler = (e) => {
    setCurrentValue(e);
    setShowOption(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        selectToggleRef.current &&
        !selectToggleRef.current.contains(e.target) &&
        selectOptionRef.current &&
        !selectOptionRef.current.contains(e.target)
      ) {
        setShowOption(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const selectToggleRef = useRef(null);
  const selectOptionRef = useRef(null);

  useEffect(() => {
    if (showOption) {
      const selectTogglePosition =
        selectToggleRef.current.getBoundingClientRect();
      selectOptionRef.current.style.top = `${
        selectTogglePosition.bottom + window.scrollY
      }px`;
      selectOptionRef.current.style.left = `${
        selectTogglePosition.left + window.scrollX
      }px`;
    }
  }, [showOption]);

  return (
    <>
      <StyledSelect
        onClick={() => setShowOption((prev) => !prev)}
        ref={selectToggleRef}
      >
        <StyledLabel>{currentValue}</StyledLabel>
      </StyledSelect>
      {showOption && (
        <Portal>
          <StyledSelectOptions ref={selectOptionRef}>
            {OPTIONS.map((option) => (
              <StyledOption
                key={option.value}
                onClick={() => onChangeHandler(option.value)}
              >
                {option.name}
              </StyledOption>
            ))}
          </StyledSelectOptions>
        </Portal>
      )}
    </>
  );
};

export default SelectBox;
