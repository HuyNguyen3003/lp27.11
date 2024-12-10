import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { VideoProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const VideoComponent: React.FC<VideoProps> = ({
  title,
  description,
  videoUrl,
}) => {
  const [videoData, setVideoData] = useState<VideoProps>({
    title,
    description,
    videoUrl,
  });

  useEffect(() => {
    setVideoData({ title, description, videoUrl });
  }, [title, description, videoUrl]);

  const handleChange =
    (field: keyof VideoProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setVideoData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("video", videoData);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Video</Typography>
      <TextField
        fullWidth
        label="Title"
        value={videoData.title || ""}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Description"
        value={videoData.description || ""}
        margin="normal"
        onChange={handleChange("description")}
      />
      <TextField
        fullWidth
        label="Video URL"
        value={videoData.videoUrl || ""}
        margin="normal"
        onChange={handleChange("videoUrl")}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default VideoComponent;
