import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/weather/weather.actions";

const StyledForm = styled.form`
  background-color: #138bd6;
  height: 60px;
  padding: 0 30px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setCity(value));
  };

  return (
    <StyledForm className="form" onSubmit={(e) => e.preventDefault()}>
      <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleSearch} type="submit" disabled={!value}>
        Пошук
      </Button>
    </StyledForm>
  );
};

export default SearchBar;
