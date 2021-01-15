import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Tooltip from "@material-ui/core/Tooltip";
import MainContext from "../contexts/MainContext";
import { StyledParagraphForArray } from "../styledComponents/StyledParagraphs";
import {
  CellWrapper,
  Wrapper,
  MainTitle,
  FeatureTitle,
  ArrayList,
  ArrayItem,
  AddIconWrapper,
  DeleteIconWrapper,
} from "../styledComponents/ArrayFeaturesStyles";

const useStyles = makeStyles((theme) => ({
  removeCircle: {
    color: "#f66588",
  },
  addCircle: {
    color: "#37e9da",
    width: "30px",
    height: "30px",
  },
}));

const DisplayArrayFeatures = ({ featureName, featureValue }) => {
  const classes = useStyles();
  const value = useContext(MainContext);
  const {
    removeFeature,
    removeEthnicity,
    handleFeatureModalOpen,
    selectFeatureType,
  } = value;
  return (
    <CellWrapper>
      <Wrapper>
        <MainTitle>{featureName}</MainTitle>
        <DeleteIconWrapper title="Delete">
          <IconButton
            aria-label="delete"
            onClick={() => removeFeature(featureName)}
          >
            <RemoveCircleIcon className={classes.removeCircle} />
          </IconButton>
        </DeleteIconWrapper>
      </Wrapper>
      <ArrayList>
        {featureValue.map((feature) => {
          return (
            <ArrayItem>
              <FeatureTitle>{feature}</FeatureTitle>
              <Tooltip title="Delete">
                <IconButton
                  aria-label="delete"
                  onClick={() => removeEthnicity(feature)}
                >
                  <RemoveCircleIcon className={classes.removeCircle} />
                </IconButton>
              </Tooltip>
              <StyledParagraphForArray>Or</StyledParagraphForArray>
            </ArrayItem>
          );
        })}
      </ArrayList>
      <AddIconWrapper title="Add">
        <IconButton
          aria-label="add"
          onClick={() => {
            selectFeatureType("Ethnicity");
            handleFeatureModalOpen();
          }}
        >
          <AddCircleIcon className={classes.addCircle} />
        </IconButton>
      </AddIconWrapper>
    </CellWrapper>
  );
};

export default DisplayArrayFeatures;
