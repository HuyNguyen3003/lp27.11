import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { DetailStore, StoreProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const StoreComponent: React.FC<StoreProps> = ({
  title,
  description,
  storyItem,
}) => {
  const [storeData, setStoreData] = useState<StoreProps>({
    title,
    description,
    storyItem: storyItem || [],
  });

  useEffect(() => {
    setStoreData({ title, description, storyItem: storyItem || [] });
  }, [title, description, storyItem]);

  const handleChange =
    (field: keyof StoreProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStoreData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
      }));
    };

  const handleStoryChange =
    (index: number, field: keyof DetailStore) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedStoryItems = [...storeData.storyItem];
      updatedStoryItems[index] = {
        ...updatedStoryItems[index],
        [field]: event.target.value,
      };
      setStoreData((prevData) => ({
        ...prevData,
        storyItem: updatedStoryItems,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("store", storeData);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Store Details</Typography>
      <TextField
        fullWidth
        label="Title"
        value={storeData.title || ""}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Description"
        value={storeData.description || ""}
        margin="normal"
        onChange={handleChange("description")}
      />
      {storeData.storyItem.map((store, index) => (
        <div key={index}>
          <TextField
            fullWidth
            label={`Store ${index + 1} Title`}
            value={store.title}
            margin="normal"
            onChange={handleStoryChange(index, "title")}
          />
          <TextField
            fullWidth
            label={`Store ${index + 1} Detail`}
            value={store.detail}
            margin="normal"
            onChange={handleStoryChange(index, "detail")}
          />
          <TextField
            fullWidth
            label={`Store ${index + 1} Image`}
            value={store.srcImage}
            margin="normal"
            onChange={handleStoryChange(index, "srcImage")}
          />
          <TextField
            fullWidth
            label={`Store ${index + 1} Time`}
            value={store.time}
            margin="normal"
            onChange={handleStoryChange(index, "time")}
          />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default StoreComponent;
