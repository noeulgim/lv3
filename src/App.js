import Modal from "./components/modal/Modal";
import InputForm from "./components/inputForm/InputForm";
import SelectBox from "./components/selectBox/SelectBoxes";
import Buttons from "./components/button/Buttons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Button</h1>
        <Buttons />
      </div>
      <div>
        <h1>Input</h1>
        <InputForm />
      </div>
      <div>
        <h1>Modal</h1>
        <div style={{ display: "flex" }}>
          <Modal id="modal1" outSideClick />
          <Modal id="modal2" />
        </div>
      </div>
      <div style={{ overFlow: "hidden", height: "50px" }}>
        <h1>Select</h1>
        <div
          style={{
            height: "50px",
            overflow: "hidden",
            background: "red",
          }}
        >
          <div style={{ display: "flex" }}>
            <SelectBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
