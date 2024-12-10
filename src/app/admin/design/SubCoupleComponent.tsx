import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { SubCoupleProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const SubCoupleComponent: React.FC<SubCoupleProps> = ({
  title,
  bridesmaid,
  groomsman,
}) => {
  const [subCoupleData, setSubCoupleData] = useState<SubCoupleProps>({
    title,
    bridesmaid,
    groomsman,
  });

  useEffect(() => {
    setSubCoupleData({ title, bridesmaid, groomsman });
  }, [title, bridesmaid, groomsman]);

  const handleChange =
    (field: keyof SubCoupleProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSubCoupleData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
      }));
    };

  const handleBridesmaidChange =
    (field: keyof typeof bridesmaid) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSubCoupleData((prevData) => ({
        ...prevData,
        bridesmaid: {
          ...prevData.bridesmaid,
          [field]: event.target.value,
        },
      }));
    };

  const handleGroomsmanChange =
    (field: keyof typeof groomsman) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSubCoupleData((prevData) => ({
        ...prevData,
        groomsman: {
          ...prevData.groomsman,
          [field]: event.target.value,
        },
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("subcouple", subCoupleData);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Subcouple</Typography>
      <TextField
        fullWidth
        label="Subcouple Name"
        value={subCoupleData.title || ""}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Bridesmaid Image URL"
        value={subCoupleData.bridesmaid.imageUrl || ""}
        margin="normal"
        onChange={handleBridesmaidChange("imageUrl")}
      />
      <TextField
        fullWidth
        label="Bridesmaid Name"
        value={subCoupleData.bridesmaid.name || ""}
        margin="normal"
        onChange={handleBridesmaidChange("name")}
      />
      <TextField
        fullWidth
        label="Bridesmaid Description"
        value={subCoupleData.bridesmaid.description || ""}
        margin="normal"
        onChange={handleBridesmaidChange("description")}
      />
      <TextField
        fullWidth
        label="Groomsman Image URL"
        value={subCoupleData.groomsman.imageUrl || ""}
        margin="normal"
        onChange={handleGroomsmanChange("imageUrl")}
      />
      <TextField
        fullWidth
        label="Groomsman Name"
        value={subCoupleData.groomsman.name || ""}
        margin="normal"
        onChange={handleGroomsmanChange("name")}
      />
      <TextField
        fullWidth
        label="Groomsman Description"
        value={subCoupleData.groomsman.description || ""}
        margin="normal"
        onChange={handleGroomsmanChange("description")}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default SubCoupleComponent;
