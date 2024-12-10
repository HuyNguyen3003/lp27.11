import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { FooterProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const FooterComponent: React.FC<FooterProps> = ({ names, message }) => {
  const [footerData, setFooterData] = useState<FooterProps>({ names, message });

  useEffect(() => {
    setFooterData({ names, message });
  }, [names, message]);

  const handleChange =
    (field: keyof FooterProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFooterData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("footer", footerData);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Footer</Typography>
      <TextField
        fullWidth
        label="Names"
        value={footerData.names || ""}
        margin="normal"
        onChange={handleChange("names")}
      />
      <TextField
        fullWidth
        label="Message"
        value={footerData.message || ""}
        margin="normal"
        onChange={handleChange("message")}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default FooterComponent;
