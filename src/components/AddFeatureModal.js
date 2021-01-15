import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import MainContext from "../contexts/MainContext";
import AddFeatureForm from "./AddFeatureForm";
import AddArrayFeatureForm from "../components/AddArrayFeatureForm";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const AddFeatureModal = () => {
  const value = useContext(MainContext);
  const { handleFeatureModalClose, isAddFeatureModalOpen, featureType } = value;
  return (
    <Dialog
      open={isAddFeatureModalOpen}
      onClose={handleFeatureModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogActions>
          {featureType === "Ethnicity" ? (
            <AddArrayFeatureForm />
          ) : (
            <AddFeatureForm />
          )}
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default AddFeatureModal;
