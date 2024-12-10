import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { AlbumProps } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const AlbumComponent: React.FC<AlbumProps> = ({
  title,
  description,
  images,
}) => {
  const [album, setAlbum] = useState<AlbumProps>({
    title,
    description,
    images: images || [],
  });

  useEffect(() => {
    setAlbum({ title, description, images: images || [] });
  }, [title, description, images]);

  const handleChange =
    (field: keyof AlbumProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAlbum((prevAlbum) => ({
        ...prevAlbum,
        [field]: event.target.value,
      }));
    };

  const handleImagesChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newImages = [...album.images];
      newImages[index] = event.target.value;
      setAlbum((prevAlbum) => ({
        ...prevAlbum,
        images: newImages,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("album", album);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Album</Typography>
      <TextField
        fullWidth
        label="Title"
        value={album.title}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Description"
        value={album.description}
        margin="normal"
        onChange={handleChange("description")}
      />
      {album.images.map((image, index) => (
        <TextField
          key={index}
          fullWidth
          label={`Image ${index + 1}`}
          value={image}
          margin="normal"
          onChange={handleImagesChange(index)}
        />
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default AlbumComponent;
