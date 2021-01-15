import React, { useState } from "react";
import MainContext from "../contexts/MainContext";
import { peopleFeaturesArray } from "../localData/localData";
import DisplayPeopleFeatures from "../components/DisplayPeopleFeatures";
import AddFeatureModal from "../components/AddFeatureModal";

const Root = () => {
  const [peopleFeaturesList, setPeopleFeaturesList] = useState([
    ...peopleFeaturesArray,
  ]);
  const [isAddFeatureModalOpen, setIsAddFeatureModalOpen] = useState(false);
  const [featureType, setFeatureType] = useState("");

  const addNewFeature = (e) => {
    e.preventDefault();
    const newFeature = {
      featureName: e.target.featureName.value,
      featureValue: e.target.featureValue.value,
    };
    setPeopleFeaturesList([...peopleFeaturesList, newFeature]);
    e.target.reset();
  };

  const addNewEthnicity = (e) => {
    e.preventDefault();
    const newEthnicity = e.target.featureValue.value;

    const ethnicityList = peopleFeaturesList.map((feature) => {
      if (feature.featureName === "Ethnicity") {
        feature.featureValue.push(newEthnicity);
      }
      return feature;
    });
    setPeopleFeaturesList([...ethnicityList]);
  };

  const handleFeatureModalOpen = () => {
    setIsAddFeatureModalOpen(true);
  };

  const selectFeatureType = (feature) => {
    setFeatureType(feature);
  };

  const handleFeatureModalClose = () => {
    setIsAddFeatureModalOpen(false);
  };

  const removeFeature = (featureName) => {
    const filteredFeatureList = peopleFeaturesList.filter(
      (feature) => feature.featureName !== featureName
    );
    setPeopleFeaturesList([...filteredFeatureList]);
  };

  const removeEthnicity = (ethnicityName) => {
    const ethnicityList = peopleFeaturesList.map((feature) => {
      if (feature.featureName === "Ethnicity") {
        if (feature.featureValue.includes(ethnicityName)) {
          const newFeatureValue = feature.featureValue.filter(
            (value) => value !== ethnicityName
          );
          feature.featureValue = [...newFeatureValue];
        }
      }
      return feature;
    });
    setPeopleFeaturesList([...ethnicityList]);
  };
  return (
    <MainContext.Provider
      value={{
        peopleFeaturesList,
        removeFeature,
        removeEthnicity,
        handleFeatureModalOpen,
        handleFeatureModalClose,
        isAddFeatureModalOpen,
        featureType,
        selectFeatureType,
        addNewFeature,
        addNewEthnicity,
      }}
    >
      <DisplayPeopleFeatures />
      <AddFeatureModal />
    </MainContext.Provider>
  );
};

export default Root;
