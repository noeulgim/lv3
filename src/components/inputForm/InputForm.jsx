import { useState } from "react";
import { StyledButton } from "../button/styledButtons";

function InputForm() {
  const [inputValue, setInputValue] = useState({ name: "", price: "" });
  const addComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      const str = value.replaceAll(",", "");
      setInputValue((prev) => ({
        ...prev,
        [name]: str,
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={onChangeHandler}
        />
      </label>
      <label>
        Price
        <input
          type="number"
          name="price"
          value={inputValue.price}
          onChange={onChangeHandler}
        />
      </label>
      <StyledButton
        $small
        $primary
        onClick={() => {
          alert(
            `name: ${inputValue.name} price: ${addComma(inputValue.price)}`
          );
          setInputValue({ name: "", price: "" });
        }}
      >
        Save
      </StyledButton>
    </div>
  );
}

export default InputForm;
