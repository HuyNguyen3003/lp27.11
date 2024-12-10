import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { DonateProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const DonateComponent: React.FC<DonateProps> = ({
  brideBankDetails,
  groomBankDetails,
}) => {
  const [bankDetails, setBankDetails] = useState<DonateProps>({
    brideBankDetails,
    groomBankDetails,
  });

  useEffect(() => {
    setBankDetails({ brideBankDetails, groomBankDetails });
  }, [brideBankDetails, groomBankDetails]);

  const handleBrideChange =
    (field: keyof typeof brideBankDetails) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBankDetails((prevDetails) => ({
        ...prevDetails,
        brideBankDetails: {
          ...prevDetails.brideBankDetails,
          [field]: event.target.value,
        },
      }));
    };

  const handleGroomChange =
    (field: keyof typeof groomBankDetails) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBankDetails((prevDetails) => ({
        ...prevDetails,
        groomBankDetails: {
          ...prevDetails.groomBankDetails,
          [field]: event.target.value,
        },
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("donate", bankDetails);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Donate</Typography>
      <TextField
        fullWidth
        label="Bride's Account Name"
        value={bankDetails.brideBankDetails.accountName || ""}
        margin="normal"
        onChange={handleBrideChange("accountName")}
      />
      <TextField
        fullWidth
        label="Bride's Account Number"
        value={bankDetails.brideBankDetails.accountNumber || ""}
        margin="normal"
        onChange={handleBrideChange("accountNumber")}
      />
      <TextField
        fullWidth
        label="Bride's Bank Name"
        value={bankDetails.brideBankDetails.bankName || ""}
        margin="normal"
        onChange={handleBrideChange("bankName")}
      />
      <TextField
        fullWidth
        label="Bride's Image URL"
        value={bankDetails.brideBankDetails.imageUrl || ""}
        margin="normal"
        onChange={handleBrideChange("imageUrl")}
      />
      <TextField
        fullWidth
        label="Groom's Account Name"
        value={bankDetails.groomBankDetails?.accountName || ""}
        margin="normal"
        onChange={handleGroomChange("accountName")}
      />
      <TextField
        fullWidth
        label="Groom's Account Number"
        value={bankDetails.groomBankDetails?.accountNumber || ""}
        margin="normal"
        onChange={handleGroomChange("accountNumber")}
      />
      <TextField
        fullWidth
        label="Groom's Bank Name"
        value={bankDetails.groomBankDetails?.bankName || ""}
        margin="normal"
        onChange={handleGroomChange("bankName")}
      />
      <TextField
        fullWidth
        label="Groom's Image URL"
        value={bankDetails.groomBankDetails?.imageUrl || ""}
        margin="normal"
        onChange={handleGroomChange("imageUrl")}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default DonateComponent;
