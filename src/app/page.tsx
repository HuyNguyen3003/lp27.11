"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Video from "./page/video";
import Album from "./page/album";
import { Calendar } from "./page/date";
import About from "./page/about";
import Event from "./page/event";
import Couple from "./page/couple";
import SubCouple from "./page/subcouple";
import Donate from "./page/donate";
import Send from "./page/send";
import Footer from "./page/footer";
import Store from "./page/store";
import Header from "./page/header";
import { baseData } from "./utils";
import { InitDataInterface } from "./interface";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [initData, setInitData] = useState<InitDataInterface>();

  const sendRef = useRef<HTMLDivElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const system = await baseData("data");
      setInitData(system);
      setIsClient(true);
    };
    setIsClient(true);
    fetchData();
  }, []);

  if (!isClient) {
    return null;
  }

  const startDate = new Date(initData?.date.startDate || "2024-04-15");
  const weddingDate = new Date(initData?.date.weddingDate || "2024-04-15");

  const scrollToSend = () => {
    sendRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDonate = () => {
    donateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return isClient ? (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="hidden lg:block w-1/3 bg-gray-200 p-4">
        {/* Nội dung cột bên trái (nếu cần) */}
      </div>
      <div className="w-full lg:w-1/3 bg-white p-4 flex flex-col items-center">
        <Header
          mainImage={initData?.header?.mainImage || ""}
          subImage={initData?.header?.subImage || ""}
          title={initData?.header?.title || ""}
          subtitle={initData?.header?.subtitle || ""}
          date={initData?.header?.date || "15"}
          month={initData?.header?.month || "04"}
          onSendClick={scrollToSend}
          onDonateClick={scrollToDonate}
        />

        <Video
          title={initData?.video?.title || ""}
          description={initData?.video?.description || ""}
          videoUrl={initData?.video?.videoUrl || ""}
        />

        <Album
          title={initData?.album?.title || ""}
          description={initData?.album?.description || ""}
          images={initData?.album?.images || []}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <Calendar startDate={startDate} weddingDate={weddingDate} />
        </motion.div>

        <Store
          title={initData?.store?.title || ""}
          description={initData?.store?.description || ""}
          storyItem={initData?.store?.storyItem || []}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <About
            title={initData?.about?.title || ""}
            messages={initData?.about?.messages || []}
            imageUrl={initData?.about?.imageUrl || ""}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <Event
            title={initData?.event?.title || ""}
            message={initData?.event?.message || ""}
            events={initData?.event?.events || []}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <Couple
            title={initData?.couple?.title || ""}
            groom={{
              father: initData?.couple?.groom?.father || "",
              mother: initData?.couple?.groom?.mother || "",
              description: initData?.couple?.groom?.description || "",
              imageUrl: initData?.couple?.groom?.imageUrl || "",
            }}
            bride={{
              father: initData?.couple?.bride?.father || "",
              mother: initData?.couple?.bride?.mother || "",
              description: initData?.couple?.bride?.description || "",
              imageUrl: initData?.couple?.bride?.imageUrl || "",
            }}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <SubCouple
            title={initData?.subcouple?.title || ""}
            bridesmaid={{
              name: initData?.subcouple?.bridesmaid?.name || "",
              description: initData?.subcouple?.bridesmaid?.description || "",
              imageUrl: initData?.subcouple?.bridesmaid?.imageUrl || "",
            }}
            groomsman={{
              name: initData?.subcouple?.groomsman?.name || "",
              description: initData?.subcouple?.groomsman?.description || "",
              imageUrl: initData?.subcouple?.groomsman?.imageUrl || "",
            }}
          />
        </motion.div>
        <motion.div
          ref={donateRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <Donate
            groomBankDetails={{
              bankName: initData?.donate?.groomBankDetails?.bankName || "",
              accountName:
                initData?.donate?.groomBankDetails?.accountName || "",
              accountNumber:
                initData?.donate?.groomBankDetails?.accountNumber || "",
              imageUrl: initData?.donate?.groomBankDetails?.imageUrl || "",
            }}
            brideBankDetails={{
              bankName: initData?.donate?.brideBankDetails?.bankName || "",
              accountName:
                initData?.donate?.brideBankDetails?.accountName || "",
              accountNumber:
                initData?.donate?.brideBankDetails?.accountNumber || "",
              imageUrl: initData?.donate?.brideBankDetails?.imageUrl || "",
            }}
          />
        </motion.div>
        <motion.div
          ref={sendRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <Send />
        </motion.div>

        <Footer
          message={initData?.footer?.message || ""}
          names={initData?.footer?.names || ""}
        />
      </div>
      <div className="hidden lg:block w-1/3 bg-gray-200 p-4"></div>
    </div>
  ) : null;
}
