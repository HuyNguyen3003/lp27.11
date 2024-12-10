import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { HeaderProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

function HeaderComponent({
  title,
  subtitle,
  mainImage,
  subImage,
  month,
  date,
}: HeaderProps) {
  const [header, setHeader] = useState<HeaderProps>({
    title,
    subtitle,
    mainImage,
    subImage,
    month,
    date,
  });

  useEffect(() => {
    setHeader({ title, subtitle, mainImage, subImage, month, date });
  }, [title, subtitle, mainImage, subImage, month, date]);

  const handleChange =
    (field: keyof HeaderProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHeader((prevHeader) => ({
        ...prevHeader,
        [field]: event.target.value,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("header", header);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Header</Typography>
      <TextField
        fullWidth
        label="Title"
        value={header.title}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Subtitle"
        value={header.subtitle}
        margin="normal"
        onChange={handleChange("subtitle")}
      />
      <TextField
        fullWidth
        label="Main Image"
        value={header.mainImage}
        margin="normal"
        onChange={handleChange("mainImage")}
      />
      <TextField
        fullWidth
        label="Sub Image"
        value={header.subImage}
        margin="normal"
        onChange={handleChange("subImage")}
      />
      <TextField
        fullWidth
        label="Month"
        value={header.month}
        margin="normal"
        onChange={handleChange("month")}
      />
      <TextField
        fullWidth
        label="Date"
        value={header.date}
        margin="normal"
        onChange={handleChange("date")}
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
}

export default HeaderComponent;
