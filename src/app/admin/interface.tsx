import React, { useEffect, useState } from "react";
import { InitDataInterface } from "../interface";
import { Typography, Grid } from "@mui/material";
import HeaderComponent from "./design/HeaderComponent";
import VideoComponent from "./design/VideoComponent";
import AlbumComponent from "./design/AlbumComponent";
import DateComponent from "./design/DateComponent";
import StoreComponent from "./design/StoreComponent";
import AboutComponent from "./design/AboutComponent";
import EventComponent from "./design/EventComponent";
import CoupleComponent from "./design/CoupleComponent";
import SubCoupleComponent from "./design/SubCoupleComponent";
import DonateComponent from "./design/DonateComponent";

const Interface: React.FC<InitDataInterface> = ({
  header,
  video,
  album,
  date,
  store,
  about,
  event,
  couple,
  subcouple,
  donate,
  footer,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState<InitDataInterface>();

  useEffect(() => {
    setIsClient(true);
    setData({
      header,
      video,
      album,
      date,
      store,
      about,
      event,
      couple,
      subcouple,
      donate,
      footer,
    });
  }, [
    header,
    video,
    album,
    date,
    store,
    about,
    event,
    couple,
    subcouple,
    donate,
    footer,
  ]);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        CMS Interface
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={2.4}>
          <HeaderComponent
            title={header?.title || ""}
            subtitle={header?.subtitle || ""}
            mainImage={header?.mainImage || ""}
            subImage={header?.subImage || ""}
            month={header?.month || ""}
            date={header?.date || ""}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <AboutComponent
            title={about?.title || ""}
            messages={about?.messages || []}
            imageUrl={about?.imageUrl || ""}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <AlbumComponent
            title={album?.title || ""}
            description={album?.description || ""}
            images={album?.images || []}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <SubCoupleComponent
            title={subcouple?.title || ""}
            bridesmaid={{
              imageUrl: subcouple?.bridesmaid?.imageUrl || "",
              name: subcouple?.bridesmaid?.name || "",
              description: subcouple?.bridesmaid?.description || "",
            }}
            groomsman={{
              imageUrl: subcouple?.groomsman?.imageUrl || "",
              name: subcouple?.groomsman?.name || "",
              description: subcouple?.groomsman?.description || "",
            }}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <CoupleComponent
            title={couple?.title || ""}
            groom={{
              father: couple?.groom?.father || "",
              mother: couple?.groom?.mother || "",
              imageUrl: couple?.groom?.imageUrl || "",
              description: couple?.groom?.description || "",
            }}
            bride={{
              father: couple?.bride?.father || "",
              mother: couple?.bride?.mother || "",
              imageUrl: couple?.bride?.imageUrl || "",
              description: couple?.bride?.description || "",
            }}
          />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <StoreComponent
            title={store?.title || ""}
            description={store?.description || ""}
            storyItem={store?.storyItem || []}
          />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <DonateComponent
            brideBankDetails={{
              accountName: donate?.brideBankDetails?.accountName || "",
              accountNumber: donate?.brideBankDetails?.accountNumber || "",
              bankName: donate?.brideBankDetails?.bankName || "",
              imageUrl: donate?.brideBankDetails?.imageUrl || "",
            }}
            groomBankDetails={{
              accountName: donate?.groomBankDetails?.accountName || "",
              accountNumber: donate?.groomBankDetails?.accountNumber || "",
              bankName: donate?.groomBankDetails?.bankName || "",
              imageUrl: donate?.groomBankDetails?.imageUrl || "",
            }}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <EventComponent
            title={event?.title || ""}
            message={event?.message || ""}
            events={event?.events || []}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <DateComponent
            startDate={data?.date?.startDate || ""}
            weddingDate={data?.date?.weddingDate || ""}
          />
        </Grid>

        <Grid item xs={12} md={2.4}>
          <VideoComponent
            title={video?.title || ""}
            description={video?.description || ""}
            videoUrl={video?.videoUrl || ""}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Interface;
