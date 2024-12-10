import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { CoupleProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const CoupleComponent: React.FC<CoupleProps> = ({ title, groom, bride }) => {
  const [couple, setCouple] = useState<CoupleProps>({
    title,
    groom,
    bride,
  });

  useEffect(() => {
    setCouple({ title, groom, bride });
  }, [title, groom, bride]);

  const handleChange =
    (field: keyof CoupleProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCouple((prevCouple) => ({
        ...prevCouple,
        [field]: event.target.value,
      }));
    };

  const handleGroomChange =
    (field: keyof typeof groom) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCouple((prevCouple) => ({
        ...prevCouple,
        groom: {
          ...prevCouple.groom,
          [field]: event.target.value,
        },
      }));
    };

  const handleBrideChange =
    (field: keyof typeof bride) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCouple((prevCouple) => ({
        ...prevCouple,
        bride: {
          ...prevCouple.bride,
          [field]: event.target.value,
        },
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("couple", couple);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Couple Details</Typography>
      <TextField
        fullWidth
        label="Title"
        value={couple.title}
        margin="normal"
        onChange={handleChange("title")}
      />

      <TextField
        fullWidth
        label="Groom's Father"
        value={couple.groom.father}
        margin="normal"
        onChange={handleGroomChange("father")}
      />
      <TextField
        fullWidth
        label="Groom's Mother"
        value={couple.groom.mother}
        margin="normal"
        onChange={handleGroomChange("mother")}
      />
      <TextField
        fullWidth
        label="Groom's Image URL"
        value={couple.groom.imageUrl}
        margin="normal"
        onChange={handleGroomChange("imageUrl")}
      />
      <TextField
        fullWidth
        label="Groom's Description"
        value={couple.groom.description}
        margin="normal"
        onChange={handleGroomChange("description")}
      />

      <TextField
        fullWidth
        label="Bride's Father"
        value={couple.bride.father}
        margin="normal"
        onChange={handleBrideChange("father")}
      />
      <TextField
        fullWidth
        label="Bride's Mother"
        value={couple.bride.mother}
        margin="normal"
        onChange={handleBrideChange("mother")}
      />
      <TextField
        fullWidth
        label="Bride's Image URL"
        value={couple.bride.imageUrl}
        margin="normal"
        onChange={handleBrideChange("imageUrl")}
      />
      <TextField
        fullWidth
        label="Bride's Description"
        value={couple.bride.description}
        margin="normal"
        onChange={handleBrideChange("description")}
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default CoupleComponent;
