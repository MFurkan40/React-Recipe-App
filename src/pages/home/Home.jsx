import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import ImgDiv, {
  HeaderText,
  HomeDiv,
  HomeImg,
  NotFoundImg,
} from "./Home.style";
import homeSvg from "../../assets/home.svg";
import notFound from "../../assets/notFound.png";

const Home = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [query, setQuery] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    } else {
      alert("Fill the Form");
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log(recipes);

  if (error) {
    return (
      <HomeDiv>
        <Header
          setQuery={setQuery}
          setSelectedMeal={setSelectedMeal}
          mealType={mealType}
          getData={getData}
        />
        <>
          <HeaderText>{error.message} Data Not Found</HeaderText>
          <ImgDiv>
            <NotFoundImg src={notFound} />
          </ImgDiv>
        </>
      </HomeDiv>
    );
  } else if (recipes?.length === 0 && !selectedMeal) {
    return (
      <HomeDiv>
        <Header
          setQuery={setQuery}
          setSelectedMeal={setSelectedMeal}
          mealType={mealType}
          getData={getData}
        />

        <>
          <HeaderText>
            The Food can not be found.Please Select Your Meal
          </HeaderText>
          <ImgDiv>
            <NotFoundImg src={notFound} />
          </ImgDiv>
        </>
      </HomeDiv>
    );
  } else if (recipes?.length === 0 && selectedMeal) {
    return (
      <HomeDiv>
        <Header
          setQuery={setQuery}
          setSelectedMeal={setSelectedMeal}
          mealType={mealType}
          getData={getData}
        />
        <>
          <HeaderText>The Food can not be found.</HeaderText>
          <ImgDiv>
            <NotFoundImg src={notFound} />
          </ImgDiv>
        </>
      </HomeDiv>
    );
  } else {
    return (
      <HomeDiv>
        <Header
          setQuery={setQuery}
          setSelectedMeal={setSelectedMeal}
          mealType={mealType}
          getData={getData}
        />

        {!recipes && (
          <ImgDiv>
            <HomeImg src={homeSvg} />
          </ImgDiv>
        )}

        {recipes?.length > 0 && <Cards recipes={recipes} />}
      </HomeDiv>
    );
  }
};

export default Home;
