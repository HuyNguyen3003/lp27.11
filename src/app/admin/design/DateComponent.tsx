import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { DateStringProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const DateComponent: React.FC<DateStringProps> = ({
  startDate,
  weddingDate,
}) => {
  const [dates, setDates] = useState<DateStringProps>({
    startDate,
    weddingDate,
  });

  useEffect(() => {
    setDates({ startDate, weddingDate });
  }, [startDate, weddingDate]);

  const handleChange =
    (field: keyof DateStringProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDates((prevDates) => ({
        ...prevDates,
        [field]: event.target.value,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("date", dates);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Date</Typography>
      <TextField
        fullWidth
        label="Start Date"
        value={dates.startDate}
        margin="normal"
        onChange={handleChange("startDate")}
      />
      <TextField
        fullWidth
        label="Wedding Date"
        value={dates.weddingDate}
        margin="normal"
        onChange={handleChange("weddingDate")}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default DateComponent;
