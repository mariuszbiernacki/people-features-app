import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

export const CellWrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  justify-content: space-between;
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

    position: absolute;
    top: 50%;
    left: 0;
    width: 50px;
    height: 1px;
    background: #b8bdca;
    transform: translateX(-100%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;
`;

export const MainTitle = styled.p`
  font-weight: bold;
  margin-top: 20px;
  padding: 15px 220px 15px 10px;
  border: 0.5px solid #b8bdca;
  border-radius: 5px;
`;

export const FeatureTitle = styled.p`
  font-weight: bold;
`;

export const ArrayList = styled.ul`
  margin-left: 50px;
  padding-left: 50px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: calc(100% + 15px);
    background: #b8bdca;
  }
`;

export const ArrayItem = styled.li`
  display: flex;
  color: #4b597b;
  font-size: 14px;
  margin-top: 20px;
  position: relative;
  border: 0.5px solid #b8bdca;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 50px;
    height: 1px;
    background: #b8bdca;
    transform: translateX(-100%);
  }
`;

export const AddIconWrapper = styled(Tooltip)`
  margin-left: 3.5px;
  padding: 10px 263px 10px 0px;
`;
export const DeleteIconWrapper = styled(Tooltip)`
  padding: 30px 40px 10px 10px;
`;
