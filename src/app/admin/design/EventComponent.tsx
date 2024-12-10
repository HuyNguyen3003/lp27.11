import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { EventProps, EventDetails } from "@/app/interface";
import { handleSaveDesign } from "@/app/utils";

const EventComponent: React.FC<EventProps> = ({ title, message, events }) => {
  const [eventData, setEventData] = useState<EventProps>({
    title,
    message,
    events: events || [],
  });

  useEffect(() => {
    setEventData({ title, message, events: events || [] });
  }, [title, message, events]);

  const handleChange =
    (field: keyof EventProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEventData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
      }));
    };

  const handleEventChange =
    (index: number, field: keyof EventDetails) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedEvents = [...eventData.events];
      updatedEvents[index] = {
        ...updatedEvents[index],
        [field]: event.target.value,
      };
      setEventData((prevData) => ({
        ...prevData,
        events: updatedEvents,
      }));
    };

  const handleSave = async () => {
    const result = await handleSaveDesign("event", eventData);
    if (result.status === 200) {
      alert("successfully");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Event</Typography>
      <TextField
        fullWidth
        label="Event Name"
        value={eventData.title || ""}
        margin="normal"
        onChange={handleChange("title")}
      />
      <TextField
        fullWidth
        label="Event Description"
        value={eventData.message || ""}
        margin="normal"
        onChange={handleChange("message")}
      />
      {eventData.events.map((event, index) => (
        <div key={index}>
          <TextField
            fullWidth
            label={`Event ${index + 1} Name`}
            value={event.name}
            margin="normal"
            onChange={handleEventChange(index, "name")}
          />
          <TextField
            fullWidth
            label={`Event ${index + 1} Time`}
            value={event.time}
            margin="normal"
            onChange={handleEventChange(index, "time")}
          />
          <TextField
            fullWidth
            label={`Event ${index + 1} Location`}
            value={event.location}
            margin="normal"
            onChange={handleEventChange(index, "location")}
          />
          <TextField
            fullWidth
            label={`Event ${index + 1} Image URL`}
            value={event.imageUrl}
            margin="normal"
            onChange={handleEventChange(index, "imageUrl")}
          />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default EventComponent;
