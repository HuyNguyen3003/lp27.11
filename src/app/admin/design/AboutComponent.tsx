import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { AboutProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const AboutComponent: React.FC<AboutProps> = ({
  title,
  messages,
  imageUrl,
}) => {
  const [about, setAbout] = useState<AboutProps>({
    title,
    messages: messages || [],
    imageUrl,
  });

  useEffect(() => {
    setAbout({ title, messages: messages || [], imageUrl });
  }, [title, messages, imageUrl]);

  const handleChange =
    (field: keyof AboutProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAbout((prevAbout) => ({
        ...prevAbout,
        [field]: event.target.value,
      }));
    };

  const handleMessagesChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newMessages = [...about.messages];
      newMessages[index] = event.target.value;
      setAbout((prevAbout) => ({
        ...prevAbout,
        messages: newMessages,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("about", about);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">About Details</Typography>
      <TextField
        fullWidth
        label="Title"
        value={about.title}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Image URL"
        value={about.imageUrl}
        margin="normal"
        onChange={handleChange("imageUrl")}
      />
      {about.messages.map((message, index) => (
        <div key={index}>
          <TextField
            fullWidth
            label={`Store ${index + 1} Title`}
            value={message}
            margin="normal"
            onChange={handleMessagesChange(index)}
          />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default AboutComponent;
