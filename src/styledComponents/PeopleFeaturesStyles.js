import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: sans-serif;
`;

export const Wrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  padding: 50px;
`;

export const MainTitle = styled.h1`
  margin: 20px 0;
  font-size: 16px;
  color: white;
  background: linear-gradient(#9e75f4, #7775f6);
  padding: 15px 50px;
  border-radius: 5px;
  display: inline-block;
  min-width: 200px;
  text-align: center;
`;

export const FeatureTitle = styled.p`
  font-weight: bold;
  color: "black";
`;

export const FeatureList = styled.ul`
  margin-left: 50px;
  padding-left: 50px;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 1px;
    height: calc(100% + 40px);
    background: #b8bdca;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  color: #4b597b;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  margin-bottom: 20px;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(#9e75f4, #7775f6);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &::after {
    content: "";
    color: #b8bdca;
    position: absolute;
    top: 50%;
    left: 0;
    width: 50px;
    height: 1px;
    background: #b8bdca;
    transform: translateX(-100%);
  }
`;
