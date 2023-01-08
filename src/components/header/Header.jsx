import { useState } from "react";
import "./Header.style";
import HeaderContianer, {
  Button,
  FoodInput,
  FormContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setValue("");
  };

  const handleSetValues = (value) => {
    setQuery(value);
    setValue(value);
  };

  const selectAlert = (e) => {};
  return (
    <HeaderContianer>
      <MainHeader>HAS KEBAB RECIPE</MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => handleSetValues(e.target.value)}
          required
        />
        <Button type="submit" onClick={() => selectAlert()}>
          SEARCH
        </Button>

        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          <option value={null}>Select Meal</option>
          {mealType.map((meal, index) => (
            <option key={index} value={meal}>
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContianer>
  );
};

export default Header;
