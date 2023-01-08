import React from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/default-image.jpg";
import AboutContainer, {
  AboutButton,
  Info,
  LeftDiv,
  Wrapper,
} from "./About.style";

const About = () => {
  let navigate = useNavigate();
  return (
    <AboutContainer>
      <Wrapper>
        <LeftDiv>
          <img src={userImg} alt="" />
          <Info>
            <h2>Welcome To Has Kebab Recipes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              minima sunt non maiores tempora unde quam fuga similique qui
              debitis! Inventore, natus impedit itaque animi quos libero quo,
              alias, accusamus beatae atque nam vitae quisquam deserunt?
              Reiciendis obcaecati tenetur laboriosam nulla et. Fugit adipisci
              hic nihil ratione quae at cumque.
            </p>
          </Info>
        </LeftDiv>
        <AboutButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </AboutButton>
      </Wrapper>
    </AboutContainer>
  );
};

export default About;
