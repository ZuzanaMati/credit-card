import React, { useEffect, useState } from "react";
import "./style.css";
import { useRef } from "react";

const CardInput = () => {
  const [input, setInput] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const inputRef = useRef({
    inputRef1: "",
    inputRef2: "",
    inputRef3: "",
    inputRef4: "",
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const handleOnChange = (input, e) => {
    setInput((prevState) => ({ ...prevState, [input]: e.target.value }));

    if (isNaN(e.target.value)) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  useEffect(() => {
    if (input.input1.length === 4 && !isNaN(input.input1)) {
      inputRef.current.inputRef2.focus();
    }
    if (input.input2.length === 4 && !isNaN(input.input2)) {
      inputRef.current.inputRef3.focus();
    }
    if (input.input3.length === 4 && !isNaN(input.input3)) {
      inputRef.current.inputRef4.focus();
    }
  }, [input]);

  return (
    <form className="form">
      <label>Zadejte číslo karty: </label>
      <div className="errorMessage">
        {errorMessage ? <p>Musíte zadat pouze čísla!</p> : null}
      </div>
      <div className="inputs">
        <input
          type="text"
          maxLength={4}
          ref={(el) => (inputRef.current.inputRef1 = el)}
          onChange={(e) => handleOnChange("input1", e)}
        />
        <input
          type="text"
          maxLength={4}
          ref={(el) => (inputRef.current.inputRef2 = el)}
          onChange={(e) => handleOnChange("input2", e)}
        />
        <input
          type="text"
          maxLength={4}
          ref={(el) => (inputRef.current.inputRef3 = el)}
          onChange={(e) => handleOnChange("input3", e)}
        />
        <input
          type="text"
          maxLength={4}
          ref={(el) => (inputRef.current.inputRef4 = el)}
          onChange={(e) => handleOnChange("input4", e)}
        />
      </div>
    </form>
  );
};
export default CardInput;
