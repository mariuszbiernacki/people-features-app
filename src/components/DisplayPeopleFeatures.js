import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MainContext from "../contexts/MainContext";
import DisplayArrayFeatures from "./DisplayArrayFeatures";
import { StyledParagraph } from "../styledComponents/StyledParagraphs";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  FeatureTitle,
  FeatureList,
  FeatureItem,
} from "../styledComponents/PeopleFeaturesStyles";

const useStyles = makeStyles((theme) => ({
  removeCircle: {
    color: "#f66588",
  },
  addBigCircle: {
    transform: "translate(14px, -15px)",
    width: "50px",
    height: "50px",
    color: "#37e9da",
  },
}));

const DisplayPeopleFeatures = () => {
  const classes = useStyles();
  const value = useContext(MainContext);
  const {
    peopleFeaturesList,
    removeFeature,
    handleFeatureModalOpen,
    selectFeatureType,
  } = value;
  return (
    <MainWrapper>
      <Wrapper>
        <MainTitle>People</MainTitle>

        {peopleFeaturesList.map((feature) => {
          const { featureName, featureValue } = feature;
          return (
            <FeatureList>
              {featureName !== "Ethnicity" ? (
                <FeatureItem>
                  <FeatureTitle>{`${featureName} ${featureValue}`}</FeatureTitle>
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeFeature(featureName)}
                    >
                      <RemoveCircleIcon className={classes.removeCircle} />
                    </IconButton>
                  </Tooltip>
                </FeatureItem>
              ) : (
                <DisplayArrayFeatures
                  featureName={featureName}
                  featureValue={featureValue}
                />
              )}
              <StyledParagraph>And</StyledParagraph>
            </FeatureList>
          );
        })}

        <Tooltip title="Add">
          <IconButton
            aria-label="add"
            onClick={() => {
              selectFeatureType();
              handleFeatureModalOpen();
            }}
          >
            <AddCircleIcon className={classes.addBigCircle} />
          </IconButton>
        </Tooltip>
      </Wrapper>
    </MainWrapper>
  );
};

export default DisplayPeopleFeatures;
